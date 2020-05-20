const Discord = require('discord.js')
const superagent = require("superagent");
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
    let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
  
  if (!User){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
  
   if (User.id == message.author.id) return message.reply("<:gierro:710197544751202414> »  você não pode fazer carinha em si mesmo.")  

    const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/pat`);

    let Embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> fez um carinho em: <@${User.id}>`)
        .setImage(body.url)
        .setColor("RANDOM")
        .setTimestamp()

    message.channel.send(Embed)
}

exports.help = {
    name: "pat",
    aliases: ['tapinha', "carinho"]
}