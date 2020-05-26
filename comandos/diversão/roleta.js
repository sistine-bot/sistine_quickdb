const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
        message.channel.send(`Rodou a roleta e você **SOBREVIVEU**! :sweat_smile:`)
    }
    else{ // caso contrario... MORTO!
        message.channel.send(`Rodou o roleta e você **MORREU**! :cry::gun: `)
      }
}

exports.help = {
    name: 'roleta',
  aliases: ["roletarussa"]
}
