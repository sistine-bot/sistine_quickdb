const Discord = require('discord.js');
const config = require('../../config.json')
const db = require('quick.db');

exports.run = (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`

    const embed = new Discord.MessageEmbed()
    .setDescription(`Meu prefixo neste servidor e: \`${prefixos}\``)
    .setColor('4287f5');
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'teste',
  aliases: []
};
