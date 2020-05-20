const Discord = require('discord.js')

module.exports = (client, guild) => {
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Novo servidor`)
    .setDescription(`${client.user.username} entrou no servidor **${guild.name}**\n\n(id: ${guild.id}). Usuarios ${guild.memberCount} !`)
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true}))
    .setColor('#00ff2f')
  
  client.channels.cache.get('706605848616763413').send(logembed)
};