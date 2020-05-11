const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (doky, message, args) => { // setando as bases
                                        
    message.channel.send(`<:dokyping:700509433100238848> » Minha latência está em: \`${parseInt(doky.ws.ping)}\` ms`)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ping',
  aliases: ["ms"]
}
