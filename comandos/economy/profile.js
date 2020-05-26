const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta escrever em seu terminal: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria Discord.js
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  // puxando um membro mencionavel, no caso, de quem queremos ver o money
  let member = message.mentions.users.first() || message.author;
  
  //sistema do saldo
  let quantia = await db.get(`saldo_${member.id}`)
  if (quantia === null) quantia = 0;
  if (quantia === 0) quantia = 0;
  
  let banco = db.fetch(`banco_${member.id}`)
  if (banco === null) banco = 0;
  if (banco === 0) banco = 0;
  
  let astrocoin = await db.get(`AstroCoin_${member.id}`)
  if (astrocoin === null) astrocoin = 0
  if (astrocoin === 0) astrocoin = 0
  
  //sistema de setbio
  let bio = await db.get(`bio_${member.id}`)
  if (bio === null) bio = '`👨‍🚀 vortex é o criador da sistine ❤️`';
  if (bio === 0) bio = '`👨‍🚀 vortex é o criador da sistine ❤️`';
  //sistema de emprego
  let emprego = await db.get(`trabaio_${member.id}`)
  //sem emprego
  if (emprego === null) emprego = '`Vagabundo`';
  //sem emprego
  if (emprego === 0) emprego = '`Vagabundo`';
  //emprego de programador
  if (emprego === 1) emprego = '`💻 Programador`';
  //emprego de designer
  if (emprego === 2) emprego = '`🖌️ Designer`';
  //emprego de minerador
  if (emprego === 3) emprego = '`⛏️ Minerador`';
  //emprego de mecanico
  if (emprego === 4) emprego = '`🔧 Mecanico`'
  //emprego de youtuber
  if (emprego === 5) emprego = '`▶️ Youtuber`'
  //emprego de streamer
  if (emprego === 6) emprego = '`📶 Streamer`'
  
  
  //sistema de cor
  let cor = await db.get(`cor_${member.id}`)
  //sem cor
  if (cor === null) cor = '4287f5';
  //sem cor
  if (cor === 0) cor = '4287f5';
  //rosa
  if (cor === 1) cor = `FF00FF`;
  //preto
  if (cor === 2) cor = `000000`;
  //amarelo
  if (cor === 3) cor = `ffff00`;
  //verde
  if (cor === 4) cor = `00ff59`;
  //vermelho
  if (cor === 5) cor = `ff0000`;
  //laranja
  if (cor === 6) cor = `ff9c00`
  //azul
  if (cor === 7) cor = `0400ff`
  //roxo
  if (cor === 8) cor = `9200b3`
  
  
  //sistema de wallpaper
  let foto = await db.get(`foto_${member.id}`)
  //foto defalt
  if (foto === null) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2FPolish_20200514_205810316.jpg?v=1589500775566'
  if (foto === 0) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2FPolish_20200514_205810316.jpg?v=1589500775566'
  //Lua vapor wave
  if (foto === 1) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Foutrun-vaporwave-hd-wallpaper-preview.jpg?v=1588117665350'
  //floresta
  if (foto === 2) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F3b8ad2c7b1be2caf24321c852103598a.jpg?v=1588117752285'
  //lua
  if (foto === 3) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fde1ddf9ee30e08e15460626b919ef87e.jpg?v=1588117694630'
  //floresta neve
  if (foto === 4) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F21456.jpg?v=1588117656806'
  //montanhas
  if (foto === 5) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Funnamed.jpg?v=1588117661118'
  //Barquingo
  if (foto === 6) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-13mk9v.jpg?v=1588366383842'
  //por do sol 
  if (foto === 7) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-6k3oox.jpg?v=1588366433005'
  //Futurista 
  if (foto === 8) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-39gogv.jpg?v=1588366442191'
  //Estrela cadente
  if (foto === 9) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-96w8e8.png?v=1588366475912'
  //Floresta das trevas 
  if (foto === 10) foto = 'https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-dgzj9o.jpg?v=1588366584158'
  
  
  //sistema de vips
  let vip = await db.get(`vip_${member.id}`)
  //sem vip
  if (vip === null ) vip = '`Sem VIP`'
  if (vip === 0) vip = '`Sem VIP`'
  
  //vip
  if (vip === 1) vip = '`VIP Mistico`'
  if (vip === 2) vip = '`VIP Sombrio`'
  if (vip === 3) vip = '`VIP Mago`'
  if (vip === 4) vip = '`VIP Galatico`'
    
  const embed = new Discord.MessageEmbed()  
  .setTitle('<:giprofile:710193333732900945> » Perfil do usuario: '+ `${member.username}#${member.discriminator}`)
  .setColor(`${cor}`)
  .addField(`**<:gicoin:710207959216554131> » Pontos de Magia:** `, `**Carteira:** ${quantia}\n**Banco:** ${banco}`, true)
  .addField(`**Emprego:**`, `${emprego}`, true)
  .addField(`**<:gigem:710214117897797722> » VIP:**`, `${vip}`, true)
  
  .addField(`**<:giastrocoin:710215034487439391> » Mana**`, `${astrocoin}`, true)
  
  .addField(`**Bio:**`, `${bio}`, false)
  .setFooter(`Personalize seu Perfil: ${prefixos}bio | ${prefixos}loja`)
  .setTimestamp()
  .setImage(foto)
  .setThumbnail(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  message.channel.send(embed)
}

exports.help = {
    name: 'perfil',
  aliases: ["profile"]
}