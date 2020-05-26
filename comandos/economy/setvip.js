const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)

exports.run = async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;
    let vip = await db.get(`vip_${member.id}`)
    
    if (!['675439542110650399'].includes(message.author.id)) {
    return message.channel.send(`<:giatencao:710196761704267807> » Você não pode utilizar este comando, apenas pessoas especiais.`)
    }
  
    message.channel.send('<:gicerto:710198069068562473> » VIP setado com sucesso!') 
    db.set(`vip_${member.id}`, 1)
}

exports.help = {
    name: 'setvip',
  aliases: ["vipset"]
}