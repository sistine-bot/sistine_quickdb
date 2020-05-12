const Discord = require("discord.js");
const ms = require("ms");
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  
  if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("<:dokyerro:700492899833479249> » Você precisa da permisão de: `ADMINISTRATOR` para utilizar este comando!")
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario 1[h/s/d/m]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Administrador\``, false)
                .setColor('2f3136'));
        }
  
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("<:dokyerro:700492899833479249> » Não e possivel silenciar usuario com cargos de `MANAGE_MESSAGES`");
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
  if(!mutetime) return message.reply("<a:dokyerro:698672337033232385> » Você não especificou um tempo!");

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