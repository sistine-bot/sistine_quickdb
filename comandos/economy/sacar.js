const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  
  let quantia = await db.fetch(`saldo_${member.id}`)
  if (quantia === null) quantia = 0;
  if (quantia === 0) quantia = 0;
  
  let banco = db.fetch(`banco_${member.id}`)
  if (banco === null) banco = 0;
  if (banco === 0) banco = 0;
  
  if (args[0] == 'all') {
    let money = db.fetch(`banco_${member.id}`)
    
    db.subtract(`banco_${member.id}`, money)
    db.add(`saldo_${member.id}`, money)
    
    let embed5 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gicerto:710198069068562473> » Você retirou todas os Pontos de Magia do seu banco`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gierro:710197544751202414> » Especifique um valor a retirar`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gierro:710197544751202414> » Você não pode sacar dinheiro negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gierro:710197544751202414> » Você não tem muito dinheiro no banco`);

  if (banco < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gicerto:710198069068562473> » Você retirou ${args[0]} StarCoins de seu banco`);

  message.channel.send(embed5)
  db.subtract(`banco_${member.id}`, args[0])
  db.add(`saldo_${member.id}`, args[0])
  }
}


exports.help = {
  name:"sacar",
  aliases: ["retirar"]
}