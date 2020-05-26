const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  if (message.author.id !== '675439542110650399') return message.channel.send('<:gierro:710197544751202414> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  //on/off
  let onoff = await db.get(`onoff_${message.guild.id}`)
  if (onoff === null) onoff = `<:gioff:700517556020314192> Desativado`;
  if (onoff === 0) onoff = `<:gioff:700517556020314192> Desativado`
  if (onoff === 1) onoff = `<:gion:700517483286888490> Ativado`
  
  let rolehomem = await db.get(`homem_${message.guild.id}`)
  if (rolehomem === null) rolehomem = '`Nenhum cargo`'
  if (rolehomem === 0) rolehomem = '`Nenhum cargo`'
  
  let rolemulher = await db.get(`mulher_${message.guild.id}`)
  if (rolemulher === null) rolemulher = '`Nenhum cargo`'
  if (rolemulher === 0) rolemulher = '`Nenhum cargo`'
  
  let roleoutro = await db.get(`outro_${message.guild.id}`)
  if (roleoutro === null) roleoutro = '`Nenhum cargo`'
  if (roleoutro === 0) roleoutro = '`Nenhum cargo`'
  
  let rolem18 = await db.get(`m18_${message.guild.id}`)
  if (rolem18 === null) rolem18 = '`Nenhum cargo`'
  if (rolem18 === 0) rolem18 = '`Nenhum cargo`'
  
  let rolen18 = await db.get(`n18_${message.guild.id}`)
  if (rolen18 === null) rolen18 = '`Nenhum cargo`'
  if (rolen18 === 0) rolen18 = '`Nenhum cargo`'
  
  let rolenregister = await db.get(`nregister_${message.guild.id}`)
  if (rolenregister === null) rolenregister = '`Nenhum cargo`'
  if (rolenregister === 0) rolenregister = '`Nenhum cargo`'
  
  let roleregister = await db.get(`register_${message.guild.id}`)
  if (roleregister === null) roleregister = '`Nenhum cargo`'
  if (roleregister === 0) roleregister = '`Nenhum cargo`'
  
  
  //-------------------------------------------------------------------
  
  
  let onhomem = await db.get(`onhomem_${message.guild.id}`)
  if (onhomem === null) onhomem = '<:gioff:700517556020314192>'
  if (onhomem === 0) onhomem = '<:gioff:700517556020314192>'
  if (onhomem === 1) onhomem = '<:gioff:700517556020314192>'
  if (onhomem === 2) onhomem = '<:gion:700517483286888490>'
  
  let onmulher = await db.get(`onmulher_${message.guild.id}`)
  if (onmulher === null) onmulher = '<:gioff:700517556020314192>'
  if (onmulher === 0) onmulher = '<:gioff:700517556020314192>'
  if (onmulher === 1) onmulher = '<:gioff:700517556020314192>'
  if (onmulher === 2) onmulher = '<:gion:700517483286888490>'
  
  let onoutro = await db.get(`onoutro_${message.guild.id}`)
  if (onoutro === null) onoutro = '<:gioff:700517556020314192>'
  if (onoutro === 0) onoutro = '<:gioff:700517556020314192>'
  if (onoutro === 1) onoutro = '<:gioff:700517556020314192>'
  if (onoutro === 2) onoutro = '<:gion:700517483286888490>'
  
  let onm18 = await db.get(`onm18_${message.guild.id}`)
  if (onm18 === null) onm18 = '<:gioff:700517556020314192>'
  if (onm18 === 0) onm18 = '<:gioff:700517556020314192>'
  if (onm18 === 1) onm18 = '<:dgioff:700517556020314192>'
  if (onm18 === 2) onm18 = '<:gion:700517483286888490>'
  
  let onn18 = await db.get(`onn18_${message.guild.id}`)
  if (onn18 === null) onn18 = '<:gioff:700517556020314192>'
  if (onn18 === 0) onn18 = '<:gioff:700517556020314192>'
  if (onn18 === 1) onn18 = '<:gioff:700517556020314192>'
  if (onn18 === 2) onn18 = '<:gion:700517483286888490>'
  
  let onnregister = await db.get(`onnregister_${message.guild.id}`)
  if (onnregister === null) onnregister = '<:gioff:700517556020314192>'
  if (onnregister === 0) onnregister = '<:gioff:700517556020314192>'
  if (onnregister === 1) onnregister = '<:gioff:700517556020314192>'
  if (onnregister === 2) onnregister = '<:gion:700517483286888490>'
  
  let onregister = await db.get(`onregister_${message.guild.id}`)
  if (onregister === null) onregister = '<:gioff:700517556020314192>'
  if (onregister === 0) onregister = '<:gioff:700517556020314192>'
  if (onregister === 1) onregister = '<:gioff:700517556020314192>'
  if (onregister === 2) onregister = '<:gion:700517483286888490>'
  
  
  
  
  
  
  let embed = new Discord.MessageEmbed()
        .setTitle(`**Registro**`)
        .setColor("#4287f5") //<:dokyon:700517483286888490> 
        .setDescription('O Sistema neste servidor esta: **'+`${onoff}`+'**\n\n<:gi1:701544373204025454> » `Homem`\n\n<:gi2:701544339167379517> » `Mulher`\n\n<:gi3:701544370305761281> » `Outro`\n\n<:gi4:701544361229287696> » `+18`\n\n<:gi5:701544355755851906> » `-18`\n\n<:gi6:701544349590224937> » `Não registrado`\n\n<:gi7:701544364194922656> » `Registrado`')
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
      
              msg.react('701544373204025454').then(r => {  //<:doky1:701544373204025454> filtro 1
              msg.react('701544339167379517').then(r => {  //<:doky2:701544339167379517> filtro 2
              msg.react('701544370305761281').then(r => {  //<:doky3:701544370305761281> filtro 3
              msg.react('701544361229287696').then(r => {  //<:doky4:701544361229287696> filtro 4
              msg.react('701544355755851906').then(r => {  //<:doky5:701544355755851906> filtro 5
              msg.react('701544349590224937').then(r => {  //<:doky6:701544349590224937> filtro 6
              msg.react('701544364194922656').then(r => {  //<:doky7:701544364194922656> filtro 7
            
              
              msg.react('702987160399380670').then(r => {  //<:dokyvoltar:702987160399380670> filtro voltar
})
})
})
})
})
})
})
})
      msg.react.delete
      
        // filtros de cada reação, para configurar a informação do autor
        const onefilter = (reaction, user, ) => reaction.emoji.id === '701544373204025454' && user.id === message.author.id;
        const twofilter = (reaction, user, ) => reaction.emoji.id === '701544339167379517' && user.id === message.author.id;
        const threefilter = (reaction, user, ) => reaction.emoji.id === '701544370305761281' && user.id === message.author.id;
        const forfilter = (reaction, user, ) => reaction.emoji.id === '701544361229287696' && user.id === message.author.id;
        const fivefilter = (reaction, user, ) => reaction.emoji.id === '701544355755851906' && user.id === message.author.id;
        const sixfilter = (reaction, user ) => reaction.emoji.id === '701544349590224937' && user.id === message.author.id;
        const sevenfilter = (reaction, user ) => reaction.emoji.id === '701544364194922656' && user.id === message.author.id;
      
        const BackFilter = (reaction, user, ) => reaction.emoji.id === '702987160399380670' && user.id === message.author.id;
      
        // coletores de cada reação, para ver confirmar tal membro 
        const oneL = msg.createReactionCollector(onefilter);
        const twoL = msg.createReactionCollector(twofilter);
        const threeL = msg.createReactionCollector(threefilter);
        const forL = msg.createReactionCollector(forfilter);
        const fiveL = msg.createReactionCollector(fivefilter);
        const sixL = msg.createReactionCollector(sixfilter);
        const sevenL = msg.createReactionCollector(sevenfilter);
      
        const Back = msg.createReactionCollector(BackFilter);
      
        oneL.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.MessageEmbed()
          .setTitle("**Homem**")
          .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **Homem** utilize **${prefixos}cargohomem @cargo**

${onhomem} **|** **Cargo:** <@&${rolehomem}>
`)
          //.setThumbnail('')
          .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        twoL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Mulher**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **mulher** utilize **${prefixos}cargomulher @cargo**

${onmulher} **| Cargo:** <@&${rolemulher}>
`)
          .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
          .setColor("#4287f5")
            msg.edit(embed);
        })
                threeL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Outro**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **Outro** utilize **${prefixos}cargooutro @cargo**

