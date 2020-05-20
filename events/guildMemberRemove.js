const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client, message) =>{
  let canall = await db.get(`canall_${message.guild.id}`)
  if (canall === null) canall = `Nenhum canal definido!`;
    
  let canal = client.channels.cache.get(canall)
  if (!canal) return;
  
  
  let mensagem = await db.get(`canallmsg_${message.guild.id}`)
  if (mensagem === null) mensagem = `O usuario **${message.user.username}#${message.user.discriminator}**, saiu do servidor,Tomara que ele volte algum dia.`;
  if (mensagem === 0) mensagem = `O usuario **${message.user.username}#${message.user.discriminator}**, saiu do servidor,Tomara que ele volte algum dia.`;
    
  
  function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }
  
  let membro = mensagem.replace('{member}', message.user.username)
  let servidor = membro.replace('{servidor}', message.guild.name)
  let user = servidor.replace('{usuarios}', message.guild.memberCount)
  
  
  const embed = new Discord.MessageEmbed()
    .setColor(`ff0000`)
    .setDescription(user)
    .setThumbnail(message.user.displayAvatarURL());
    
  
    
  const logembed = new Discord.MessageEmbed()
  .setThumbnail(message.user.displayAvatarURL())
  .setDescription(`O usuario **${message.user.username}#${message.user.discriminator}**, saiu do servidor: ${message.guild.name}\n\nid do servidor: ${message.guild.id}`)
  .setColor(`RED`)
  
  client.channels.cache.get('705126526194024510').send(logembed)
  console.log(`O usuario ${message.user.username}#${message.user.discriminator}, saiu do servidor: ${message.guild.name} id do servidor: ${message.guild.id}`)
    
  canal.send(embed).catch(() => console.log('erro'))
}