const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => { // setando a base
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
  if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} :emoji:` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }

    if (args[0].charCodeAt(0) >= 55296) {
        message.channel.send(`<:gierro:710197544751202414> » Não consegui aumentar esse emoji.`)
        
    }

  
  const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);
  
  if (!match || !match[1]) {
        message.channel.send(`<:gierro:710197544751202414> » Por favor, insira um emoji valido.`)
        
    }
  
  const emoji = client.emojis.cache.get(match[1]) ;
  
  
  if (!emoji) {
        message.channel.send(`<<:gierro:710197544751202414> » Não encontrei esse emoji!`)
        
    }
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Informações`, emoji.url)
    .setColor("#4287f5")
    .setThumbnail(emoji.url)
    .addField(`**<:gitag:710185903024504963>•Nome:**`, `${emoji.name}`, true)
    .addField(`**<:giprofile:710193333732900945>•Servidor:**`, `${emoji.guild}`, true)
    .addField(`**<:giimage:710211829271625788>•Emoji Animado:**`, `${emoji.animated ? '<:gicerto:710198069068562473> Sim' : '<:gierro:710197544751202414> Não'}`, true)
    .addField(`**<:giid:710190138826948668>•Id:**`, `\`${emoji.id}\``, true)

    .addField(`**<:giarroba:707361585588600872>•Menção**`, `\`<:${emoji.name}:${emoji.id}>\``, false)
    .addField(`**<:gilink:710212087900536954>•Link:**`, `[Link aqui](${emoji.url})`, false)
    
    message.channel.send({embed})
}

exports.help = {
    name: 'emojiinfo',
  aliases: ["infoemoji"]
}
