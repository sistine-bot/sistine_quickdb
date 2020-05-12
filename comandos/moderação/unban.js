const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json')
exports.run = async (doky, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<:dokyerro:700492899833479249> » Você não tem permissão de: `BAN_MEMBERS` para utilizar este comando!")
  
  
  if (isNaN(args[0])) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('2f3136'));
        }
  
    let bannedMember = await doky.users.fetch(args[0])
        if(!bannedMember) return message.channel.send("<:dokyerro:700492899833479249> » Forneça um ID de usuário para desbanir alguém!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "Nenhuma razão fornecida!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<:dokyerro:700492899833479249> » Eu não tenho permissões de `BAN_MEMBERS` ative minhas permissões para utilizar este comando!")|
    message.delete()
    try {
        message.guild.members.unban(bannedMember, reason)
        console.log(`${bannedMember.tag} foi desbanido do servidor: ${message.guild.name}`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.MessageEmbed()
    .setColor('#00ff89')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    .addField("Punição:", "unban")
    .addField("Usuario:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderador:", message.author.username)
    .addField("Motivo:", reason)
    .addField("Data:", message.createdAt.toLocaleString())
        
        message.channel.send(embed);

    }

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'unban',
  aliases: ["desban", "desbanir"]
}
