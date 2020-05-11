const Discord = require('discord.js')

module.exports = (doky, guild) => {
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Novo servidor`)
    .setDescription(`Doky entrou no servidor **${guild.name}**\n\n(id: ${guild.id}). Usuarios ${guild.memberCount} !`)
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true}))
    .setColor('#00ff2f')
  
  doky.channels.cache.get('706605848616763413').send(logembed)
};