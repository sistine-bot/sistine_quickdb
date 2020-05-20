const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async function (client, message, args) {
          if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} país` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
  
    if (args[0].charCodeAt(0) >= 55296) {
        message.channel.send(`<:gierro:710197544751202414> » Não consegui aumentar esse emoji.`)
        
    }

    const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);

    if (!match || !match[1]) {
        message.channel.send(`<:gierro:710197544751202414> » Por favor, insira um emoji valido.`)
        
    }

    const emoji = client.emojis.cache.get(match[1]);

    if (!emoji) {
        message.channel.send(`<:gierro:710197544751202414> » Não encontrei esse emoji!`)
        
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