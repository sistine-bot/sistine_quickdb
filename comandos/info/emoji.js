const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async function (doky, message, args) {
          if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} :emoji:` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }

    if (args[0].charCodeAt(0) >= 55296) {
        message.channel.send(`<:dokyerro:700492899833479249> » Não consegui aumentar esse emoji.`)
        
    }

    const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);

    if (!match || !match[1]) {
        message.channel.send(`<:dokyerro:700492899833479249> » Por favor, insira um emoji valido.`)
        
    }

    const emoji = doky.emojis.cache.get(match[1]);

    if (!emoji) {
        message.channel.send(`<:dokyerro:700492899833479249> » Não encontrei esse emoji!`)
        
    }

    message.channel.send({
        files: [
            emoji.url
        ]
    });
};

exports.help = {
    name: 'emoji',
  aliases: ["bigemoji", "emojigrande"]
};