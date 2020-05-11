const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando as bases
  
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `KICK_MEMBERS` para utilizar este comando") // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

    let member = message.mentions.members.first() // puxando um membro mencionavel

    if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario @motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar membros\``, false)
                .setColor('2f3136'));
        }
    if (!member.bannable) return message.reply("<:dokyerro:700492899833479249> » não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai expulsar
    let reason = args.slice(1).join(' ') // puxando um motivo
    if (!reason) reason = "Nenhuma razão fornecida" // caso nao haja, daremos com tal mensagem
    await member.kick(reason) // finalizando com o kick
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      let pEmbed = new Discord.MessageEmbed()
          .addField("Punição:", "ban")
          .addField("Usuário:", member.user.tag)
          .addField("Moderador:", message.author.tag)
          .addField("Motivo:", reason)
          .addField("Data:", message.createdAt.toLocaleString())
          .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED")

          message.channel.send(pEmbed)
          
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'kick',
  aliases: ["kickar"]
}
