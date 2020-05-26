const fights = require('../../data/fights.json');
const config = require('../../config.json');
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  
  if (reason.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
  if(message.mentions.users.first().id === "698287896997789746") return message.reply('***Kame KAme KAME HAAAAAA***. Doky Causou: Dando ∞ em você. Você foi obliterado do universo. ***Doky*** Venceu');
  if(message.mentions.users.first().id === "675439542110650399") return message.reply('<:gierro:710197544751202414> » Você não pode lutar com o vortex, plebeu.:facepalm: Ele vai te destruir:wink:');
  
  const embed = new Discord.MessageEmbed()
  .setColor('#4287f5')
  .setDescription(`**Lutador 1:** ${message.author.username}\n**Lutador 2:** ${message.mentions.users.first().username}\n\n**Atualização da luta**:\n${fights[Math.floor(Math.random() * fights.length)]}`)
    message.channel.send(embed)
  }



exports.help = {
  name: 'fight',
  aliases: ["brigar", "lutinha"],
};