const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
    
  let canalbmsg = await db.get(`canalbmsg_${message.guild.id}`)
  if (canalbmsg === null) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  if (canalbmsg === 0) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  
  
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**Precisa de ajuda?**")
                .setDescription(`Minhas alternativas são:\n
${prefixos}welcome channel [ id ] - vai definir um novo canal
${prefixos}welcome mensagem [ nova mensagem ] - vai definir a nova mensagem
${prefixos}welcome reset - vai resetar a mensagem de welcome

*mais alguma duvida utilize: ${prefixos}welcome help*
`)
                .setColor('4287f5'));
        }
  
  if (args[0] === 'reset') {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("<:gierro:710197544751202414> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando.")
    
    const embedreset = new Discord.MessageEmbed()
    .setDescription(`Você deseja desativar o welcome neste servidor?, Não será mais enviado as mensagens de quando um usuario entrar nesse servidor`)
    .setColor('4287f5')
    
    message.channel.send(embedreset).then(msg => {
      
      //<:gierro:710197544751202414> 
      //<:gicerto:710198069068562473> 
    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { 
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) 
      .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.id === '710198069068562473') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Setwelcome resetado com sucesso'); 
          db.delete(`canalb_${message.guild.id}`)
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
  } 
  else if (args[0] === 'channel'){
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("<:gierro:710197544751202414> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando.")
    
    if (isNaN(args[1])){
        return message.channel.send(`<:gierro:710197544751202414> » Você deve me indicar o id de um canal`)
        }
  
    
  console.log(`canal de welcome member setado com sucesso: ${args[1]} no servidor: ${message.guild.name} id: ${message.guild.id}`)
  client.channels.cache.get('705126526194024510').send(`canal de welcome setado com sucesso: ${args[0]} no servidor: ${message.guild.name} id: ${message.guild.id}`)
  
  const embedi = new Discord.MessageEmbed()
  .setDescription(`Você deseja colocar o canal\n\n <#${args[1]}>\n\nComo o canal que será enviado a mensagem de bem vindo?`)
  .setColor('4287f5')
  message.channel.send(embedi).then(msg => {
      
      //<:gierro:710197544751202414> 
      //<:gicerto:710198069068562473> 
    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { 
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) 
      .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.id === '710198069068562473') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Você definiu o canal de bem vindo em: '+`<#${args[1]}>`); 
          db.set(`canalb_${message.guild.id}`, args[1])
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
    })
    })
    
} else if (args[0] === 'mensagem') {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("<:gierro:710197544751202414> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando.")
  
  let mensagem = args.slice(1).join(' ')
  if (!mensagem) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`Nenhuma alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Mensagens\``, false)
                .setColor('#4287f5'));
        }
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando.")
  
  function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`Você deseja colocar a mensagem\n\`\`\`\markdown\n# ${mensagem}\`\`\`\n\nComo a mensagem de quando algum usuario entrar no servidor?`)
    .setColor('4287f5');
  
    message.channel.send(embed).then(msg => {
      
    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { 
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) 
      .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.id === '710198069068562473') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » A mensagem\n\n'+`\`\`\`\ini\n[ ${mensagem} ]\`\`\`\n\nFoi definida como mensagem de welcome`); 
          db.set(`canalbmsg_${message.guild.id}`, mensagem)
        
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gierro:710197544751202414> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
  } 
  
  if (args[0] === 'help') {
    return message.channel.send(new Discord.MessageEmbed()
                .setTitle('Precisa de ajuda para configurar o welcome?')
                .setDescription(`
**Para definir o canal que será enviado a mensagem**
Caso queira alterar o canal utilize **${prefixos}welcome channel \`[ id ]\`**

*Define o canal onde será enviado a mensagem*

**Mensagem**

Para colocar uma mensagem de bem vindo utilize **${prefixos}welcome mensagem \`nova mensagem\`**
**Abaixo minhas estão minhas variaveis.**

**{member}** para mencionar o usuario que entrou
**{servidor}** para mostrar o nome do servidor
**{usuarios}** para mostar o numero de usuarios no servidor

**Caso queira resetar**
Caso queria resetar meu sistema de bem vindo utilize **${prefixos}welcome reset**
`)
.setColor('#4287f5'))
  }
  
}

exports.help = {
    name: 'welcome',
  aliases: []
}