const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando as bases

    if (!message.member.hasPermission('BAN_MEMBERS')){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('2f3136'));
        }

    let member = message.mentions.members.first() // puxando um membro mencionavel
    
        if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('2f3136'));
        }

    if (!member.bannable) return message.reply("<:dokyerro:700492899833479249> » não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai banir
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
