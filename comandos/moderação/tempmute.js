const Discord = require("discord.js");
const ms = require("ms");
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("<:gierro:710197544751202414> » Você precisa da permisão de: `Gerenciar Cargos` para utilizar este comando!")
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  
  if(!tomute){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} 1[h/s/d/m]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Canais\``, false)
                .setColor('4287f5'));
        }
  
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("<:gierro:710197544751202414> » Não e possivel silenciar usuario com cargos de `MANAGE_MESSAGES`");
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Mutado");
  //start of create role
  if(!muterole) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:dokyerro:700492899833479249> Erro`)
    .addField('Ocorreu um erro,não encontrei o cargo chamado `Mutado`', `Crie um cargo com o nome de Mutado para que eu possa mutar algum usuario.`)
    
    message.channel.send(embed)
  }

  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("<:gierro:710197544751202414> » Você não especificou um tempo!");

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> foi silenciado por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`Usuario: <@${tomute.id}> foi des silenciado!`);
  }, ms(mutetime));


//end of module
}

exports.help = {
  name: "tempmute",
  aliases: ["mute"]
}