const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
    
  if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<:gierro:710197544751202414> » Você não tem permissão de: `Banir Membros` para utilizar este comando!")
  
  if (isNaN(args[0])) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Banir Membros\``, false)
                .setColor('4287f5'));
        }
  
    let bannedMember = await client.users.fetch(args[0])
        if(!bannedMember) return message.channel.send("<:gierro:710197544751202414> » Forneça um ID de usuário para desbanir alguém!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "Nenhuma razão fornecida!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("<:gierro:710197544751202414> » Eu não tenho permissões de `BAN_MEMBERS` ative minhas permissões para utilizar este comando!")|
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
