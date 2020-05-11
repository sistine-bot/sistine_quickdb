const Discord = require('discord.js');//exporta a npm discord.js
const config = require('../../config.json')

//exporta o comando para index
exports.run = (doky, message, args) => {
  //cria um embed
  const embed = new Discord.MessageEmbed()
  //seta a cor da embed
  .setColor("#2f3136")
  //cria um "field" onde vai ficar a resposta
  .addField('**🤗 | Sobre mim**', `Oi eu sou o Doky tenho 15 anos\nMeu sonho e ser um grande astronauta e meu criador é o vortex#8780\nFui feito para alegrar seu servidor no discord, e ajudar em funções de moderação e diversão e economia\n\nEu ficaria muito feliz em ser adicionado em seu servidor utilize: ${config.prefix}invite`)
  //vai enviar a mensagem de resposta
  message.channel.send({embed});
    
};

//exporta a ajuda quando o usuario mandar prefix + name
exports.help = {
    name: 'about',
    aliases: ["informações"]
  };