const db = require("quick.db") // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js") // Puxando a livraria Discord.js
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let emprego = await db.get(`trabaio_${message.author.id}`) // Puxando o 'trabaio', que iremos utilizar para definir na DB o trabalho dos usuários
  
  //let replies = ['programador','construtor','Garçom','Busboy','Chefe','Mecanico']
  if (emprego === 1) return message.reply(`Você ja possui o emprego de: 💻 Programador, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  if (emprego === 2) return message.reply(`Você ja possui o emprego de: 🖌️ Designer, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  if (emprego === 3) return message.reply(`Você ja possui o emprego de: ⛏️ Minerador, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  if (emprego === 4) return message.reply(`Você ja possui o emprego de: 🔧 Mecanico, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  if (emprego === 5) return message.reply(`Você ja possui o emprego de: ▶️ Youtuber, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  if (emprego === 6) return message.reply(`Você ja possui o emprego de: 📶 Streamer, `+'`Utilize '+`${prefixos}`+'demissão para se demitir`')
  
  
  let embed = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`**Lista de empregos**\n\n💻 » \`Programador\`\n🖌️ » \`Designer\`\n⛏️ » \`Minerador\`\n🔧 » \`Mecanico\`\n▶️ » \`Youtuber\`\n📶 » \`Streamer\``)
  .setColor('4287f5')
  
  message.channel.send(embed).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('💻').then(() => msg.react('🖌️')).then(() => msg.react('⛏️')).then(() => msg.react('🔧')).then(() => msg.react('▶️')).then(() => msg.react('📶'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['💻', '🖌️', '⛏️', '🔧', '▶️', '📶'].includes(reaction.emoji.name) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
    
        if (reaction.emoji.name === '💻') { // Caso o usuário clique no emoji referente à Programador
          message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `💻 Programador`'); 
          db.set(`trabaio_${message.author.id}`, 1) // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        } 
    
       if (reaction.emoji.name === '🖌️') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `🖌️ Designer`')
         db.set(`trabaio_${message.author.id}`, 2) // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
       }
       if (reaction.emoji.name === '⛏️') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `⛏️ Minerador`')
         db.set(`trabaio_${message.author.id}`, 3) // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
       }
      if (reaction.emoji.name === '🔧') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `🔧 Mecanico`')
         db.set(`trabaio_${message.author.id}`, 4) //iremos adicionar 2 (dois) na DB, que iremos definir como Designer
       }
      if (reaction.emoji.name === '▶️') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `▶️ Youtuber`')
         db.set(`trabaio_${message.author.id}`, 5) // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
       }
      if (reaction.emoji.name === '📶') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         message.reply('<:gicerto:710198069068562473> » Parabéns agora você e um `📶 Streamer`')
         db.set(`trabaio_${message.author.id}`, 6) // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
       }
      })
      .catch(collected => {
        message.reply('<:gierro:710197544751202414> » O tempo do menu de escolhas acabou utilize o comando novamente.');
      });
    })
  }

exports.help = {
  name: 'emprego',
  aliases: ['trabalho', "trabalhos", "empregos"]
}