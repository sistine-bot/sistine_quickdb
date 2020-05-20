const Discord = require('discord.js');
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    
    if (!user) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
    if (user.id == message.author.id) return message.reply("<:gierro:710197544751202414> » você não pode se dar um biscoito.")  
  
    let cookies = [
    'http://i.imgur.com/SLwEY66.gif', 
    'http://i.imgur.com/K6VoNp3.gif', 
    'http://i.imgur.com/knVM6Lb.gif',
    'http://i.imgur.com/P1BMly5.gif', 
    'http://i.imgur.com/I8CrTUT.gif', 
];

let cookembed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`<@${message.author.id}> deu para um biscoito para: <@${user.id}> :cookie:`)
.setImage(cookies[Math.floor(Math.random() * cookies.length)])
.setTimestamp()

message.channel.send(cookembed)
   
}

exports.help = {
    name: 'biscoito',
  aliases: ["cookie"]
}