const Discord = require("discord.js");
const config = require("../../config.json");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
    
  if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("<:dokyerro:700492899833479249> » Você não tem permissão de: `Gerenciar Cargos` para utilizar este comando!")
  
    if (message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
        let unmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.cache.find(role => role.name === 'Mutado');

        if (!unmute) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('4287f5'));
        }

        if (unmute.roles.cache.has(muterole.id)) {
            unmute.roles.remove(muterole.id);
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle(`**${unmute.displayName}** foi desmutado.`)
                .setColor("RANDOM")            
                .setFooter(`Usuário desmutado por ${message.author.username}`)
                .setTimestamp()); 
        } else {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle(`O usuario **${unmute.displayName}** não está mutado.`)
                .setColor("RANDOM"));
        }
    }
}

module.exports.help = {
    name: "unmute",
    aliases: ["desmute","desmutar"],
}