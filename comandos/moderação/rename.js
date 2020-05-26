const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
if(message.member.hasPermission("ADMINISTRATOR")) {

  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} nome` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('4287f5'));
        }
  
  message.guild.member(client.user).setNickname(args.join(" ")).then(user => message.channel.send("<:gicerto:710198069068562473> » Meu novo apelido neste servidor é " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply("<:gierro:710197544751202414> » Você precisa da permissão de `ADMINISTRATOR` para utilizar este comando")
  }
}

module.exports.help = {
    name: "rename",
  aliases: ["renomear"]
}