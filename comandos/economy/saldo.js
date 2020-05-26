const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta escrever em seu terminal: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria Discord.js

exports.run = async (client, message, args) => { 
   
    let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  
  let quantia = await db.get(`saldo_${member.id}`)
  if (quantia === null) quantia = 0;
  if (quantia === 0) quantia = 0;
  
  let banco = db.fetch(`banco_${member.id}`)
  if (banco === null) banco = 0;
  if (banco === 0) banco = 0;
  
  let astrocoin = await db.get(`AstroCoin_${member.id}`)
  if (astrocoin === null) astrocoin = 0;
  if (astrocoin === 0) astrocoin = 0;
  
    const embed = new Discord.MessageEmbed()
    .setTitle('**StarCoins**')
    .setColor('#4287f5')
    .setDescription('Saldo de: '+ `${member}\n\n`+`<:gicoin:710207959216554131> » Pontos de Magia:\n**Carteira: ${quantia}**\n**Banco: ${banco}**`+'\n\n' + `<:giastrocoin:710215034487439391> » Mana: **${astrocoin}**`)
    
    message.channel.send(embed)
}

exports.help = {
    name: 'saldo',
  aliases: ["money", "bal", "balance"]
}