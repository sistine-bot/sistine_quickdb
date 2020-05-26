const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {

  let member = message.mentions.users.first() || message.author;

  let quantia = db.fetch(`saldo_${member.id}`)
  let banco = db.fetch(`banco_${member.id}`)
  
  if (args[0] == 'all') {
  let quantia = db.fetch(`saldo_${member.id}`)
  let banco = db.fetch(`banco_${member.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#4287f5')
    .setDescription("<:gierro:710197544751202414> » Você não tem tantos Pontos de Magia para depositar")

    if(quantia === 0) return message.channel.send(embedbank)

    db.add(`banco_${member.id}`, quantia)
    db.subtract(`saldo_${member.id}`, quantia)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gicerto:710198069068562473> » Você depositou todos os seus Pontos de Magia em seu banco`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gierro:710197544751202414> » Especifique um valor para depositar`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gierro:710197544751202414> » Você não pode depositar dinheiro negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`:x: Você não tem tanto dinheiro`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#4287f5")
  .setDescription(`<:gicerto:710198069068562473> » Você depositou ${args[0]} Pontos de Magia em seu banco.`);

  message.channel.send(embed5)
  db.add(`banco_${member.id}`, args[0])
  db.subtract(`saldo_${member.id}`, args[0])
  }
}
module.exports.help = {
  name:"depositar",
  aliases: ["dep", "deposit"]
}