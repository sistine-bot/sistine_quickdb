const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base


    const embed = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setTitle(`${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setDescription("**[📥 clique aqui para baixar a imagem](" + message.guild.iconURL() + ")**")
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setColor('#4287f5')
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'servericon',
  aliases: ["serverfoto"]
}
