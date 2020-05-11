const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const weather = require('weather-js'); // puxando o NPM 'weather-js' (instale utilizando: npm i weather-js)


exports.run = (doky, message, args) => { // setando a base

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<a:verificadoHG:676917664525975630> » Meus links principais.\n\n<:dokysuporte:700826909210050574> » Meu [Servidor](https://discord.gg/9D9NAcq) de suportes.\n\n<:dc:694677568883916843> » Me [adicione](https://discordapp.com/oauth2/authorize?client_id=698287896997789746&scope=bot&permissions=2081422583) em seu servidor.\n\n<:dokyhost:700840732621275176> » Meu [site](https://doky.glitch.me) para mais informações\n\n<:dokybot:701231829839249493> » Vote em [mim](https://top.gg/bot/698287896997789746/vote) para ser um bot mais reconhecido.**`)
            .setThumbnail('https://img.icons8.com/nolan/2x/invite.png')
            .setColor("#2f3136")

        message.channel.send(embed)

    
};

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'links',
  aliases: ["link"]
};
