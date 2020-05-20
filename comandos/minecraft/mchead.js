const Discord = require("discord.js");
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
  let reason = args.slice(0).join(' ');
  
        if (reason.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} nick` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhuma\``, false)
                .setColor('4287f5'));
        }
  
    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setTimestamp(new Date())
        .setColor('4287f5')
    message.channel.send(embed)
}

exports.help = {
    name: 'mchead',
  aliases: ["minehead", "mccabeça"]
}