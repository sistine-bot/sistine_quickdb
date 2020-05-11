const Discord = require('discord.js')

module.exports = (doky, guild) => {
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Tchau`)
    .setDescription(`Doky foi removido do servidor: **${guild.name}**\n\n(id: ${guild.id})`)
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true}))
    .setColor('#ff0000')
  
  doky.channels.cache.get('706605848616763413').send(logembed)
};