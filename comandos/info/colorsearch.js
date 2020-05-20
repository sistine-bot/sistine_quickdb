const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");
const config = require('../../config.json')

exports.run = async (client, message, args) => {

      if (!args[0] || args[0] === 'help') {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} ffffff` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }

    let isOk = /^[0-9A-F]{6}$/i.test(args[0])
   // if (isOk === false) return message.reply("<a:dokyatencao:698672287276073090> | Forneça um código hexadecimal válido sem a `#`")
      if (isOk === false) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} ffffff` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
    
    const { body } = await superagent
    .get(`https://api.alexflipnote.dev/color/` + args[0]);

    const embed = new Discord.MessageEmbed()
    .setColor(`${body.hex}`)
    .setTitle(body.name)
    .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
    .setImage(body.image)
    .setFooter(`Nome da cor: ${body.name}`)
    message.channel.send({embed});
};

exports.help = {
    name: 'colorsearch',
  aliases: ["cor"]
  };
   