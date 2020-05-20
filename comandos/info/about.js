const Discord = require('discord.js');//exporta a npm discord.js
const { prefix, vortexname} = require('../../config.json')

//exporta o comando para index
exports.run = (client, message, args) => {
  //cria um embed
  const embed = new Discord.MessageEmbed()
  //seta a cor da embed
  .setColor("#4287f5")
  //cria um "field" onde vai ficar a resposta
  .addField('**🤗 | Sobre mim**', `Oi eu sou a ${client.user.username} tenho 16 anos\nMeu criador é o ${vortexname}\nFui feito para alegrar seu servidor no discord, e ajudar em funções de moderação e diversão e economia\n\nEu ficaria muito feliz em ser adicionado em seu servidor utilize: ${prefix}invite`)
  .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2FPolish_20200514_205810316.jpg?v=1589500775566`)
  //vai enviar a mensagem de resposta
  message.channel.send({embed});
    
};

//exporta a ajuda quando o usuario mandar prefix + name
exports.help = {
    name: 'about',
    aliases: ["informações"]
  };