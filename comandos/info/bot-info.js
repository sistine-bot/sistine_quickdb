const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR'); // definindo o moment para BR
const config = require('../../config.json')

exports.run = (client, message, args) => { // puxando a base

    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;
    const os = require("os")
    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    let linguagem = ('[Node.js](https://nodejs.org/en/)')
    let livraria = ('[Discord.js](https://discord.js.org/#/)')
    let js = ('[JavaScript](https://www.javascript.com/)')
    let host = ('[Glitch](https://glitch.com/)')
    let suport = ('[Suporte](https://discord.gg/9D9NAcq)')
    let data = ('[quick.db](https://www.npmjs.com/package/quick.db)')
    
    let site = ('[sistine.website](https://sistene.glitch.me/)')
    
    let embed = new Discord.MessageEmbed()
  
    
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`<:giprofile:710193333732900945>•Membros:`, `\`${client.users.cache.size}\``, true)
    .addField(`<:gifolders:710194436591714344>•Canais`, `\`${client.channels.cache.size}\``, true)
    .addField(`<:giping:710207742673158197>•Ping`, `\`${parseInt(client.ws.ping)}\``, true)
    .addField(`<:girelogio:710206714288406538>•Tempo online`, `\`${uptime} \``, true)
    .addField(`<:giserver:710191270647169157>•Servidores`, `\`${client.guilds.cache.size}\``, true)
    .addField(`<:giprefix:710191685929271417>•Prefixo`, `\`${config.prefix}\``, true)
    .addField(`**Informações:**`, `**<:gidata:710188710326567085> Linguagem:** ${js} **com** ${linguagem}\n**<:gifolders:710194436591714344> Livraria:** ${livraria}\n**<:gidatabase:710184940670681158> Database:** ${data}\n**<:gihost:710191013196726289> Host:** ${host}`, false)
    .addField(`**<:givortex:710215343024636006>•Meu criador**`, `${config.vortexname}`, false)
    .addField(`**Links:**`, `<:gisuporte:710192974163607582> ${suport} <:gihost:710191013196726289> ${site}`, false)
    .setColor("#4287f5")
    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'botinfo',
  aliases: ["infobot", "gizelleinfo", "infogizelle", "info"]
}
