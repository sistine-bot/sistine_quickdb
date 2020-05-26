const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.author;
  let author = await db.fetch(`work_${member.id}`)
    
  let quantia = await db.get(`saldo_${member.id}`)
  if (quantia === null) quantia = 0;
  
  let timeout = 1800000;
  if (author !== null && timeout - (Date.now() - author) > 0) {    
    let time = ms(timeout - (Date.now() - author));
    
        const timeEmbed = new Discord.MessageEmbed()
        .setColor("#4287f5")
        .setDescription(`<:gierro:710197544751202414> » Você já trabalhou recentemente\n\n<:girelogio:710206714288406538> » Espere \`${time.minutes}m ${time.seconds}s\` para poder trabalhar novamente`);
        message.channel.send(timeEmbed)
      } else {
        
        let emprego = await db.get(`trabaio_${message.author.id}`)
        if (emprego === null) return message.channel.send(`<:gierro:710197544751202414> » Você não possui um emprego utilize \`${prefixos}empregos\` para escolher um eprego`);
        if (emprego === 0) return message.channel.send(`<:gierro:710197544751202414> » Você não possui um emprego utilize \`${prefixos}empregos\` para escolher um eprego`);
  
        if (emprego === 1){
        //emprego de programador 
let trab = ['BOT para discord.js', 'aplicativo para celular', 'site profissional para seu bot', 'plataforma de stream', 'comando para seu bot', 'criou um aplicativo para ver o tempo', 'um site para sua empresa']

let amount = Math.floor(Math.random() * 4800) + 3500;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed1 = new Discord.MessageEmbed()
        .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **💻 Programador** e fez um(a) **${trab[Math.floor(Math.random() * trab.length)]}**\n\nGanhou: ${amount} Pontos de Magia`)
        .setColor('4287f5');
          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed1)
        }
        
        //emprego de designer
        if (emprego === 2){
          let trab = ['avatar', 'wallpaper', 'animação 2D', 'wallpaper 4k', 'overlay para uma stream', 'animção para um youtuber', 'avatar de um youtuber']        

let amount = Math.floor(Math.random() * 2900) + 1500;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed2 = new Discord.MessageEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **🖌️ Designer** e fez um(a) **${trab[Math.floor(Math.random() * trab.length)]}**\n\nGanhou: ${amount} Pontos de Magia`)
          .setColor('4287f5');
          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed2)
        }
        
        //emprego de minerador
        if (emprego === 3){
let trab = ['Ouro', 'Diamante', 'Aluminio', 'Rubi', 'Safira', 'Esmeralda', 'Ametista', 'Topázio', 'Turqueza', 'Quartzo']        



let amount = Math.floor(Math.random() * 4000) + 1000;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed2 = new Discord.MessageEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **⛏️ Minerador** e minerou: **${trab[Math.floor(Math.random() * trab.length)]}**\n\nGanhou: ${amount} Pontos de Magia`)
          .setColor('4287f5');
          
          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed2)
        }
        
        //emprego de mecanico
        if (emprego === 4){
let trab = ['Ford Mustang','BMW M3', 'Hayabusa', 'Suzuki RGV250', 'Honda CB900F Hornet', 'Honda CBR600RR', 'Harley-Davidson Dyna Wide Glide', 'Tesla model S', 'Fusca', 'Ferrari 250 GTO', 'Bugatti Veyron']

let amount = Math.floor(Math.random() * 1968) + 1502;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed2 = new Discord.MessageEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **🔧 Mecanico** e concertou um(a) **${trab[Math.floor(Math.random() * trab.length)]}**\n\nGanhou: ${amount} Pontos de Magia`)
          .setColor('4287f5');
          
          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed2)
        }
        
        //emprego de youtuber
        if (emprego === 5){
let trab = ['gravou 5 videos','gravou 10 videos','gravou 15 videos','fez uma livestream','gravou 3 videos']

let amount = Math.floor(Math.random() * 2300) + 950;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed2 = new Discord.MessageEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **▶️ Youtuber** e: **${trab[Math.floor(Math.random() * trab.length)]}**\n\nGanhou: ${amount} Pontos de Magia`)
          .setColor('4287f5');

          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed2)
        }
        //emprego de streamer
        if (emprego === 6){

let trab = Math.floor(Math.random() * 18) + 3;

let amount = Math.floor(Math.random() * 3500) + 900;
db.add(`saldo_${message.author.id}`, amount)
          
          const embed2 = new Discord.MessagEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você trabalhou como um **📶 Streamer** e fez um stream de: **${trab}**\n\nGanhou: ${amount} Pontos de Magia`)
          .setColor('4287f5');
          
          db.set(`work_${member.id}`, Date.now())
          return message.channel.send(embed2)
        }
    }
}
exports.help = {
  name:"trabalhar",
  aliases: ["work", "trabalho"]
}