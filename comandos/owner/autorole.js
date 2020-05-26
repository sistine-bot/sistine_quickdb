const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let lbrole = await db.get(`lbrole_${message.guild.id}`)
  if (lbrole === null) lbrole = '`Nenhum cargo definido`'
  if (lbrole === 0) lbrole = '`Nenhum cargo definido`'
  
  let cargo = message.mentions.roles.first();
  let role = cargo.id
  
  if (!cargo) {
    return message.channel.send(new Discord.MessageEmbed()
                               .setDescription(`Você deve mencionar um cargo para que eu possa adicionar quando um usuario entrar!`)
                               .setColor('4287f5'))
  }
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você deseja colocar o cargo\n\n${role}\n\nComo o cargo de auto role?, Ele será atribuido a todos os usurios que entrarem no servidor`)
  .setColor('4287f5')
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
          message.channel.send('<:gicerto:710198069068562473> » Você definiu o cargo como cargo de auto role: '+`<@&${role}>`)
          
          db.set(`canall_${message.guild.id}`, role)
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
    })
    })
}

exports.help = {
  name: 'autorole',
  aliases: []
}