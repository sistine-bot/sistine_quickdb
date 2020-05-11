const Discord = require('discord.js');

exports.run = (doky, message, args) => {
   if (message.author.id !== '675439542110650399') return message.channel.send('<:dokyerro:700492899833479249> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
let servers = doky.guilds.cache.map(g => g.name)

const embed = new Discord.MessageEmbed()

        .setDescription(servers)

    message.reply(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'serverlist',
  aliases: ["listserver"]
};
