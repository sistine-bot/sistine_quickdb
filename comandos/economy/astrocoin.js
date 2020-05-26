const db = require('quick.db'); // database simples (npm i quick.db)
const ms = require('parse-ms') // uma npm para definirmos um tempo (npm i parse-ms)
const Discord = require('discord.js') // puxando a livraria discord.js

exports.run = async (client, message, args) => {
       let timeout = 604800000 // definindo o tempo de espera necessário. No nosso caso, 24 horas.
       let amount = Math.floor(Math.random() * 150) + 50; // um sistema randômico, definindo qual vai ser a quantia de daily

       let weekly = await db.get(`weekly_${message.author.id}`); // puxando um nome, no caso, que irá armazenar na database
    
       if (weekly !== null && timeout - (Date.now() - weekly) > 0) { // definindo se o tempo que definimos no começo está válido
         let time = ms(timeout - (Date.now() - weekly)); // caso não esteja, iremos avisar o usuário
         message.reply(`<:gierro:710197544751202414> » Sua Mana semanal já foi coletada! Tente novamente em: \`${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s\``)
       } else { // caso o usuário ainda não tenha usado em 24 horas
            message.reply(`<:gicoin:710207959216554131> » Você recebeu sua Mana <:gicoin:710207959216554131>`)
        db.add(`AstroCoin_${message.author.id}`, 1) // adicionando na conta do usuário o que definimos como dinheiro na database
        db.set(`weekly_${message.author.id}`, Date.now()) // como o usuário utilizou o comando, iremos botar que ele deve esperar o tempo que definimos
        }
    }
exports.help = {
    name: 'starcoins',
  aliases: ["semanal", "weekly"]
}