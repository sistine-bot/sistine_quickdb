const Discord = require('discord.js');
const db = require('quick.db');
const { prefix } = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  
  //canal de bem vindo
  var canalb = await db.get(`canalb_${message.guild.id}`)
  if (canalb === null) canalb = '`Nenhum canal definido!`'; 
  if (canalb === 0) canalb = '`Nenhum canal definido!`'; 
  
  //canal de leave member
  var canall = await db.get(`canall_${message.guild.id}`)
  if (canall === null) canall = '`Nenhum canal definido!`';
  if (canall === 0) canall = '`Nenhum canal definido!`'; 
  
  let embed = new Discord.MessageEmbed()
        .setTitle(`**Minha lista de Menus**`)
        .setColor("#2f3136")
        .setDescription(`
** - Ativados
<:dokyon:700517483286888490> - Bem Vindo
<:dokyon:700517483286888490> - Leave member
 - Desativados
<:dokyoff:700517556020314192> - Registro de Mensagens
<:dokyoff:700517556020314192> - Canal de punições


Abaixo esta minha lista de Menus**
`)
  .addField(`<:doky1:701544373204025454> **»**`, `\`Bem Vindo\``, false)
  .addField(`<:doky2:701544339167379517> **»**`, `\`Leave Member\``, false)
  
  .addField(`<:doky3:701544370305761281> **»**`, `\`Registro de Mensagens\``, false)
  .addField(`<:doky4:701544361229287696> **»**`, `\`Canal de punições\``, false)
  

    message.channel.send({embed}).then(msg => { // definindo a função 'then' como 'msg'

msg.react('701544373204025454').then(() => msg.react('701544339167379517')).then(() => msg.react('701544370305761281')).then(() => msg.react('701544361229287696'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['701544373204025454', '701544339167379517', '701544370305761281', '701544361229287696', '703003202257158174'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.id === '701544373204025454') {
          
          const embed1 = new Discord.MessageEmbed()
          .setDescription(`
**<a:dokywelcome:709571675363999755> » Canal de Bem-Vindo
<:dokychannel:709573002878124053> » Canal neste servidor: <#${canalb}>**

\`\`\`
${prefix}setwelcomeoff
${prefix}setwelcome [id do canal]
\`\`\`
`)
  .setColor('#03fc7b')
  .setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
          msg.delete()
          msg.channel.send(embed1)
        
        }

      if (reaction.emoji.id === '701544339167379517') {
          
          const embed1 = new Discord.MessageEmbed()
          .setDescription(`
**<a:dokyblobleave:709599854309015624> » Canal de Leave member
<:dokychannel:709573002878124053> » Canal neste servidor: <#${canall}>**

\`\`\`
${prefix}setleaveoff
${prefix}setleave [id do canal]
\`\`\`
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#03fc7b')

           msg.delete()
           msg.channel.send(embed1);
        }
    
    
    if (reaction.emoji.id === '701544370305761281') {
      
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`
** » Registro de Mensagens
<:dokychannel:709573002878124053> » Canal neste servidor: <#\`Desativado\`>**

**Em desenvolvimento**
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#03fc7b')

           msg.delete()
           msg.channel.send(embed1);
    }
    
    
    if (reaction.emoji.id === '701544361229287696') {
      
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`
** » Canal de punições
<:dokychannel:709573002878124053> » Canal neste servidor: <#\`Desativado\`>**

**Em desenvolvimento**
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#03fc7b')

           msg.delete()
           msg.channel.send(embed1);
    }
})
})
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "menu",
  aliases: ["system"]
}