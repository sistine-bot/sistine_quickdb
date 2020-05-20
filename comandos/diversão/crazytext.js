const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
const config = require('../../config.json')
const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
      if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
    message.channel.send(args.map(randomizeCase).join(' '));
};

exports.help = {
    name: 'crazytext',
  aliases: ["textolouco"]
};