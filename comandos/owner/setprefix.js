const Discord = require('discord.js');
const config = require('../../config.json')
const db = require('quick.db');

exports.run = (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  if (!message.member.hasPermission('ADMINISTRATOR')){
    return message.channel.send('<:gierro:710197544751202414> » Você deve possuir a permissão de: `Administrador` para poder utilizar este comando')
  }
  if (args[0] === 'reset') {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Você deseja resetador o prefixo: \`${prefixos}\` ele voltara a ser ${config.prefix}`)
    .setColor('4287f5');
    message.channel.send(embed).then(msg => {
      
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
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Prefixo resetado com sucesso'); 
          db.delete(`prefixos_${message.guild.id}`)
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Ok, não resetar meu prefixo.'); 
        }
      
      })
    })
  } else
  if (!args[0]) {
    
    const embede = new Discord.MessageEmbed()
    .setDescription(`Você deve inserir um novo carctere para que eu possa colocar em meu prefixo!`)
    .setColor('4287f5');
    message.channel.send(embede)
  } else 
    
    if (args[0] === prefixos){
      
    const embedi = new Discord.MessageEmbed()
    .setDescription(`Esse prefixo \`${prefixos}\` já esta em uso tente outro.`)
    .setColor('4287f5');
    message.channel.send(embedi)
  } else {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Você deseja colocar ${args[0]} como o meu prefixo?`)
    .setColor('4287f5');
    message.channel.send(embed).then(msg => {
      
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
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Prefixo alterado com sucesso'); 
          db.set(`prefixos_${message.guild.id}`, args[0])
        }
      
        if (reaction.emoji.id === '710197544751202414') {
          msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Ok, não irei alterar meu prefixo.'); 
        }
      
      })
    })
  }
};

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'setprefix',
  aliases: []
};
