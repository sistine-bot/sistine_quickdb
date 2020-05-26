const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => { // setando a base
    let replies = ["Sim", "Não"]; // criando uma 'tabela' com Sim e Não
    let result = Math.floor((Math.random() * replies.length)); // puxando aquela tabela, vamos criar um sistema random, que pode cair em uma ou outra
    
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    let duvida = args.slice(0).join(" "); 
        if (!duvida){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} pergunta` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('GOLD')
    .addField(`PERGUNTA`, `${duvida}`)
    .addField(`RESPOSTA`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = {
    name: 'pergunta',
  aliases: ["thinking", "what", "perg"]
}
