const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)

exports.run = async (client, message, args) => {
  
    let member = message.mentions.users.first() || message.author;
    let saldo = await db.get(`saldo_${member.id}`)
    
    if (!['675439542110650399'].includes(message.author.id)) {
    return message.channel.send(`<:gicerto:710198069068562473> » Você não pode utilizar este comando, apenas pessoas especiais.`)
    }
  
    message.channel.send('<:gicerto:710198069068562473> » O Saldo do usuario <@'+member+'> foi resetado com sucesso!') 
    db.delete(`saldo_${member.id}`) // adicionando na database, a quantia
}

exports.help = {
    name: 'resetmoney',
  aliases: ["moneyreset"]
}