
const Discord = module.require('discord.js');
const ms = require('ms');
const config = require('../../config.json')

module.exports.run = async (doky, message, args) => {
if(message.member.hasPermission("ADMINISTRATOR")) {
  let member3 = message.mentions.members.first();
  
  if (!member3){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario @cargo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Administrador\``, false)
                .setColor('2f3136'));
        }
  let muteRole3 = message.mentions.roles.first();
  if(!muteRole3) return message.reply(`<:dokyerro:700492899833479249> » Ops o cargo: \"${muteRole3.name}\" não existe!`);

  member3.roles.remove(muteRole3.id);
  message.channel.send(`${member3}` + ` Você perdeu o cargo: ` + muteRole3.name + `!`);

  }else {
    return message.reply("<a:dokyerro:698672337033232385> » Você precisa ter a permissão de: \"ADMINISTRATOR\" para usar este comando.")
  };
}

module.exports.help = {
    name: "removerole",
  aliases: ["rr", "rrole", "roleremove"]
}