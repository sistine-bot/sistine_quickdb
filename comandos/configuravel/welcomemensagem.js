const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  
  let canalbmsg = await db.get(`canalbmsg_${message.guild.id}`)
  if (canalbmsg === null) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  if (canalbmsg === 0) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  
  if (args[0] === 'help') {
    return message.channel.send(new Discord.MessageEmbed()
                .setTitle('Precisa de ajuda para configurar?')
                .setDescription(`
Para colocar uma mensagem de bem vindo utilize **${config.prefix}welcomemensagem \`mensagem\`**
**Abaixo meus semi's prefixos**

**{member}** para mencionar o usuario que entrou
**{servidor}** para mostrar o nome do servidor
**{usuarios}** para mostar o numero de usuarios no servidor`)
                               .setColor('#4287f5'))
  }
  let mensagem = args.slice(0).join(' ')
  if (!mensagem) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
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
          message.channel.send('<:gicerto:710198069068562473> » A mensagem\n\n'+`\`\`\`\markdown\n# ${mensagem}\`\`\`\n\nFoi definida como mensagem de welcome`); 
          db.set(`canalbmsg_${message.guild.id}`, mensagem)
        
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gierro:710197544751202414> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
}

exports.help = {
    name: 'welcomemensagem',
  aliases: ["mensagemwelcome"]
}