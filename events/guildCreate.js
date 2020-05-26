const Discord = require('discord.js')

module.exports = (client, guild) => {
  function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }
  
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Novo servidor`)
    //.setDescription(` entrou no servidor ****\n\n(id: ${guild.id}). Usuarios  !`)
  .setDescription(`${client.user.username} Foi adicionada em um novo servidor.

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
    .setColor('#00ff2f')
  
  client.channels.cache.get('706605848616763413').send(logembed)
};