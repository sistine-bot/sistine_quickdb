const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  
  //canal de bem vindo
  var canalb = await db.get(`canalb_${message.guild.id}`)
  if (canalb === null) canalb = `Nenhum canal definido!`; 
  
  //canal de leave member
  var canall = await db.get(`canall_${message.guild.id}`)
  if (canall === null) canall = `Nenhum canal definido`;
  
  let embed = new Discord.MessageEmbed()
        .setTitle(`**Minha lista de Menus**`)
        .setColor("#2f3136")
        .setDescription('**Meus menus\n<:dokyon:700517483286888490> - Welcome\n<:dokyon:700517483286888490> - Leave member\n<:dokyoff:700517556020314192> - Canal de punições\n<:dokyoff:700517556020314192> - Registro\n\nAbaixo esta minha lista de Menus**\n\n<:doky1:701544373204025454> » `Bem-Vindo`\n\n<:doky2:701544339167379517> » `Leave-Member`\n\n<:doky3:701544370305761281> » `Canal de punições`\n\n<:doky4:701544361229287696> » `Registro`\n\n<:doky5:701544355755851906> » `Indisponivel`')
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('701544373204025454').then(r => {  //welcome
            msg.react('701544339167379517').then(r => {  //Leave member
            msg.react('701544370305761281').then(r => {  //
            msg.react('701544361229287696').then(r => {  //
            msg.react('701544355755851906').then(r => {  //
            msg.react('702987160399380670').then(r => {  //
})
})
})
})
})
})
        // filtros de cada reação, para configurar a informação do autor
        const onefilter = (reaction, user, ) => reaction.emoji.id === '701544373204025454' && user.id === message.author.id;
        const twofilter = (reaction, user, ) => reaction.emoji.id === '701544339167379517' && user.id === message.author.id;
        const threefilter = (reaction, user, ) => reaction.emoji.id === '701544370305761281' && user.id === message.author.id;
        const forfilter = (reaction, user, ) => reaction.emoji.id === '701544361229287696' && user.id === message.author.id;
        const fivefilter = (reaction, user, ) => reaction.emoji.id === '701544355755851906' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.id === '702987160399380670' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const oneL = msg.createReactionCollector(onefilter);
        const twoL = msg.createReactionCollector(twofilter);
        const threeL = msg.createReactionCollector(threefilter);
        const forL = msg.createReactionCollector(forfilter);
        const fiveL = msg.createReactionCollector(fivefilter)
        const Back = msg.createReactionCollector(BackFilter);
    
        oneL.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.MessageEmbed()
          .setTitle("**Seja bem vindo(a) ao meu menu de Bem-Vindo's**")
          .setDescription(`
${config.prefix}setwelcome [id do canal]

> define o canal que será enviado a mensagem de bem-vindo

**Canal de bem vindo definido neste servidor:** ${canalb}
`)
          //.setThumbnail('')
          .setFooter(`Para obter qualquer outra informação ${config.prefix}ajuda`)
          .setColor("#2f3136")

            msg.edit(embed);
        })
 
        twoL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Seja bem vindo(a) ao meu menu de Lave-Member**")
                .setDescription(`
${config.prefix}setleave [id do canal]

> define o canal que será enviado a mensagem de leave member

**Canal de leave member definido neste servidor:** ${canall}
`)
          .setFooter(`Para obter qualquer outra informação ${config.prefix}ajuda`)
          .setColor("#2f3136")
            msg.edit(embed);
        })
                threeL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**inativo**")
                .setDescription('<:dokyoff:700517556020314192> »  Comando inativo')
                .setColor("#2f3136")

            msg.edit(embed);
        })
      
        forL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**inativo**")
                .setDescription('<:dokyoff:700517556020314192> » Comando inativo')
                .setColor("#2f3136")

            msg.edit(embed);
        })

        fiveL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**inativo**")
                .setDescription('<:dokyoff:700517556020314192> » Comando inativo')
                .setColor("#2f3136")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Minha lista de Menus**`)
            .setColor("#2f3136")
            .setDescription('**Meus menus\n<:dokyon:700517483286888490> - Welcome\n<:dokyon:700517483286888490> - Leave member\n<:dokyoff:700517556020314192> - Canal de punições\n<:dokyoff:700517556020314192> - Registro\n\nAbaixo esta minha lista de Menus**\n\n<:doky1:701544373204025454> » `Bem-Vindo`\n\n<:doky2:701544339167379517> » `Leave-Member`\n\n<:doky3:701544370305761281> » `Canal de punições`\n\n<:doky4:701544361229287696> » `Registro`\n\n<:doky5:701544355755851906> » `Indisponivel`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "menu",
  aliases: ["system"]
}