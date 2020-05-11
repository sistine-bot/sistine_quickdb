const config = require('../config.json')
const Discord = require('discord.js');

module.exports = async (doky, message) => {
  if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
    if (message.channel.type === "dm") return;
    let prefix = config.prefix; // puxando o prefixo do nosso bot

    if (!message.content.startsWith(prefix)) return; // para evitar bugs, setaremos uma function, definindo que o bot respondera apenas para mensagens que possuem seu prefixo, no inicio
    let args = message.content.substring(prefix.length).split(" "); // definindo o que seria os argumentos
    let cmd = args.shift().toLowerCase(); // puxando dos args, setaremos que o bot pode responder sim, a comandos com a letra inicial maiuscula

    let command = doky.commands.get(cmd) || doky.commands.get(doky.aliases.get(cmd)); // puxaremos o conteudo de tal comando
  if (command) { // caso o membro utilize um comando inexistente, daremos o erro
    command.run(doky, message, args); // essa é a base de todo arquivo js
  } else {
    let cemde = args.slice(0).join(' ');
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:dokyerro:700492899833479249> » Verifiquei na minha lista de comandos e não encontrei este comando tente usar ${config.prefix}ajuda pra obter alguma ajuda.`)
    .setColor(`#2f3136`)
    message.reply(embed); // mensagem de comando inexistente
  }
  
  //---------------------
  
    if(message.content.includes(`<@${doky.user.id}>`) || message.content.includes(`<@&${doky.user.id}>`)) {
    const embed = new Discord.MessageEmbed()
    .setDescription('Oi eu sou o Doky meu prefixo neste servidor e: **'+`${config.prefix}`+'** se você quiser saber mais sobre mim utilize: '+`${config.prefix}`+'about')
    .setColor(`#2f3136`)
    
message.reply(embed)
    }
  
  //------------------------------
  
};