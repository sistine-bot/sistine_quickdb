const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (doky, message, args) => {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("<:dokyerro:700492899833479249> » Você não tem permissão de: `ADMINISTRATOR` para utilizar este comando!")
  
    if (message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
        let unmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.cache.find(role => role.name === 'Mutado');

        if (!unmute) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('2f3136'));
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
                .setTitle(`**${unmute.displayName}** não está mutado.`)
                .setColor("RANDOM"));
        }
    }
}

module.exports.help = {
    name: "unmute",
    aliases: ["desmute","desmutar"],
}