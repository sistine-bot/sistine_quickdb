const fights = require('../../data/fights.json');
const config = require('../../config.json')
const Discord = require('discord.js')

exports.run = (doky, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  
  if (reason.length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
  if(message.mentions.users.first().id === "698287896997789746") return message.reply('***Kame KAme KAME HAAAAAA***. Doky Causou: Dando ∞ em você. Você foi obliterado do universo. ***Doky*** Venceu');
  if(message.mentions.users.first().id === "675439542110650399") return message.reply('<:dokyerro:700492899833479249> » Você não pode lutar com o vortex, plebeu.:facepalm: Ele vai te destruir:wink:');
  
  const embed = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setDescription(`**Lutador 1:** ${message.author.username}\n**Lutador 2:** ${message.mentions.users.first().username}\n\n**Atualização da luta**:\n${fights[Math.floor(Math.random() * fights.length)]}`)
    message.channel.send(embed)
  }



exports.help = {
  name: 'fight',
  aliases: ["brigar", "lutinha"],
};