const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const config = require('../../config.json')
const db = require('quick.db')

exports.run = async (doky, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `Kick Members` para utilizar este comando!");
  if (message.mentions.users.size < 1){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar membros\``, false)
                .setColor('2f3136'));
        }
  if (message.mentions.users.first().id === message.author.id) return message.reply('<:dokyerro:700492899833479249> » Você não pode se auto warnar.');
  
  if (message.mentions.users.first().id === "675439542110650399") return message.reply("<:dokyerro:700492899833479249> » Você não pode warnar meu criador");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) reason = 'Nenhuma razão fornecida.';

  let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  var warn = await db.get(`warn_${member.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  
  if (warn === null) warn = 0;
  db.add(`warn_${member.id}`, 1)
  
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('Punição:', 'Warning')
  .addField('Usuario:', `${member.username}#${member.discriminator}`)
  .addField('Warnado por:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Numero de warnings:', warn)
  .setTimestamp()
  
  message.channel.send({embed})
  
  if(member.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return 
  });
};

exports.help = {
  name: 'warn',
  aliases: ["warnar"],
};