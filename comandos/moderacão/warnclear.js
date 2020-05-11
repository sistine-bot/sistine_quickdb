const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
const db = require('quick.db')

exports.run = async (doky, message, args) => {
    let user = message.mentions.users.first();
  
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `Kick Members` para utilizar estes comandos!");
    if(message.mentions.users.size < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar membros\``, false)
                .setColor('2f3136'));
        }
  
    if(!user) return message.reply("<:dokyatencao:700517263224340601> » Eu não encontrei este usuario");

    let member = message.mentions.users.first() || message.author;
    var warn = await db.get(`warn_${member.id}`)
    db.set(`warn_${member.id}`, 0) 
    if (warn === null) warn = 0; 

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Ação:', 'Limpar Warns', true)
    .addField('Usuario:', `${user.username}#${user.discriminator}`, true)
    message.channel.send({embed});
}

exports.help = {
  name: 'clearwarns',
  aliases: ["warnclear", "warnclears"],
};