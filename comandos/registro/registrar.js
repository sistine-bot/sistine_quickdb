const Discord = require('discord.js')
const db = require('quick.db')
const { prefix } = require('../../config.json')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("<:gierro:710197544751202414> » Você precisa da permissão de: `Gerenciar Cargos` para utilizar este comando");
  let member = message.mentions.users.first() || message.author;
  
  if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('4287f5'));
        }
  
  if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`Nenhuma Alternativa\``, false)
                .addField('**Permissões**', `\`Gerenciar Cargos\``, false)
                .setColor('4287f5'));
        }
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Você esta registrando o usuario: '+member.username)
  .setDescription(`Clique em uma reação para começar a registrar

<:gi1:701544373204025454> › Genero
<:gi2:701544339167379517> › Idade
<:gi4:701544361229287696> › Outros
`)
  .setColor('4287f5');
  
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
          
          message.channel.send('<:gicerto:710198069068562473> » Você definiu o cargo '+ `${lrole}`+' como o cargo de registrado'); 
          db.set(`onregister_${message.guild.id}`, 1)
          db.set(`register_${message.guild.id}`, role)
        }
      
       if (reaction.emoji.id === '710197544751202414') {//<:gicerto:710198069068562473>
                                                        //<:gierro:710197544751202414>
          
          let lrole = message.mentions.roles.first();
          let role = lrole.id;
          
         msg.delete()
          message.channel.send('<:gicerto:710198069068562473> » Comando cancelado com sucesso');
        }
    })
  })
}
exports.help = {
  name: 'registrar',
  aliases: []
}