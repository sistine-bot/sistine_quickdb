const db = require("quick.db") // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js") // Puxando a livraria Discord.js
const fs = require('fs')
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author;
  let saldo = db.fetch(`saldo_${member.id}`)
  
  let vip = await db.get(`vip_${member.id}`)
  
  const embed = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`
**Info VIP**

Atualmente Gizelle possui **4** VIP

${prefixos}loja - Loja onde se vende o VIP.

**Vantagens VIPS**

${prefixos}setwallpaper - Com o VIP você pode colocar wallpapers sem pagar
${prefixos}setcolor - Com o VIP você pode colocar cor em seu perfil sem pagar nada
`)
  .setThumbnail(`https://cdn.discordapp.com/emojis/710214117897797722.png?v=1`)
  .setColor('#03fc7b')
  
  message.channel.send(embed)
  }

exports.help = {
  name: 'vip',
  aliases: ["vip-info", "info-vip"]
}