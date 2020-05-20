const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setDescription(` 
**Sejam Bem Vindo(a)'s**

    _Olá, Sejam bem vindo(a)'s ao servidor de suporte da <@!698287896997789746>_


> Meu site: https://gizelle.glitch.me

>  Vote em mim: https://top.gg/bot/698287896997789746/vote

> Lista de comandos https://gizelle.glitch.me/comandos.html

**# - Convite principal:** https://discord.gg/9D9NAcq `)
.setColor('4287f5')
let canal = client.channels.cache.get('699474882597224468')
canal.send(`@everyone`, embed)
}
exports.help = {
    name: 'importante',
    aliases: [],
  };