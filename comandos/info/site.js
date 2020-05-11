const Discord = require('discord.js');

let site = `[doky.website](https://doky.glitch.me)`

exports.run = (doky, message, args) => {

        const embed = new Discord.MessageEmbed()
            .addField(`<:dokycerto:700492893651075112> » Meu site oficial.`, site)
            .setColor('2f3136')
        message.channel.send(embed)
};

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'site',
  aliases: ["website"]
};
