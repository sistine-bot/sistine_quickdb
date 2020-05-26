const db = require('quick.db'); // database simples (npm i quick.db)
const ms = require('parse-ms') // uma npm para definirmos um tempo (npm i parse-ms)
const Discord = require('discord.js') // puxando a livraria discord.js

exports.run = async (client, message, args) => {
  let auxilio = await db.get(`auxilio_${message.author.id}`)
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você já pegou seu auxilio emergencial 😎`)
  .setColor('4287f5');
  if (auxilio === true) return message.channel.send(embed)
  
  message.reply(`<:gicoin:710207959216554131> » Você recebeu seu auxilio emergencial de **600** Pontos de Magia`)
  db.add(`saldo_${message.author.id}`, 600)
  db.set(`auxilio_${message.author.id}`, true)
}
exports.help = {
    name: 'auxilio',
  aliases: []
}