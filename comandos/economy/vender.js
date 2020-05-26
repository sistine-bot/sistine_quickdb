const db = require("quick.db") // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js") // Puxando a livraria Discord.js
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author;
  let saldo = db.fetch(`saldo_${member.id}`)
  
  let foto = await db.get(`foto_${member.id}`)
  
  let embed = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`
**<:givenda:710214404880465931> » Itens disponiveis para venda**

🖼️ » Wallpaper

🎨 » Cor

💎 » VIP

🔫 » Armas
`)
  .setThumbnail(`https://cdn.discordapp.com/emojis/710215873402765373.png?v=1`)
  .setColor('#03fc7b')
  
  message.channel.send(embed).then(msg => {

     msg.react('🖼️').then(() => msg.react('🎨')).then(() => msg.react('💎')).then(() => msg.react('🔫'))

    const filter = (reaction, user) => { 
      return ['🖼️', '🎨', '💎', '🔫'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
                    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
      //
        if (reaction.emoji.name === '🖼️') {
          
          let foto = db.get(`foto_${message.author.id}`)
          //se o usuario tiver o wallpaper lua vapor ele ira responder esta
          if (foto === 1) {
          
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Lua Vaporwave` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //se o usuario tiver o wallpaper floresta ele ira responder esta embed
          if (foto === 2) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Floresta` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //se o usuario tiver o wallpaper lua ele ira responder esta embed
          if (foto === 3) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Lua` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //se o usuario tiver o wallpaper floresta ele ira responder esta embed
          if (foto === 4) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Floresta Das Neves` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //se o usuario tiver o wallpaper montanhas ele ira responder esta embed
          if (foto === 5) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Montanhas` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else

          //Barquingo
          if (foto === 6) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Barquinho` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //por do sol 
          if (foto === 7) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Por do SOL` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //Futurista 
          if (foto === 8) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Cidade Futurista` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //Estrela cadente
          if (foto === 9) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Estrela Cadente` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          } else
          //Floresta das trevas 
          if (foto === 10) {
            message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu wallpaper `Floresta das Trevas` e ganhou 1000 Pontos de Magia'); 
          db.delete(`foto_${member.id}`)
          
          db.add(`saldo_${member.id}`, 1000)
          }
          
          if (foto === null) return message.channel.send('Você não possui um wallpaper utilize: '+`\`${prefixos}`+'loja`')
          if (foto === 0) return message.channel.send('Você não possui um wallpaper utilize: '+`\`${prefixos}`+'loja`')
        }
    
      //
       if (reaction.emoji.name === '🎨') {
         let cor = db.get(`cor_${message.author.id}`)
  
  if (cor === 1) {
         message.channel.send('<:gicerto:710198069068562473> » Você vendeu sua cor `Rosa` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 2) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Preto` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 3) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Amarelo` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 4) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Verde` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 5) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Vermelho`e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 6) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Laranja` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 7) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Azul` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  } else
  if (cor === 8) {
    message.reply('<:gicerto:710198069068562473> » Você vendeu sua cor `Roxo` e ganhou 1000 Pontos de Magia')
         db.delete(`cor_${message.author.id}`)
         
         db.add(`saldo_${member.id}`, 1000)
  }
         
         if (cor === null) return message.channel.send('Você não possui uma cor utilize: '+`\`${prefixos}`+'loja`')
         if (cor === 0) return message.channel.send('Você não possui um cor utilize: '+`\`${prefixos}`+'loja`')
       }
      //
      if (reaction.emoji.name === '💎') {
        let vip = db.get(`vip_${message.author.id}`)
        
        //vip
        if (vip === 1) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu `VIP Mistico` e ganhou 500,00 Pontos de Magia')
          
          db.delete(`vip_${message.author.id}`)
          db.add(`saldo_${member.id}`, 50000)
        } else if (vip === 2) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu `VIP Sombrio` e ganhou 150,000 Pontos de Magia')
          
          db.delete(`vip_${message.author.id}`)
          db.add(`saldo_${member.id}`, 150000)
        } else if (vip === 3) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu `VIP Mago` e ganhou 300,000 Pontos de Magia')
          
          db.delete(`vip_${message.author.id}`)
          db.add(`saldo_${member.id}`, 300000)
        } else if (vip === 4) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu `VIP Galatico` e ganhou 500,000 Pontos de Magia')
          
          db.delete(`vip_${message.author.id}`)
          db.add(`saldo_${member.id}`, 500000)
        }
        if (vip === null) return message.channel.send('Você não possui um VIP utilize: '+`\`${prefixos}`+'loja`')
        if (vip === 0) return message.channel.send('Você não possui um VIP utilize: '+`\`${prefixos}`+'loja`')
       }
      
      if (reaction.emoji.name === '🔫') {
        let gun = db.get(`gun_${member.id}`)

        if (gun === 1) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu seu `Revolver 38` e ganhou 15000 Pontos de Magia')
          
          db.delete(`gun_${message.author.id}`)
          db.add(`saldo_${member.id}`, 15000)
        } else //gun = '**Revolver 38**'
        if (gun === 2){
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu sua `Shotgun` e ganhou 22500 Pontos de Magia')
          
          db.delete(`gun_${message.author.id}`)
          db.add(`saldo_${member.id}`, 22500)
        } else //gun = '**Shotgun**'
        if (gun === 3) {
          message.channel.send('<:gicerto:710198069068562473> » Você vendeu sua `Ak-47` e ganhou 25000 Pontos de Magia')
          
          db.delete(`gun_${message.author.id}`)
          db.add(`saldo_${member.id}`, 25000)
        }//gun = '**Fuzil AK-47**'
        
        //vip
        if (gun === null) return message.channel.send('Você não possui nenhuma Arma utilize: '+`\`${prefixos}`+'loja`')
        if (gun === 0) return message.channel.send('Você não possui nenhuma uma Arma utilize: '+`\`${prefixos}`+'loja`')
       }
      })
      .catch(collected => { // Lembra da 'then' collected? Pois é! Caso o usuário não clique em 30s, iremos declarar como cancelado
        message.channel.send('<:gierro:710197544751202414> » O tempo do menu de escolhas acabou utilize o comando novamente.');
      });
    })
  }

exports.help = {
  name: 'vender',
  aliases: ["sell"]
}