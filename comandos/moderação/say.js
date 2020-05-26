const Discord = require("discord.js");
const config = require('../../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<:gierro:710197544751202414> » Você precisa da permissão de: `ADMINISTRATOR` para utilizar este comando");
  
  let text = args.slice(0).join(" ");
  
  if (!text){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Administrador\``, false)
                .setColor('4287f5'));
        }
  
  message.channel.send(text)
};

exports.help = {
  name: "say",
  aliases: ["falar"]
};
