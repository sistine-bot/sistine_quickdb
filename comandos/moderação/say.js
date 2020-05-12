const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = (doky, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `ADMINISTRATOR` para utilizar este comando");
  
  var text = args.slice(0).join(" ");
  
    if (!text){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Adiministrador\``, false)
                .setColor('2f3136'));
        }
  message.channel.send(text)
};

exports.help = {
  name: "say",
  aliases: ["falar"]
};
