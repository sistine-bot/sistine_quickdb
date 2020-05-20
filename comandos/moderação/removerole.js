
const Discord = module.require('discord.js');
const ms = require('ms');
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
if(message.member.hasPermission("ADMINISTRATOR")) {
  let member3 = message.mentions.members.first();
  
  if (!member3){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario @cargo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('4287f5'));
        }
  let muteRole3 = message.mentions.roles.first();
  if(!muteRole3) return message.reply(`<:gierro:710197544751202414> » Ops o cargo: \"${muteRole3.name}\" não existe!`);

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