const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const db = require('quick.db')
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
    let user = message.mentions.users.first();
  
    if(message.mentions.users.size < 1){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar membros\``, false)
                .setColor('2f3136'));
        }
  
  if(!user) return message.reply("<:dokyerro:700492899833479249> » Não foi possível encontrar esse usuário!");
  let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  var warn = await db.get(`warn_${member.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (warn === null) warn = 0; // para nao aparecer 'null' no codigo, caso o membro n tenha nenhum dinheiro, vamos definir como 0
  
    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Ação:', 'Checar Warn`s')
    .addField('Usuario:', `${user.username}#${user.discriminator}`)
    .addField('Numero de warn`s:', warn)
    message.channel.send({embed});
}

  exports.help = {
    name: 'warnlevel',
    aliases: ["warnings"],
  };
  //message.guild.member() || message.guild.members.get(args[0])