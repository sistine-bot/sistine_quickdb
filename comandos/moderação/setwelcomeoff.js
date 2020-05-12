const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  let member = message.mentions.users.first() || message.author;
    
  let canall = await db.get(`canalb_${message.guild.id}`)
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permisão de: `ADIMINISTRADOR` para utilizar este comando.")
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Você deseja desativar o setwelcome deste servidor?, Não será mais enviado as mensagens de quando um mebro sair`)
    message.channel.send(embed).then(msg => {
      
    msg.react('700492893651075112').then(() => msg.react('700492899833479249'))

    const filter = (reaction, user) => { 
      return ['700492893651075112', '700492899833479249'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) 
      .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.id === '700492893651075112') {
          msg.delete()
          message.channel.send('<:dokycerto:700492893651075112> » Setwelcome resetado com sucesso'); 
          db.set(`canalb_${message.guild.id}`, 0)
        }
      
        if (reaction.emoji.id === '700492899833479249') {
          msg.delete()
          message.channel.send('<:dokyerro:700492899833479249> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
}

exports.help = {
    name: 'setwelcomeoff',
  aliases: ["setwelcomeoff"]
}