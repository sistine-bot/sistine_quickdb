const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = (doky, message, args) => {
  
  if (message.author.id !== '675439542110650399') return message.channel.send('<:dokyerro:700492899833479249> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
  var text = args.slice(0).join(" ");
  
    if (!text){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`owner\``, false)
                .setColor('2f3136'));
        }
  message.channel.send(text)
};

exports.help = {
  name: "dsay",
  aliases: ["dfalar"]
};
