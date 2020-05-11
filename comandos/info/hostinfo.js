const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

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

const cpuStat = require("cpu-stat");
  
  cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
    
    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var host = ('[Glitch](https://glitch.com/)')    
    
    let embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .addField(`**<:dokyhost:700840732621275176>•Host**`, `${host}`, true)
    .addField(`**<:dokyplataforma:700891669800812544>•Plataforma**`, `\`${os.platform}\``,true)
    .addField(`**<:dokydata:700515916043255818>•Arquitetura** `, `\`${os.arch()}\``, true)
    .addField(`**<:dokyfolders:700837668749049936>•Biblioteca**`, `\`Discord.js(v12.x)\``, true)
    .addField(`**<:dokycpuu:700902668406751334>•Consumo de CPU**`, `\`${percent.toFixed(2)}%\``, true)
    .addField(`**<:dokymemory:706725380219863061>•Consumo de Memoria**`, `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
    .addField(`<:dokycpu:700894330440777830>•CPU`, `\`\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\`\``, false)
    message.channel.send(embed)
  })
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'hostinfo',
  aliases: ["host", "infohost"]
}
