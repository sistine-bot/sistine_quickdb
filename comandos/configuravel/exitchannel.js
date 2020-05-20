const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
    
  let canallmsg = await db.get(`canallmsg_${message.guild.id}`)
  if (canallmsg === null) canallmsg = '`Nenhum canal definida!`';
  if (canallmsg === 0) canallmsg = '`Nenhuma mensagem definida!`';
  
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("<:gierro:710197544751202414> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando.")
  
  
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} <#canal>` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Mensagens\``, false)
                .setColor('4287f5'));
        }
  
  if (args[0] === 'reset') {
    const embedreset = new Discord.MessageEmbed()
    .setDescription(`Você deseja desativar o setleave deste servidor?, Não será mais enviado as mensagens de quando um usuario sair`)
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
          db.delete(`canall_${message.guild.id}`)
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
  }
  
    if (isNaN(args[0])){
        return message.reply(`<:gierro:710197544751202414> » Você deve me indicar o id de um canal`)
}
    
    if (!args[0]) return message.channel.send('<:gierro:710197544751202414> » Você deve me indicar um id de um canal!')
    
    console.log(`canal de leave member setado com sucesso: <#${args[0]}> no servidor: ${message.guild.name} id: ${message.guild.id}`)
    client.channels.cache.get('705126526194024510').send(`canal de leave setado com sucesso: <#${args[0]}> no servidor: ${message.guild.name} id: ${message.guild.id}`)
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você deseja colocar o canal\n\n<#${args[0]}>\n\nComo o canal que será enviado a mensagem de quando um usuario sair do servidor?`)
  .setColor('4287f5');
  message.channel.send(embed).then(msg => {
      
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
          message.channel.send('<:gicerto:710198069068562473> » Você definiu o canal de exit member em: '+`<#${args[0]}>`)
          
          db.set(`canall_${message.guild.id}`, args[0])
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
    })
    })
}

exports.help = {
    name: 'exitchannel',
  aliases: ["channelexit"]
}