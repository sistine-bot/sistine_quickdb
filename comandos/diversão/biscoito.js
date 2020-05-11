const Discord = require('discord.js');
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    //if(!user) return message.channel.send("<a:dokyatencao:698672287276073090> | Mencione alguém para dar um biscoito.");
    if (!user) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
    if (user.id == message.author.id) return message.reply("<a:dokyerro:698672337033232385> | você não pode dar um tapa em si mesmo.")  
  
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