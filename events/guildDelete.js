const Discord = require('discord.js')

module.exports = (client, guild) => {
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Tchau`)
    .setDescription(`${client.user.username} Foi removida de um servidor.

Nome: 
\`${guild.name}\`

Id:
\`${guild.id}\`

Dono do servidor:
\`${guild.owner.user.username}\`

Membros:
\`${guild.memberCount}\`
`)
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true}))
    .setColor('#ff0000')
  
  client.channels.cache.get('706605848616763413').send(logembed)
};