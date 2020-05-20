const Discord = require('discord.js');

exports.run = async (client, message, args) => {
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
  
  if (message.author.id !== '675439542110650399') return message.channel.send('<:gicerto:710198069068562473> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`**<a:loading:659210429997907968> » reiniciando**

${client.user.username} Reiniciando com **${client.ws.ping}** ms

Tempo online: ${uptime}
`)
  .setColor(`4287f5`)
  .setTimestamp()
  
  message.channel.send(embed).then(() => {process.exit(1)})
      
};
      
exports.help = {
    name: 'restart',
  aliases: ['reiniciar']
}