const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const db = require('quick.db')
const config = require('../../config.json')

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
  
    if(message.mentions.users.size < 1){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario`+"``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar Membros\``, false)
                .setColor('4287f5'));
        }
  
  if(!user) return message.reply("<:gierro:710197544751202414> » Não foi possível encontrar esse usuário!");
  let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  var warn = await db.get(`warn_${member.id}`)
  if (warn === null) warn = 0;
  
    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Ação:', 'Checar Warn`s')
    .addField('Usuario:', `${user.username}#${user.discriminator}`)
    .addField('Numero de warn`s:', warn)
    message.channel.send({embed});
}

  exports.help = {
    name: 'warnlevel',
    aliases: ["warnings"],
  };
  //message.guild.member() || message.guild.members.get(args[0])