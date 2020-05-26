const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    if (!['675439542110650399'].includes(message.author.id)) { // definindo que, apenas quem tiver o ID dentro dessa estrutura, pode utilizar esse comando
    return message.channel.send(`<:gierro:710197544751202414> » Você não pode utilizar este comando, apenas pessoas especiais.`)
    }

    let membro = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
    let conta = await db.get(`saldo_${membro.id}`) // puxando o sistema que criamos para puxar a quantia que o membro possui
    
    let quantia = args[0]; // criando uma variavel para saber quanto o membro deseja adicionar
    if (isNaN(quantia)) return message.channel.send(`<:giatencao:710196761704267807> » Digite uma quantia valida ` + '`'+`${prefixos}`+'addmoney quantia @usuario `') // caso o que ele escreva nao seja numero
    if (!quantia) return message.channel.send(`<:giatencao:710196761704267807>  » Digite um valor para ser adicionado` + '`'+`${prefixos}`+'addmoney quantia @usuario `!'); // caso ele n escreva 
    if (quantia <= 0) return message.reply(`<:giatencao:710196761704267807> » Digite uma quantia maior que zero!`) // caso o que ele bote, seja menor que zero
    
  // puxando o membro que iremos enviar

    message.channel.send(`<:gicoin:710207959216554131> » ${message.author} adicionou **R$ ${quantia}** Pontos de Magia ao usuario ${membro}!`) 
    db.add(`saldo_${membro.id}`, args[0]) // adicionando na database, a quantia
    
}

exports.help = {
    name: 'addmoney',
  aliases: ["moneyadd"]
}