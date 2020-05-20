const Discord = require('discord.js');
const c = require('../config.json');
const db = require('quick.db');

module.exports = (oldMessage, newMessage, message, guild) => {
  if (message.channel.type === "dm") return;
  
    let envlog = db.get(`envlog_${message.guild.id}`)
    if (envlog === null) envlog = '`Nenhum canal definido!`';
    if (envlog === 0) envlog = '`Nenhum canal definido!`';
  
    let canal = message.guild.channels.cache.get(envlog)
    if (!canal) return;

    if (newMessage.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
        .setDescription('📝 **<@' + message.author.id + '> editou uma mensagem de texto**\n\n**Canal de texto:** <#' + message.channel.id + '>\n\n**Antiga mensagem**: \n```' + newMessage.content + '```\n\n**Nova mensagem**: \n```' + message.content + '``` ')
        .setColor("ff0000")
        .setTimestamp()
    canal.send(embed);
}