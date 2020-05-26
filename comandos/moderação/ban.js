const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => { // setando as bases

  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!message.member.hasPermission('BAN_MEMBERS')){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('4287f5'));
        }

    let member = message.mentions.members.first() // puxando um membro mencionavel
    
        if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('4287f5'));
        }

    if (!member.bannable) return message.reply("<:gierro:710197544751202414> » não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai banir
    let reason = args.slice(1).join(' ')
    if (!reason) reason = "Nenhuma razão fornecida" // requisitando um motivo desse banimento
    await member.ban(reason) // caso não haja, iremos dar o erro
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      let embed = new Discord.MessageEmbed()
          .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
          .addField("Punição:", "ban")
          .addField("Usuário:", member.user.tag)
          .addField("Moderador:", message.author.tag)
          .addField("Motivo:", reason)
          .addField("Data:", message.createdAt.toLocaleString())
          .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL())
          .setColor("DARK_RED")
          .setTimestamp()

         message.channel.send(embed);
}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'ban',
  aliases: ["banir"]
}
