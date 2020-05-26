const db = require('quick.db'); // database simples (npm i quick.db)
const ms = require('parse-ms') // uma npm para definirmos um tempo (npm i parse-ms)
const Discord = require('discord.js') // puxando a livraria discord.js

exports.run = async (client, message, args) => {
       let timeout = 86400000 // definindo o tempo de espera necessário. No nosso caso, 24 horas.
       let amount = Math.floor(Math.random() * 600) + 300; // um sistema randômico, definindo qual vai ser a quantia de daily

       let daily = await db.get(`daily_${message.author.id}`); // puxando um nome, no caso, que irá armazenar na database
    
       if (daily !== null && timeout - (Date.now() - daily) > 0) { // definindo se o tempo que definimos no começo está válido
         let time = ms(timeout - (Date.now() - daily)); // caso não esteja, iremos avisar o usuário
         message.reply(`<:gierro:710197544751202414> » Seus Pontos de Magia diárias já foram coletadas! Tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
       } else { // caso o usuário ainda não tenha usado em 24 horas
            message.reply(`<:gicoin:710207959216554131> » Você recebeu seus Pontos de Magia diarios você ganhou: **R$ ${amount}**`)
        db.add(`saldo_${message.author.id}`, amount) // adicionando na conta do usuário o que definimos como dinheiro na database
        db.set(`daily_${message.author.id}`, Date.now()) // como o usuário utilizou o comando, iremos botar que ele deve esperar o tempo que definimos
        }
    }
exports.help = {
    name: 'daily',
  aliases: ["diario"]
}