const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const weather = require('weather-js'); // puxando o NPM 'weather-js' (instale utilizando: npm i weather-js)


exports.run = (client, message, args) => { // setando a base

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<:gilink:710212087900536954> » Meus links principais.\n\n<:gisuporte:710192974163607582> » Meu [Servidor](https://discord.gg/9D9NAcq) de suportes.\n\n<:gidiscord:710180841791160330> » Me [adicione](https://discordapp.com/oauth2/authorize?client_id=698287896997789746&scope=bot&permissions=2081422583) em seu servidor.\n\n<:gihost:710191013196726289> » Meu [site](https://sistine.glitch.me) para mais informações\n\n<:bot:701231829839249493> » Vote em [mim](https://top.gg/bot/698287896997789746/vote) para ser um bot mais reconhecido.**`)
            .setThumbnail('https://img.icons8.com/nolan/2x/invite.png')
            .setColor("#4287f5")

        message.channel.send(embed)
};

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'links',
  aliases: ["link"]
};
