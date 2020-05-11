const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (doky, message) =>{
    let member = message.user.username;
    
    var canall = await db.get(`canalb_${message.guild.id}`)
    if (canall === null) canall = `Nenhum canal definido!`;
  
    var canal = doky.channels.cache.get(canall)
    
    let embed = new Discord.MessageEmbed()

    .setTitle(`Saida`)
    .setDescription(`O usuario **${member}#${message.user.discriminator}**, saiu do servidor,Tomara que ele volte algum dia.`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor('#ff0000')
    
    const logembed = new Discord.MessageEmbed()
    .setDescription(`O usuario **${member}#${message.user.discriminator}**, saiu do servidor: ${message.guild.name}\n\nid do servidor: ${message.guild.id}`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor(`ff0000`);
  
    doky.channels.cache.get('705126526194024510').send(logembed)
    console.log(`O usuario ${member}#${message.user.discriminator}, saiu do servidor: ${message.guild.name} id do servidor: ${message.guild.id}`)
    canal.send(embed).catch(() => console.log('erro'))
}