const Discord = require('discord.js');
const superagent = require("superagent");
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
  
  if (!User){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
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