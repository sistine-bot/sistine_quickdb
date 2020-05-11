const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
const config = require('../../config.json')
const Discord = require('discord.js')

exports.run = (doky, message, args) => {
  
      if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
    message.channel.send(args.map(randomizeCase).join(' '));
};

exports.help = {
    name: 'crazytext',
  aliases: ["textolouco"]
};