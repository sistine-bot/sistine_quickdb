const Discord = module.require('discord.js');

var cc = [
    "Cara <:dokycara:700754725368496151>",
    "Coroa <:dokycoroa:700754732364595322> "
];

exports.run = async (doky, message, args) => {

  message.channel.send(message.author.toString() + " Você flipou a moeda e caiu: " + (cc[Math.floor(Math.random() * cc.length)]));
}

exports.help = {
    name: "flipcoin",
  aliases: ["coinflip","cc"]
}