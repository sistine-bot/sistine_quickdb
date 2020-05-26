const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:gierro:710197544751202414> » Você precisa da permissão de: `MANAGE_CHANNELS` para utilizar este comando');
  
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} 10[s/m/d/h]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Canais\``, false)
                .setColor('4287f5'));
    }
  
  message.channel.setRateLimitPerUser(args[0])
  message.reply(`<:gicerto:710198069068562473> » o tempo do Slowmode foi alterado com sucesso para ${args[0]} segundos!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['modolento']
}