const Discord = require("discord.js");
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  let reason = args.slice(0).join(' ');
  
        if (reason.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} nick` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
    let embed = new Discord.MessageEmbed()

        .setTitle(`Skin de ${args[0]}`)
        .setImage(`https://mc-heads.net/body/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setTimestamp(new Date())
        .setColor('2f3136')
    message.channel.send(embed)
}

exports.help = {
    name: 'mcskin',
  aliases: ["mineskin", "skinmined"]
}