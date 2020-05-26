const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  
  const ids = ['647385003822678026']
  if (message.author.id === ids) return message.channel.send('<:gierro:710197544751202414> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
  if (!args[0]){
    message.channel.send(`<:giatencao:710196761704267807> » Você precisa escrever algo`)
  } else {
  
      const embed = new Discord.MessageEmbed()
      .setTitle(`Bug`)
      .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n🐛 **Bug:**`+'```'+` ${args[0]}`+'```')
      .setColor('4287f5')
      client.channels.cache.get('699474891983945788').send(embed)

    
  message.reply(`Seu bug foi enviado ao canal de bugs - 🐛`)
  }
}

exports.help = {
 name: 'bug',
  aliases: ["bugs"],
}