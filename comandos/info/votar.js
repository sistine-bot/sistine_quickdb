const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM moment (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o local do moment, no nosso caso, pt-BR

exports.run = (client, message, args) => { // setando a base
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.username}`, client.user.displayAvatarURL())
    //.setColor("#2f3136")
    .setColor(`4287f5`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`**Vote em mim [aqui](https://top.gg/bot/698287896997789746/vote) para eu ser uma BOT reconhecida.**`)
    message.channel.send({embed})
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'votar',
  aliases: ["vote"]
}
