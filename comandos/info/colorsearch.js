const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");
const config = require('../../config.json')

exports.run = async (doky, message, args) => {

      if (!args[0] || args[0] === 'help') {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} RJ` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }

    var isOk = /^[0-9A-F]{6}$/i.test(args[0])
   // if (isOk === false) return message.reply("<a:dokyatencao:698672287276073090> | Forneça um código hexadecimal válido sem a `#`")
      if (isOk === false) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} ffffff`+ "``")
                .setColor('2f3136'));
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
   