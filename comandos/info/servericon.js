const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (doky, message, args) => { // setando a base


    let embed = new Discord.MessageEmbed()

    .setColor('AQUA')
    .setTitle(`${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setDescription("**[📥 clique aqui para baixar a imagem](" + message.guild.iconURL() + ")**")
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setColor('#36393e')
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'servericon',
  aliases: ["serverfoto"]
}
