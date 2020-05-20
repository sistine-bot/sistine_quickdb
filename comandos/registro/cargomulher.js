const Discord = require('discord.js')
const db = require('quick.db')
const { prefix } = require('../../config.json')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:gierro:710197544751202414> » Você precisa da permissão de: `Gerenciar Cargos` para utilizar este comando");
  
  if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefix}${this.help.name} @cargo` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('4287f5'));
        }
  
  let lrole = message.mentions.roles.first();
  if (!lrole) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefix}${this.help.name} @cargo` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('4287f5'));
        }
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você tem certeza que deseja colocar o cargo: ${lrole}, como o cargo de mulher?`)
  
  message.channel.send({embed}).then(msg => { // definindo a função 'then' como 'msg'

     msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
                    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '710198069068562473') {//<:gicerto:710198069068562473> 
                                                        //<:gierro:710197544751202414> 
          let lrole = message.mentions.roles.first();
          let role = lrole.id;
          
          message.reply('<:gicerto:710198069068562473> » Você definiu o cargo '+ `${lrole}`+' como o cargo de mulher'); 
          db.set(`onmulher_${message.guild.id}`, 1)
          db.set(`mulher_${message.guild.id}`, role)
        }
      
      if (reaction.emoji.id === '710197544751202414') {
        msg.delete()
          message.reply('<:gicerto:710198069068562473> » Comando cancelado'); 
        }
    })
  })
}
exports.help = {
  name: 'cargomulher',
  aliases: []
}