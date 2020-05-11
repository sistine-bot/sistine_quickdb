const config = require('../../config.json')
const Discord = require('discord.js')

exports.run = (doky, message, args) => {
  
if (args.length < 1){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
    let amount = 2;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }

    message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
};

exports.help = {
 name: 'space',
  aliases: ["espaço", "lo-fi","lofi"]
}
