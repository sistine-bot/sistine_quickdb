const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
const setStatus = message.content.split(' ');

    if(setStatus[1] === 'on'){
        client.user.setAFK(true);
        message.channel.send(`${message.author}, Agora você esta no modo AFK`);
    }

    else if(setStatus[1] === 'off'){
        client.user.setAFK(false);
        message.channel.send(`${message.author}, Seja bem vindo de volta :) `);
    }

    else if(!setStatus[1] || setStatus[1] === undefined){
        message.channel.send("Você não escolheu afk ou naoafk como status atual!");
    }

    else{
        message.channel.send("Você não escolheu afk ou naoafk como status atual!");
    }

}

exports.help = {
    name: 'afk',
  aliases: []
}