${onoutro} **| Cargo: <@&${roleoutro}>**
`)
                .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      
        forL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**+18**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **+18** utilize **${prefixos}cargomais18 @cargo**

${onm18} **| Cargo:** <@&${rolem18}>
`)
                .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
                .setColor("#4287f5")

            msg.edit(embed);
        })

        fiveL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**-18**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **-18** utilize **${prefixos}cargomenos18 @cargo**

${onn18} **| Cargo:** <@&${rolen18}>
`)
                .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      
        sixL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Não Registrado**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **Não Registrado** utilize **${prefixos}cargonaoregistrado @cargo**

${onnregister} **| Cargo:** <@&${rolenregister}>
`)
                .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      
      sevenL.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Registrado**")
                .setDescription(`
**Seja bem vindo ao meu menu de registro**

Para definir um cargo para **Registrado** utilize **${prefixos}cargoregistrado @cargo**

${onregister} **|** **Cargo:** <@&${roleregister}>
`)
                .setFooter(`Para obter qualquer outra informação ${prefixos}ajuda`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      
        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Registro**`)
            .setColor("#4287f5")
            .setDescription('O Sistema neste servidor esta: **'+`${onoff}`+'**\n\n <:gi1:701544373204025454> » `Homem`\n\n<:gi2:701544339167379517> » `Mulher`\n\n<:gi3:701544370305761281> » `+18`\n\n<:gi4:701544361229287696>  » `-18`\n\n<:gi5:701544355755851906> » `Não registrado`\n\n<:gi6:701544349590224937> » `Registrado`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "registro",
  aliases: []
}