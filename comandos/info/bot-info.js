const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR'); // definindo o moment para BR
const config = require('../../config.json')

exports.run = (doky, message, args) => { // puxando a base

    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (doky.uptime / 1000); 
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
    
    let site = ('[doky.website](https://doky.glitch.me/)')
    
    let embed = new Discord.MessageEmbed()
  
    .setThumbnail(`https://images-ext-1.discordapp.net/external/g78lz4Qpk_SHABdpxxvnwHUXYvvIuOJg58Hp1lqQsOs/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/698287896997789746/98756bd97e380cdf65d4a0354338d85a.png?width=409&height=409`)
    .addField(`<:dokyprofile:700516353831993385>•Membros:`, `\`${doky.users.cache.size}\``, true)
    .addField(`<:dokyfolders:700837668749049936>•Canais`, `\`${doky.channels.cache.size}\``, true)
    .addField(`<:dokyping:700509433100238848> •Ping`, `\`${parseInt(doky.ws.ping)}\``, true)
    .addField(`<:dokytime:700492899141550160>•Tempo online`, `\`${uptime} \``, true)
    .addField(`<:dokyserver:700517046592471141>•Servidores`, `\`${doky.guilds.cache.size}\``, true)
    .addField(`<:dokyprefix:700834344972845116>•Prefixo`, `\`${config.prefix}\``, true)
    .addField(`**Informações:**`, `**<:dokydata:700515916043255818> Linguagem:** ${js} **com** ${linguagem}\n**<:dokyfolders:700837668749049936> Livraria:** ${livraria}\n**<:dokydatabase:700515763706134639> Database:** ${data}\n**<:dokyhost:700840732621275176> Host:** ${host}`, false)
    .addField(`**<:vortex:705164939534401576>•Meu criador**`, `vortex#8780`, false)
    .addField(`**Links:**`, `<:dokysuporte:700826909210050574> ${suport} <:dokyhost:700840732621275176> ${site}`, false)
    .setColor("#2f3136")
    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'botinfo',
  aliases: ["infobot", "dokyinfo", "infodoky", "info"]
}
