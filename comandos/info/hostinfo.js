const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

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

const cpuStat = require("cpu-stat");
  
  cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
    
    let host = ('[Glitch](https://glitch.com/)')    
    
    const embed = new Discord.MessageEmbed()
    .setColor("#4287f5")
    .addField(`**<:gihost:710191013196726289>•Host**`, `${host}`, true)
    .addField(`**<:gilinux:710189271247487126>•Plataforma**`, `\`${os.platform}\``,true)
    .addField(`**<:gidata:710188710326567085>•Arquitetura** `, `\`${os.arch()}\``, true)
    .addField(`**<:gifolders:710194436591714344>•Biblioteca**`, `\`Discord.js(v12.x)\``, true)
    .addField(`**<:gicpu:710188248131174440>•Consumo de CPU**`, `\`${percent.toFixed(2)}%\``, true)
    .addField(`**<:gimemory:710213326180974614>•Consumo de Memoria**`, `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
    .addField(`<:gicpu:710188248131174440>•CPU`, `\`\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, false)
    message.channel.send(embed)
  })
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'hostinfo',
  aliases: ["host", "infohost"]
}
