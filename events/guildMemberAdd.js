const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (doky, message) =>{
    let member = message.user.username;
    
    var canalb = await db.get(`canalb_${message.guild.id}`)
    if (canalb === null) canalb = `Nenhum canal definido!`; 
  
    let canal = doky.channels.cache.get(canalb)
    
    let embed = new Discord.MessageEmbed()

    .setTitle(`<a:dokywelcome1:708931708501884938><a:dokywelcome2:708931721869131836> Seja Bem-Vindo(a) <a:dokywelcome1:708931708501884938><a:dokywelcome2:708931721869131836>`)
    .setDescription(`**${member}**, Seja muito bem-vindo(a) ao servidor ${message.guild.name}`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor('#00ff26')
    
    const logembed = new Discord.MessageEmbed()
    .setDescription(`Usuario: **${member}#${message.user.discriminator}** entrou no servidor: ${message.guild.name}\n\nid do servidor: ${message.guild.id}`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor(`#00ff2f`);
  
    doky.channels.cache.get('705126526194024510').send(logembed)
  
    console.log(`Usuario: ${member}#${message.user.discriminator} entrou no servidor: ${message.guild.name} id: ${message.guild.id}`)
    canal.send(`${member}${message.user.discriminator}`, embed)
}