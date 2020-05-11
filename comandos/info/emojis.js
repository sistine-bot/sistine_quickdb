const Discord = require('discord.js');

exports.run = async (doky, message, args) => {

try {

let notAnimated = []
let animated = []


message.guild.emojis.cache.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString())
        else notAnimated.push(emoji.toString())
      })

      if (!animated[0]) animated = ['Nenhum']
     if (!notAnimated[0]) notAnimated = ['Nenhum']

      let embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
.setDescription('**Emotes Animados:**\n'
+ animated.join(' ')
+ '\n\n**Emotes Normais:**\n'
+ notAnimated.join(' '))
      message.channel.send(embed)
  } catch (err) {
message.channel.send('Erro :/ >' + err).catch()
  }
}

exports.help = {
   name: 'emojis',
  aliases: []
}

