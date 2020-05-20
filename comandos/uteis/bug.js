const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  //var sugestao = args.slice(0).join(' ');
  if (!args[0]) message.channel.send(`<:giatencao:710196761704267807> » Você precisa escrever algo`)
  
      let embed = new Discord.MessageEmbed()

        .setTitle(`Bug`)
        .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n🐛 **Bug:**`+'```'+` ${args[0]}`+'```')
        .setColor('4287f5')
        
        client.channels.cache.get('699474891983945788').send(embed)

  message.channel.send(`Seu bug foi enviado ao canal de bugs - 🐛`)
}

exports.help = {
 name: 'bug',
  aliases: ["bugs"],
}