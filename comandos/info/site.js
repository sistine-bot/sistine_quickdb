const Discord = require('discord.js');

let site = `[gizelle.website](https://gizelle.glitch.me)`

exports.run = (client, message, args) => {

        const embed = new Discord.MessageEmbed()
            .addField(`<:gicerto:710198069068562473> » Meu site oficial.`, site)
            .setColor('4287f5')
        message.channel.send(embed)
};

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'site',
  aliases: ["website"]
};
