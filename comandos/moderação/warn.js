const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const config = require('../../config.json')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<:gierro:710197544751202414> » Você precisa da permissão de: `Kickar Membros` para utilizar este comando!");
  
  if (message.mentions.users.size < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario motivo`+"``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Kickar Membros\``, false)
                .setColor('4287f5'));
        }
  
  if (message.mentions.users.first().id === message.author.id) return message.reply('<:gierro:710197544751202414> » Você não pode se auto warnar.');
  
  if (message.mentions.users.first().id === "675439542110650399") return message.reply("<:gierro:710197544751202414> » Você não pode warnar meu criador");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  
  if (args[0] === 'clear') {
    let user = message.mentions.users.first();
    if(!user) return message.reply("<:giatencao:710196761704267807> » Eu não encontrei este usuario");

    let member = message.mentions.users.first() || message.author;
    var warn = await db.get(`warn_${member.id}`)
    db.delete(`warn_${member.id}`, 0) 
    if (warn === null) warn = 0; 

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Ação:', 'Limpar Warns', true)
    .addField('Usuario:', `${user.username}#${user.discriminator}`, true)
    message.channel.send({embed});
  } else {
  
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) reason = 'Nenhuma razão fornecida.';

  let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  var warn = await db.get(`warn_${member.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  
  if (warn === null) warn = 0;
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você deseja adicionar um warn ao usuario: ${message.mentions.users.first()}?

**<:gicerto:710198069068562473> » Sim
<:gierro:710197544751202414> » Não**`)
  message.channel.send({embed}).then(msg => {
      
      //<:gierro:710197544751202414> 
      //<:gicerto:710198069068562473> 
    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { 
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) 
      .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.id === '710198069068562473') {
          const embido = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .addField('Punição:', 'Warning')
          .addField('Usuario:', `${member.username}#${member.discriminator}`)
          .addField('Warnado por:', `${message.author.username}#${message.author.discriminator}`)
          .setTimestamp()
          message.channels.cache.get(``).send(embido)
          db.add(`warn_${member.id}`, 1)
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso'); 
        
        }
      
      })
    })
  
  if(member.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return 
  });
    }
};

exports.help = {
  name: 'warn',
  aliases: ["warnar"],
};