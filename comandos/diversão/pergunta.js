const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = (doky, message, args) => { // setando a base
    var replies = ["Sim", "Não"]; // criando uma 'tabela' com Sim e Não
    var result = Math.floor((Math.random() * replies.length)); // puxando aquela tabela, vamos criar um sistema random, que pode cair em uma ou outra
    
    let duvida = args.slice(0).join(" "); 
  
        if (!duvida){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} pergunta` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('GOLD')
    .addField(`PERGUNTA`, `${duvida}`)
    .addField(`RESPOSTA`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'pergunta',
  aliases: ["thinking", "what", "perg"]
}
