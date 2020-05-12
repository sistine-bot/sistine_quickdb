const Discord = require('discord.js');
const config = require('../../config.json')
module.exports.run = async (doky, message, args) => {

if(message.member.hasPermission("ADMINISTRATOR")) {

  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} nome` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Administrador\``, false)
                .setColor('2f3136'));
        }
  message.guild.member(doky.user).setNickname(args.join(" ")).then(user => message.channel.send("<:dokycerto:700492893651075112> » Meu novo apelido neste servidor é " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de `ADMINISTRATOR` para utilizar este comando")
  }
}

module.exports.help = {
    name: "rename",
  aliases: ["renomear"]
}