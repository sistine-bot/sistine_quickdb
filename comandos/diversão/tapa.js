const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../config.json')
exports.run = async (doky, message, args) => {
  
    let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
  
  if (!User){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
   if (User.id == message.author.id) return message.reply("<:dokyerro:700492899833479249> »  você não pode dar um tapa em si mesmo.")  

    const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);

    let Embed = new Discord.MessageEmbed()
        .setDescription(`😱 <@${message.author.id}> deu um tapa em <@${User.id}>`)
        .setImage(body.url)
        .setColor("RANDOM")
        .setTimestamp()

    message.channel.send(Embed)
}

exports.help = {
    name: "tapa",
    aliases: ['tapão', "slap"]
}