const Discord = require('discord.js');

exports.run = (doky, message, args) => {
  
  var sugestao = args.slice(0).join(' ');
  if (!sugestao) message.reply(`<:dokyatencao:700517263224340601> » Você precisa escrever algo`)
  
      let embed = new Discord.MessageEmbed()

        .setTitle(`Bug`)
        .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n🐛 **Bug:**`+'```'+` ${sugestao}`+'```')
        .setColor('RANDOM')
        
        doky.channels.cache.get('699474891983945788').send(embed)

  message.reply(`Seu bug foi enviado ao canal de bugs - 🐛`)
}

exports.help = {
 name: 'bug',
  aliases: ["bugs"],
}