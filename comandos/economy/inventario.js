const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta escrever em seu terminal: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria Discord.js
//const config = require('../../config.json')

exports.run = async (client, message, args) => {
  // puxando um membro mencionavel, no caso, de quem queremos ver o money
  let member = message.mentions.users.first() || message.author;
  
  //sistema do saldo
  let quantia = await db.get(`saldo_${member.id}`)
  if (quantia === null) quantia = 0;
  if (quantia === 0) quantia = 0;
  
  let banco = await db.get(`banco_${member.id}`)
  if (banco === null) banco = 0;
  if (banco === 0) banco = 0;
  
  let astrocoin = await db.get(`AstroCoin_${member.id}`)
  if (astrocoin === null) astrocoin = 0
  if (astrocoin === 0) astrocoin = 0
  
  //sistema de setbio
  let bio = await db.get(`bio_${member.id}`)
  if (bio === null) bio = '`👨‍🚀 vortex é o criador da Gizelle ❤️`';
  if (bio === 0) bio = '`👨‍🚀 vortex é o criador da Gizelle ❤️`';
  
  
  //sistema de cor
  let cor = await db.get(`cor_${member.id}`)
  //sem cor
  if (cor === null) cor = '`Sem cor`';
  //sem cor
  if (cor === 0) cor = '`Sem cor`';
  //rosa
  if (cor === 1) cor = `Rosa`;
  //preto
  if (cor === 2) cor = `Preto`;
  //amarelo
  if (cor === 3) cor = `Amarelo`;
  //verde
  if (cor === 4) cor = `Verde`;
  //vermelho
  if (cor === 5) cor = `Vermelho`;
  //laranja
  if (cor === 6) cor = `Laranja`
  //azul
  if (cor === 7) cor = `Azul`
  //roxo
  if (cor === 8) cor = `Roxo`
  
  
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
   
  let gun = await  db.get(`gun_${member.id}`)
  if (gun === null) gun = '`Sem armas`'
  if (gun === 0) gun = '`Sem armas`'
  
  if (gun === 1) gun = '**Revolver 38**'
  if (gun === 2) gun = '**Shotgun**'
  if (gun === 3) gun = '**Fuzil AK-47**'
  
  let cartucho = await db.get(`cartucho_${member.id}`)
  if (cartucho === null) cartucho = '`Sem balas`'
  if (cartucho === 0) cartucho = '`Sem balas`'
  
  
  const embed = new Discord.MessageEmbed()  
  .setTitle('<:giprofile:710193333732900945> » Inventario: '+ `${member.username}#${member.discriminator}`)
  .setColor(`BLUE`)
  .setDescription(`
**<:gigem:710214117897797722> VIP:** ${vip}

**<:giastrocoin:710215034487439391> Pontos de Magia:**\n**Bolso:** ${quantia}\n**Banco:** ${banco}

**<:gicoin:710207959216554131> Mana:** ${astrocoin}

**Cor:** ${cor}

**<:giglock:710210648402821161> Armas:** ${gun}
**Balas:** ${cartucho}
`)
  .setTimestamp()
  .setThumbnail(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  message.channel.send(embed)
}

exports.help = {
    name: 'inventario',
  aliases: ["bag"]
}