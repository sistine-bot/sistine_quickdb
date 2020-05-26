const Discord = require("discord.js");
const config = require('../../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => {
  
  if (message.author.id !== '675439542110650399') return message.channel.send('<:dokyerro:700492899833479249> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let text = args.slice(0).join(" ");  
  if (!text){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`owner\``, false)
                .setColor('4287f5'));
        }
  message.channel.send(text)
};

exports.help = {
  name: "dsay",
  aliases: ["dfalar"]
};
