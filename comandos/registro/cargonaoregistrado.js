const Discord = require('discord.js')
const db = require('quick.db')
const { prefix } = require('../../config.json')

exports.run = async (doky, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permissão de: `Gerenciar Cargos` para utilizar este comando");
  
  if (!args[0]) {
    return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${prefix}${this.help.name} @cargo` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('2f3136'));
  }
  
  let lrole = message.mentions.roles.first();
  if (!lrole) {
    return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${prefix}${this.help.name} @cargo` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('2f3136'));
  }
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você tem certeza que deseja colocar o cargo: ${lrole}, como o cargo de não registrado?`)
  
  message.channel.send({embed}).then(msg => { // definindo a função 'then' como 'msg'

     msg.react('700492893651075112').then(() => msg.react('700492899833479249'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['700492893651075112', '700492899833479249'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
                    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '700492893651075112') {//<:dokyerro:700492899833479249> 
          
          let lrole = message.mentions.roles.first();
          let role = lrole.id;
          
          message.reply('<:dokycerto:700492893651075112> » Você definiu o cargo '+ `${lrole}`+' como o cargo de nao registrado'); 
          db.set(`onnregister_${message.guild.id}`, 1)
          db.set(`nregister_${message.guild.id}`, role)
        }
      
      if (reaction.emoji.id === '700492899833479249') {
        msg.delete()
          message.reply('<:dokycerto:700492893651075112> » Comando cancelado'); 
        }
    })
  })
}
exports.help = {
  name: 'cargonaoregistrado',
  aliases: []
}