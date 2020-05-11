const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM moment (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o local do moment, no nosso caso, pt-BR
const config = require('../../config.json')

exports.run = (doky, message, args) => { // setando a base

  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
  if (args.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} :emoji:` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }

    if (args[0].charCodeAt(0) >= 55296) {
        message.channel.send(`<:dokyerro:700492899833479249> » Não consegui aumentar esse emoji.`)
        
    }

  
  const match = args[0].match(/<:[a-zA-Z0-9_-]+:(\d{18})>/);
  
  if (!match || !match[1]) {
        message.channel.send(`<:dokyerro:700492899833479249> » Por favor, insira um emoji valido.`)
        
    }
  
  const emoji = doky.emojis.cache.get(match[1]) ;
  
  
  if (!emoji) {
        message.channel.send(`<:dokyerro:700492899833479249> » Não encontrei esse emoji!`)
        
    }
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Informações`, emoji.url)
    .setColor("#2f3136")
    .setThumbnail(emoji.url)
    .addField(`**<:dokytag:701202353474371585>•Nome:**`, `${emoji.name}`, true)
    .addField(`**<:dokyprofile:700516353831993385>•Servidor:**`, `${emoji.guild}`, true)
    .addField(`**<:dokyimage:707421295394029568>•Emoji Animado:**`, `${emoji.animated ? '<:dokycerto:700492893651075112>  Sim' : '<:dokyerro:700492899833479249> Não'}`, true)
    .addField(`**<:dokyid:701200223422119966>•Id:**`, `\`${emoji.id}\``, true)

    .addField(`**<:dokyarroba:707361585588600872>•Menção**`, `\`<:${emoji.name}:${emoji.id}>\``, false)
    .addField(`**<:dokylink:707363581448159322>•Link:**`, `[Link aqui](${emoji.url})`, false)
    
    message.channel.send({embed})
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'emojiinfo',
  aliases: ["infoemoji"]
}
