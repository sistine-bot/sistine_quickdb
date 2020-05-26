const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => { // setando as bases
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `KICK_MEMBERS` para utilizar este comando") // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

  let member = message.mentions.members.first() // puxando um membro mencionavel

  if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario @motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Mensagens\``, false)
                .setColor('#4287f5'));
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
          .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL())
          .setColor("DARK_RED")

          message.channel.send(pEmbed)
          
}

exports.help = {
    name: 'kick',
  aliases: ["kickar"]
}
