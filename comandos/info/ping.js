const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
                                        
    message.channel.send(`<:giping:710207742673158197> » Meu tempo de resposta é: \`${parseInt(client.ws.ping)}\` ms`)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ping',
  aliases: ["ms"]
}
