const Discord = require("discord.js") // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db(uma database, que para instalar, basta digitar em seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    if (!['675439542110650399'].includes(message.author.id)) { // bote dentro o seu ID, ou de quem vc deseja q utilize
    return message.reply(`<:gierro:710197544751202414> » Você não pode utilizar este comando, apenas pessoas especiais.`)
    }

    if (!args[0]) return message.channel.send(`<:giatencao:710196761704267807> » Digite uma quantia valida ` +`\`${prefixos}}`+'removemoney saldo @usuario`') // caso o membro n escreva uma quantia
    if (isNaN(args[0])) return message.channel.send(`<:giatencao:710196761704267807> » Escreva um numero valido!`) // caso ele escreva algo q n seja um numero

  // puxando um membro para quem iremos adicionar
    let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author; // caso n mencione, sera ele mesmo
    
    message.channel.send(`<:gicoin:710207959216554131> » ${message.author} removeu R$ **${args[0]}** Pontos de Magia do usuario: ${member}!`)
    db.subtract(`saldo_${member.id}`, args[0]) // adicionando na db, a quantia

}

exports.help = {
    name: 'removemoney',
  aliases: ["moneyremove"]
}