const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = (client, message, args) => { // setando a base
  
  //<:gi1:701544373204025454>
  //<:gi2:701544339167379517> 
  //<:gi3:701544370305761281> 
  //<:gi4:701544361229287696> 
  //<:gi5:701544355755851906> 
  //<:gi6:701544349590224937> 
  //<:gi7:701544364194922656> 
  //<:gi8:701544351041454101> 
  //<:gi9:701544375682859019> 
  
  if(message.author.id !== '675439542110650399') return message.channel.send(`${message.author}, Você não tem permissão para utilizar este comando, apenas pessoas especiais.`);
  
  
  let emoji1 = client.emojis.cache.map(a => a).slice(0,63).join(" | ")
    let embed = new Discord.MessageEmbed()
        .setTitle(`**Emojis 1**`)
        .setColor("#4287f5")
        .setDescription(emoji1)
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('701544373204025454').then(r => { //diversão
            msg.react('701544339167379517').then(r => { //Economia
            msg.react('701544370305761281').then(r => { //Info
            msg.react('701544361229287696').then(r => { //Jogos
            msg.react('701544355755851906').then(r => { //Minecraft
            msg.react('701544349590224937').then(r => { //Moderação
            msg.react('701544364194922656').then(r => { //Uteis
            msg.react('701544351041454101').then(r => {
            msg.react('701544375682859019').then(r => {
              
            msg.react('702987160399380670').then(r => { // inicio
            
})
})
})
})
})
})
})
})
})
})
        // filtros de cada reação, para configurar a informação do autor
      const emojis1filtro = (reaction, user, ) => reaction.emoji.id === '701544373204025454' && user.id === message.author.id;
      const emojis2filtro = (reaction, user, ) => reaction.emoji.id === '701544339167379517' && user.id === message.author.id;
      const emojis3filtro = (reaction, user, ) => reaction.emoji.id === '701544370305761281' && user.id === message.author.id;
      const emojis4filtro = (reaction, user, ) => reaction.emoji.id === '701544361229287696' && user.id === message.author.id;
      const emojis5filtro = (reaction, user, ) => reaction.emoji.id === '701544355755851906' && user.id === message.author.id;
      const emojis6filtro = (reaction, user, ) => reaction.emoji.id === '701544349590224937' && user.id === message.author.id;
      const emojis7filtro = (reaction, user, ) => reaction.emoji.id === '701544364194922656' && user.id === message.author.id;
      const emojis8filtro = (reaction, user, ) => reaction.emoji.id === '701544351041454101' && user.id === message.author.id;
      const emojis9filtro = (reaction, user, ) => reaction.emoji.id === '701544375682859019' && user.id === message.author.id;
      
      const BackFilter = (reaction, user, ) => reaction.emoji.id === '702987160399380670' && user.id === message.author.id;
        
      // coletores de cada reação, para ver confirmar tal membro 
      const ONE = msg.createReactionCollector(emojis1filtro);
      const DOIS = msg.createReactionCollector(emojis2filtro);
      const TRES = msg.createReactionCollector(emojis3filtro);
      const QUATRO = msg.createReactionCollector(emojis4filtro);
      const CINCO = msg.createReactionCollector(emojis5filtro);
      const SEIS = msg.createReactionCollector(emojis6filtro);
      const SETE = msg.createReactionCollector(emojis7filtro);
      const OITO = msg.createReactionCollector(emojis8filtro);
      const NOVE = msg.createReactionCollector(emojis9filtro);
      
      
      const Back = msg.createReactionCollector(BackFilter);
 
        DOIS.on('collect', r2 => {// criando um evento, caso o membro clique nessa reação, e todos são iguais!
          let emoji2 = client.emojis.cache.map(a => a).slice(63,124).join(" | ")
          
            embed = new Discord.MessageEmbed()
          .setTitle("**Emojis 2**")
          .setDescription(emoji2)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        TRES.on('collect', r2 => {
          let emoji3 = client.emojis.cache.map(a => a).slice(124,187).join(" | ")
          
            embed = new Discord.MessageEmbed()
                .setTitle("**Emojis 3**")
                .setDescription(emoji3)
                .setColor("#4287f5")
            msg.edit(embed);
        })
      
      let emoji4 = client.emojis.cache.map(a => a).slice(187,243).join(" | ")
      
                QUATRO.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                  .setTitle("**Emojis 4")
                  .setDescription(emoji4)
              .setColor("#4287f5")

            msg.edit(embed);
        })
      
      let emoji5 = client.emojis.cache.map(a => a).slice(243,303).join(" | ")
      
        CINCO.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("**Emojis 5**")
                .setDescription(emoji5)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      let emoji6 = client.emojis.cache.map(a => a).slice(303, 362).join(" | ")
      
      SEIS.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('<:gimine:710210353253974066> » Minecraft')
        .setDescription(emoji6)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      
      let emoji7 = client.emojis.cache.map(a => a).slice(362, 425).join(" | ")
      
      SETE.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('**Emojis 7**')
        .setDescription(emoji7)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      let emoji8 = client.emojis.cache.map(a => a).slice(425, 488).join(" | ")
      
      OITO.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Emojis 8**`)
            .setColor("#4287f5")
            .setDescription(emoji8)
            
           msg.edit(embed);  
        });
      
      let emoji9 = client.emojis.cache.map(a => a).slice(488, 551).join(" | ")
      
      NOVE.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Emojis 9**`)
            .setColor("#4287f5")
            .setDescription(emoji9)
            
           msg.edit(embed);  
        });
      
      ONE.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Emojis 1**!`)
            .setColor("#4287f5")
            .setDescription(emoji1)
            
           msg.edit(embed);  
        });
      
        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Emojis 1**!`)
            .setColor("#4287f5")
            .setDescription(emoji1)
            
           msg.edit(embed);  
        });
    })
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "emojisis",
  aliases: []
}