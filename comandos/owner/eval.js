const Discord = require('discord.js')
const config = require('../../config.json')
const db = require("quick.db");

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
exports.run = (doky, message, args) => {
    let member = message.mentions.users.first() || message.author;
  
    if (message.author.id !== '675439542110650399') return message.channel.send('<:dokyerro:700492899833479249> » Você não pode utilizar este comando, Apenas pessoas especiais.');
    
    if(!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} script` + "``")
                .addField('**Alternativas**', `\`nenhum\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
  let code = args.slice(0).join(' ');
  
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
      
      const sucessembed = new Discord.MessageEmbed()
      .setColor('2f3136')
      .setTitle('<:dokycerto:700492893651075112> » Comando funcionando')
      .setDescription(`
<a:updating:556685577152626688> » **entrada**\n
\`\`\`${code}\`\`\`
<a:cz_outcoming2:708772113078812693> » **Saida**\n
\`\`\`js\n${clean(evaled)}\n\`\`\``)
      .setFooter(`Comando usado por: ${member.username}`)
      .setTimestamp()
        message.channel.send(sucessembed).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('700492899833479249')

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['700492899833479249'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '700492899833479249') {
          msg.delete()
          message.channel.send('<:dokyerro:700492899833479249> » Eval deletado'); 
        
        } 
      })
  })

    } catch (err) {
      
      const erroembed = new Discord.MessageEmbed()
      .setColor('2f3136')
      .setTitle('<:dokyerro:700492899833479249> » Ocorreu um erro')
      .setDescription(`
<a:updating:556685577152626688> » **Entrada**\n
\`\`\`${code}\`\`\`
<a:cz_outcoming2:708772113078812693> » **Saida**\n
\`\`\`js\n${clean(err)}\n\`\`\``)
      .setFooter(`Comando usado por: ${member.username}`)
      .setTimestamp()
        message.channel.send(erroembed).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('700492899833479249')

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['700492899833479249'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '700492899833479249') {
          msg.delete()
          
          message.reply('<:dokyerro:700492899833479249> » Eval deletado'); 
        
        } 
      })
  })
}
}

exports.help = {
  name: 'eval',
  aliases: []
};