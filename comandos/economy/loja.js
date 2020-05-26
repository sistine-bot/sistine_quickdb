const db = require("quick.db")
const Discord = require("discord.js")
const fs = require('fs')
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (args[0] === 'vip') {
    const embed = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`
**Seja bem vindo a minha Loja VIP**

<:gi1:701544373204025454> - Cores

<:gi3:701544370305761281> - Wallpaper's

<:gi4:701544361229287696> - Utilitario's
`)
  .setColor('4287f5')
  message.channel.send({embed})
  } else {
  let quantia = await db.get(`saldo_${message.author.id}`)
  let vip = await db.get(`vip_${message.author.id}`)
  
  let cartucho = await db.get(`cartucho_${message.author.id}`)
      
  let gun = await  db.get(`gun_${message.author.id}`)
  if (gun === null) gun = '`Sem armas`'
  if (gun === 0) gun = '`Sem armas`'
  
  if (gun === 1) gun = 'Revolver 38'
  if (gun === 2) gun = 'Shotgun'
  if (gun === 3) gun = 'Fuzil AK-47'
  

  
  const embed = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`
**Seja bem vindo a minha Loja**

<:gi1:701544373204025454> - Cores

<:gi2:701544339167379517> - VIP's

<:gi3:701544370305761281> - Wallpaper's

<:gi4:701544361229287696> - Utilitario's
`)
  .setColor('4287f5')
  message.channel.send({embed}).then(msg => { // definindo a função 'then' como 'msg'

msg.react('701544373204025454').then(() => msg.react('701544339167379517')).then(() => msg.react('701544370305761281')).then(() => msg.react('701544361229287696'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['701544373204025454', '701544339167379517', '701544370305761281', '701544361229287696', '703003202257158174'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
    
    let Embederr = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 25000 Pontos de Magia para comprar esta cor`);
    
                    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.id === '701544373204025454') {
          
          const embed1 = new Discord.MessageEmbed()
          .setDescription(`
**Cores**

<:pinksquareemoji:703003202257158174> rosa » 25000 Pontos de Magia

<:blacklargesquareemoji:702312684493733988> preto » 25000 Pontos de Magia

<:yellowsquareemoji:702312681897721887> amarelo » 25000 Pontos de Magia

<:greensquareemoji:702312683965513809> verde » 25000 Pontos de Magia

<:redsquareemoji:702312682732126248> vermelho » 25000 Pontos de Magia

<:laranjaemoji:706343481219481600> laranja » 25000 Pontos de Magia

<:azulemoji:706343481064292384> azul » 25000 Pontos de Magia

<:roxoemoji:706343481274269746> roxo » 25000 Pontos de Magia
`)
          .setColor('4287f5')
  .setThumbnail(`https://cdn.discordapp.com/emojis/710215873402765373.png?v=1`)
          msg.delete()
          msg.channel.send(embed1).then(msg => {
            
    msg.react('703003202257158174').then(() => msg.react('702312684493733988')).then(() => msg.react('702312681897721887')).then(() => msg.react('702312683965513809')).then(() => msg.react('702312682732126248')).then(() => msg.react('706343481219481600')).then(() => msg.react('706343481064292384')).then(() => msg.react('706343481274269746'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['703003202257158174', '702312684493733988', '702312681897721887', '702312683965513809', '702312682732126248', '706343481219481600', '706343481064292384', '706343481274269746'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    
    let Embederr = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 25000 Pontos de Magia para comprar esta cor`);
    
                    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '703003202257158174') {
          if (quantia < 25000) return message.channel.send(Embederr)
          
          message.reply('<:gicerto:710198069068562473> » Você comprou a cor Rosa por 2500 Pontos de Magia'); 
          db.set(`cor_${message.author.id}`, 1)
          
          db.subtract(`saldo_${message.author.id}`, 25000)
        } 
    //cor preto
       if (reaction.emoji.id === '702312684493733988') {
         if (quantia < 25000) return message.channel.send(Embederr)
         
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor preto por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 2)
         
         db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //cor amarelo
       if (reaction.emoji.id === '702312681897721887') { 
         if (quantia < 25000) return message.channel.send(Embederr)
         
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Amarelo por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 3)
         
         db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //cor verde
       if (reaction.emoji.id === '702312683965513809') { 
         if (quantia < 25000) return message.channel.send(Embederr)
         
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Verde por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 4)
         
         db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //cor vermelho
      if (reaction.emoji.id === '702312682732126248') {
        if (quantia < 25000) return message.channel.send(Embederr)
        
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Vermelho por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 5) // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
        
        db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //cor laranja
      if (reaction.emoji.id === '706343481219481600') {
        if (quantia < 25000) return message.channel.send(Embederr)
        
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Laranja por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 6)
        
        db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //cor azul
      if (reaction.emoji.id === '706343481064292384') {
        if (quantia < 25000) return message.channel.send(Embederr)
        
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Azul por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 7)
        
        db.subtract(`saldo_${message.author.id}`, 25000)
       }
      //
      if (reaction.emoji.id === '706343481274269746') {
        if (quantia < 25000) return message.channel.send(Embederr)
        
         message.reply('<:gicerto:710198069068562473> » Você comprou a cor Roxo por 25000 Pontos de Magia')
         db.set(`cor_${message.author.id}`, 8)
        
        db.subtract(`saldo_${message.author.id}`, 25000)
       }
    })
          })
          
          msg.delete()
          msg.react('703003202257158174').then(() =>  //rosa
          msg.react('702312684493733988')).then(() =>  //preto
          msg.react('702312681897721887')).then(() =>  //amarelo
          msg.react('702312683965513809')).then(() =>  //verde
          msg.react('702312682732126248')).then(() =>  //vermelho
          msg.react('706343481219481600')).then(() =>  //laranja
          msg.react('706343481064292384')).then(() =>  //azul
          msg.react('706343481274269746'))  //roxo
  
  const rosaembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor Rosa\n\n*Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  msg.delete()
          
  const pretoembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor preto\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  
  const amareloembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor amarelo\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  
  const verdeembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor verde\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  
  const vermelhoembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor Vermelho\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);

  const laranjaembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor Laranja\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);

  const azulembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor Azul\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  
  const roxoembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui a cor Roxo\n\n *Utilize **${prefixos}vender** para comprar outra cor*`)
  .setColor(`#4287f5`);
  
  let cor = db.get(`cor_${message.author.id}`)
  if (cor === 1) {
    return message.channel.send(rosaembed)
    msg.delete()
  }
  if (cor === 2) {
    return message.channel.send(pretoembed)
    msg.delete()
  }
  if (cor === 3) {
    return message.channel.send(amareloembed)
    msg.delete()
  }
  if (cor === 4) {
    return message.channel.send(verdeembed)
    msg.delete()
  }
  if (cor === 5) {
    return message.channel.send(vermelhoembed)
    msg.delete()
  }
  if (cor === 6) {
    return message.channel.send(laranjaembed)
  msg.delete()
  }
  if (cor === 7) {
    return message.channel.send(azulembed)
    msg.delete()
  }
  if (cor === 8) {
    msg.delete()
     return message.channel.send(roxoembed)
  }
          let Embederr = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 25000 Pontos de Magia para comprar esta cor`);
}

      
      
    //-------------------------------------------------------------//
      
       if (reaction.emoji.id === '701544339167379517') {
         msg.delete()
         
         const viperror = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mistico**`)
         if (vip === 1 ) {message.delete()
         message.channel.send(viperror)}
         
         const vip2erro = new Discord.MessageEmbed()
         .setDescription(`Você ja e um privilegiado que possui o VIP **Sombrio**`)
         if (vip === 2) {message.delete()
         message.channel.send(vip2erro)}
         
         const vip3erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mago**`)
         if (vip === 3) {message.delete()
         message.channel.send(vip3erro)}
         
         const vip4erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Galatico**`)
         if (vip === 4) {message.delete()
         message.channel.send(vip4erro)}
         
const embed2 =new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`**Loja VIP's**

<:gi1:701544373204025454> » <:gigem:710214117897797722> **VIP Mistico** » 100.000 Pontos de Magia

<:gi2:701544339167379517> » <:gigem:710214117897797722> **VIP Sombrio** » 300.000 Pontos de Magia

<:gi3:701544370305761281> » <:gigem:710214117897797722> **VIP Mago** » 600.000 Pontos de Magia

<:gi4:701544361229287696> » <:gigem:710214117897797722> **VIP Galatico** » 1000.000 Pontos de Magia
`)
  .setThumbnail(`https://cdn.discordapp.com/emojis/710215873402765373.png?v=1`)
  .setColor('4287f5')
          msg.delete()
          message.channel.send(embed2).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('701544373204025454').then(() => msg.react('701544339167379517')).then(() => msg.react('701544370305761281')).then(() => msg.react('701544361229287696'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['701544373204025454', '701544339167379517', '701544370305761281', '701544361229287696'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    
    const Embede1er = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 100,000 Pontos de Magia para comprar este VIP`);
    
    const Embede2er = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 300,000 Pontos de Magia para comprar este VIP`);
            
    const Embede3er = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 600,000 Pontos de Magia para comprar este VIP`);
            
    const Embede4er = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 1000,000 Pontos de Magia para comprar este VIP`);
            
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => { 
        const reaction = collected.first();
      
      //vip 1
        if (reaction.emoji.id === '701544373204025454') {
          const viperror = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mistico**`)
         if (vip === 1 ) {msg.delete()
         message.channel.send(viperror)}
         
         const vip2erro = new Discord.MessageEmbed()
         .setDescription(`Você ja e um privilegiado que possui o VIP **Sombrio**`)
         if (vip === 2) {msg.delete()
         message.channel.send(vip2erro)}
         
         const vip3erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mago**`)
         if (vip === 3) {msg.delete()
         message.channel.send(vip3erro)}
         
         const vip4erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Galatico**`)
         if (vip === 4) {msg.delete()
         message.channel.send(vip4erro)}
          
          if (quantia < 100000) return message.channel.send(Embede1er)
          
          message.channel.send('<:gicerto:710198069068562473> » Você comprou o VIP Mistico por 100,000'); 
          
          db.set(`vip_${message.author.id}`, 1)
          db.subtract(`saldo_${message.author.id}`, 100000)
        }
      
      //vip 2
      if (reaction.emoji.id === '701544339167379517') {
        const viperror = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mistico**`)
         if (vip === 1 ) {msg.delete()
         message.channel.send(viperror)}
         
         const vip2erro = new Discord.MessageEmbed()
         .setDescription(`Você ja e um privilegiado que possui o VIP **Sombrio**`)
         if (vip === 2) {msg.delete()
         message.channel.send(vip2erro)}
         
         const vip3erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mago**`)
         if (vip === 3) {msg.delete()
         message.channel.send(vip3erro)}
         
         const vip4erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Galatico**`)
         if (vip === 4) {msg.delete()
         message.channel.send(vip4erro)}
        
          if (quantia < 300000) return message.channel.send(Embede2er)
          
          message.channel.send('<:gicerto:710198069068562473> » Você comprou o VIP Sombrio por 300,000'); 
          
          db.set(`vip_${message.author.id}`, 2)
          db.subtract(`saldo_${message.author.id}`, 300000)
        }
      
      //vip 3
      if (reaction.emoji.id === '701544370305761281') {
        const viperror = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mistico**`)
         if (vip === 1 ) {msg.delete()
         message.channel.send(viperror)}
         
         const vip2erro = new Discord.MessageEmbed()
         .setDescription(`Você ja e um privilegiado que possui o VIP **Sombrio**`)
         if (vip === 2) {msg.delete()
         message.channel.send(vip2erro)}
         
         const vip3erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mago**`)
         if (vip === 3) {msg.delete()
         message.channel.send(vip3erro)}
         
         const vip4erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Galatico**`)
         if (vip === 4) {msg.delete()
         message.channel.send(vip4erro)}
        
          if (quantia < 600000) return message.channel.send(Embede3er)
          
          message.channel.send('<:gicerto:710198069068562473> » Você comprou o VIP Mago por 600,000'); 
          
          db.set(`vip_${message.author.id}`, 3)
          db.subtract(`saldo_${message.author.id}`, 600000)
        }
      
      //vip 4
      if (reaction.emoji.id === '701544361229287696') {
        const viperror = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mistico**`)
         if (vip === 1 ) {msg.delete()
         message.channel.send(viperror)}
         
         const vip2erro = new Discord.MessageEmbed()
         .setDescription(`Você ja e um privilegiado que possui o VIP **Sombrio**`)
         if (vip === 2) {msg.delete()
         message.channel.send(vip2erro)}
         
         const vip3erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Mago**`)
         if (vip === 3) {msg.delete()
         message.channel.send(vip3erro)}
         
         const vip4erro = new Discord.MessageEmbed()
         .setDescription(`Você já e um privilegiado que possui o VIP **Galatico**`)
         if (vip === 4) {msg.delete()
         message.channel.send(vip4erro)}
        
          if (quantia < 1000000) return message.channel.send()
          
          message.channel.send('<:gicerto:710198069068562473> » Você comprou o VIP Galatico por 1000,000'); 
          
          db.set(`vip_${message.author.id}`, 4)
          db.subtract(`saldo_${message.author.id}`, 1000000)
        }
})
})
}
      if (reaction.emoji.id === '701544370305761281') {
  
  //se o usuario possuir o wallpaper lua vapor wave
  const vaporembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Luva Vapor Wave\n\n*Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  msg.delete()
        
  //se o usuario possuir o wallpaper floresta
  const florestaembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper floresta\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  msg.delete()
        
  //se o usuario possuir o wallpaper lua
  const luaemebd = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Lua\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  msg.delete()
        
  //se o usuario possuir o wallpaper  floresta de neve
  const florneveemebd = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Floresta Da Neve\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  msg.delete()
        
  //se o usuario possuir o wallpaper montanhas
  const montanhasembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Montanhas\n\n *Utilize ***${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`)
  msg.delete();
        
  const barcoembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Barco\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  msg.delete()
        
  const porembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Por do SOL\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`)
  msg.delete();
        
  const futuembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Cidade Futurista\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`)
  msg.delete();
        
  const starembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Estrela cadente\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`)
  msg.delete();
        
  const florembed = new Discord.MessageEmbed()
  .setDescription(`Você ja possui o wallpaper Floresta Das Trevas\n\n *Utilize **${prefixos}vender** para comprar outro wallpaper*`)
  .setColor(`#4287f5`);
  
  //sistema de background
  let foto = db.get(`foto_${message.author.id}`)
  //se o usuario tiver o wallpaper lua vapor ele ira responder esta
  if (foto === 1) return message.channel.send(vaporembed);
  //se o usuario tiver o wallpaper floresta ele ira responder esta embed
  if (foto === 2) return message.channel.send(florestaembed);
  //se o usuario tiver o wallpaper lua ele ira responder esta embed
  if (foto === 3) return message.channel.send(luaemebd);
  //se o usuario tiver o wallpaper floresta ele ira responder esta embed
  if (foto === 4) return message.channel.send(florneveemebd);
  //se o usuario tiver o wallpaper montanhas ele ira responder esta embed
  if (foto === 5) return message.channel.send(montanhasembed)
  
  //Barquingo
  if (foto === 6) return message.channel.send(barcoembed);
  //por do sol 
  if (foto === 7) return message.channel.send(porembed);
  //Futurista 
  if (foto === 8) return message.channel.send(futuembed);
  //Estrela cadente
  if (foto === 9) return message.channel.send(starembed);
  //Floresta das trevas 
  if (foto === 10) return message.channel.send(florembed);
        
        const embed2 = new Discord.MessageEmbed() // Criando uma embed
  .setDescription(`**Loja Wallpapers**`)
.addField(`🌑 - Lua vapor wave » 3500 Pontos de Magia`,`Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Foutrun-vaporwave-hd-wallpaper-preview.jpg?v=1588117665350)`, true)
.addField(`🌳 - Floresta » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F3b8ad2c7b1be2caf24321c852103598a.jpg?v=1588117752285)`, true)
.addField(`🌕 - Lua » 3500 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fde1ddf9ee30e08e15460626b919ef87e.jpg?v=1588117694630)`, true)
.addField(`❄️ - Floresta Neve » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F21456.jpg?v=1588117656806)`, true)
.addField(`⛰️ - Montanhas » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Funnamed.jpg?v=1588117661118)`, true)
.addField(`⛵ - Barco » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-13mk9v.jpg?v=1588366383842)`, true)
.addField(`☀️ - Por do SOL » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-6k3oox.jpg?v=1588366433005)`, true)
.addField(`🏙️ - Cidade Futuristica » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-39gogv.jpg?v=1588366442191)`, true)
.addField(`🌠 - Estrela Cadente » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-96w8e8.png?v=1588366475912)`, true)
.addField(`🌲 - FLoresta Das Trevas » 35000 Pontos de Magia`, `Previw: [aqui](https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-dgzj9o.jpg?v=1588366584158)`, false)
  .setThumbnail(`https://cdn.discordapp.com/emojis/710215873402765373.png?v=1`)
  .setColor('4287f5')
        msg.delete()
          message.channel.send(embed2).then(msg => {
            
    msg.react('🌑').then(() => msg.react('🌳')).then(() => msg.react('🌕')).then(() => msg.react('❄️')).then(() => msg.react('⛰️')).then(() => msg.react('⛵')).then(() => msg.react('☀️')).then(() => msg.react('🏙️')).then(() => msg.react('🌠')).then(() => msg.react('🌲'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['🌑', '🌳', '🌕', '❄️', '⛰️', '⛵', '☀️', '🏙️', '🌠', '🌲'].includes(reaction.emoji.name) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    
    let Embederr = new Discord.MessageEmbed()
    .setDescription(`<:gicerto:710198069068562473> » Você precisa de 35000 Pontos de Magia para comprar este wallpaper`);

    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //wallpaper lua
        if (reaction.emoji.name === '🌑') { // Caso o usuário clique no emoji referente à Programador
          if (quantia < 35000) return message.channel.send(Embederr)
          const embed = new Discord.MessageEmbed()
          .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper lua vaporwave por 3500 Pontos de Magia\n\n**Previw Abaixo**`)
          .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Foutrun-vaporwave-hd-wallpaper-preview.jpg?v=1588117665350`)
          message.reply(embed); 
          db.set(`foto_${message.author.id}`, 1) // iremos adicionar 1 (um) na DB, que iremos usar como Programador
          
          db.subtract(`saldo_${message.author.id}`, 35000)
        }
      //wallpaper floresta
       if (reaction.emoji.name === '🌳') { // Agora, caso o usuário clique no outro emoji, referente à Designer
         if (quantia < 35000) return message.channel.send(Embederr)
         const embed = new Discord.MessageEmbed()
         .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper floresta por 35000 Pontos de Magia\n\n**Previw Abaixo**`)
         .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F3b8ad2c7b1be2caf24321c852103598a.jpg?v=1588117752285`)
         
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 2)
         
         db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //wallpaper lua vaporwave
       if (reaction.emoji.name === '🌕') {
         if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper lua por 35000 Pontos de Magia\n\n**Previw Abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fde1ddf9ee30e08e15460626b919ef87e.jpg?v=1588117694630`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 3)
        
         db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //wallpaper montanha das neves
       if (reaction.emoji.name === '❄️') {
         if (quantia < 35000) return message.channel.send(Embederr)
         const embed = new Discord.MessageEmbed()
         .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper floresta de neve por 35000 Pontos de Magia\n\n**Previw Abaixo**`)
         .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2F21456.jpg?v=1588117656806`)
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 4)
         
         db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //wallpaper montanhas
      if (reaction.emoji.name === '⛰️') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Montanhas por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Funnamed.jpg?v=1588117661118`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 5)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //wallpaper barco 
      if (reaction.emoji.name === '⛵') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Barco por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-13mk9v.jpg?v=1588366383842`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 6)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //por do sol 
      if (reaction.emoji.name === '☀️') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Por do SOL por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-6k3oox.jpg?v=1588366433005`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 7)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //Cidade Futuristica
      if (reaction.emoji.name === '🏙️') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Cidade Futuristicas por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-39gogv.jpg?v=1588366442191`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 8)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //Estrela Cadente
      if (reaction.emoji.name === '🌠') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Estrela Cadente por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-96w8e8.png?v=1588366475912`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 9)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      //
      if (reaction.emoji.name === '🌲') {
        if (quantia < 35000) return message.channel.send(Embederr)
        const embed = new Discord.MessageEmbed()
        
        .setDescription(`<:gicerto:710198069068562473> » Você comprou o wallpaper Floresta Das trevas por 35000 Pontos de Magia\n\n**Previw abaixo**`)
        .setImage(`https://cdn.glitch.com/2e9c9432-b30c-4fa6-8ef3-8f8b25e9ba1a%2Fwallhaven-dgzj9o.jpg?v=1588366584158`)
        
         message.reply(embed)
         db.set(`foto_${message.author.id}`, 10)
        
        db.subtract(`saldo_${message.author.id}`, 35000)
       }
      })
      })
      }
      const balaembed = new Discord.MessageEmbed()
      .setDescription(`Você não possui 35000 para comprar 30 balas`)
      
      if (reaction.emoji.id === '701544361229287696') {
        const embedutis = new Discord.MessageEmbed()
        .setDescription(`
**Loja utilitarios**

**Itens**

<:gibullet:709240730857504848> - Cartucho 30 Balas » 15000

**Armas**

<:giglock:710210648402821161> - Revolver 38 » 30000
<:gishotgun:709240722057986109> - Shotgun » 45000
<:giak:710292000817283072> - Fuzil AK-47 » 50000
`)
          .setColor('4287f5')
          .setThumbnail(`https://cdn.discordapp.com/emojis/710215873402765373.png?v=1`)
        
          msg.delete()
          message.channel.send(embedutis).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('709240730857504848').then(() => msg.react('710210648402821161')).then(() => msg.react('709240722057986109')).then(() => msg.react('710292000817283072'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['709240730857504848', '710210648402821161', '709240722057986109', '710292000817283072'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    
    let Embederorv = new Discord.MessageEmbed()
    .setColor(`#4287f5`)
    .setDescription(`<:gierro:710197544751202414> » Você precisa de 15000 Pontos de Magia para comprar um cartucho`);
  
            
            
            
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      
        if (reaction.emoji.id === '709240730857504848') {
          if (quantia < 15000 ) return message.channel.send(Embederorv)
          
          message.reply('<:gicerto:710198069068562473> » Você comprou um cartucho com 30 balas por 15000'); 
          
          db.add(`cartucho_${message.author.id}`, 30)
          db.subtract(`saldo_${message.author.id}`, 15000)
        }
      
      
      const revolverembed = new Discord.MessageEmbed()
      .setColor(`#4287f5`)
      .setDescription(`<:gierro:710197544751202414> » Você precisa de 30000 Pontos de Magia para comprar um revolver 39`);
      
      if (reaction.emoji.id === '710210648402821161') {
        const gun1e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Revolver 38`)
        .setColor('4287f5')
        
        const gun2e = new Discord.MessageEmbed()
        .setDescription(`Você já possui uma Shotgun`)
        .setColor('4287f5')
        
        const gun3e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Fuzil AK-47`)
        .setColor('4287f5')
        
        let gun = db.get(`gun_${message.author.id}`)
        if (gun === 1) return message.channel.send(gun1e)
        if (gun === 2) return message.channel.send(gun2e)
        if (gun === 3) return message.channel.send(gun3e)
        
          if (quantia < 30000 ) return message.channel.send(revolverembed)
          
          message.reply('<:gicerto:710198069068562473> » Você comprou um Revolver 38 por 30000'); 
          
          db.set(`gun_${message.author.id}`, 1)
          db.subtract(`saldo_${message.author.id}`, 30000)
        }
      
      
      const shutembed = new Discord.MessageEmbed()
      .setColor(`#4287f5`)
      .setDescription(`<:gierro:710197544751202414> » Você precisa de 45000 Pontos de Magia para comprar uma shotgun`);
      
      if (reaction.emoji.id === '709240722057986109') {
        const gun1e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Revolver 38`)
        .setColor('4287f5')
        
        const gun2e = new Discord.MessageEmbed()
        .setDescription(`Você já possui uma Shotgun`)
        .setColor('4287f5')
        
        const gun3e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Fuzil AK-47`)
        .setColor('4287f5')
        
        let gun = db.get(`gun_${message.author.id}`)
        if (gun === 1) return message.channel.send(gun1e)
        if (gun === 2) return message.channel.send(gun2e)
        if (gun === 3) return message.channel.send(gun3e)
        
        if (quantia < 45000) return message.channel.send(shutembed)
          
          message.reply('<:gicerto:710198069068562473> » Você comprou uma shotgun por 45000'); 
          
          db.set(`gun_${message.author.id}`, 2)
          db.subtract(`saldo_${message.author.id}`, 45000)
        }
      
      
      //
      const akembed = new Discord.MessageEmbed()
      .setColor(`#4287f5`)
      .setDescription(`<:gierro:710197544751202414> » Você precisa de 45000 Pontos de Magia para comprar uma shotgun`);
      
      
      if (reaction.emoji.id === '710292000817283072') {
        const gun1e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Revolver 38`)
        .setColor('4287f5')
        
        const gun2e = new Discord.MessageEmbed()
        .setDescription(`Você já possui uma Shotgun`)
        .setColor('4287f5')
        
        const gun3e = new Discord.MessageEmbed()
        .setDescription(`Você já possui um Fuzil AK-47`)
        .setColor('4287f5')
        
        let gun = db.get(`gun_${message.author.id}`)
        if (gun === 1) return message.channel.send(gun1e)
        if (gun === 2) return message.channel.send(gun2e)
        if (gun === 3) return message.channel.send(gun3e)
        
        if (quantia < 45000) return message.channel.send(akembed)
          
          message.reply('<:gicerto:710198069068562473> » Você comprou um Fuzil AK-47 » 50000'); 
          
          db.set(`gun_${message.author.id}`, 3)
          db.subtract(`saldo_${message.author.id}`, 45000)
        }
      //
})
})
        
        
        
}
})
})}
}
exports.help = {
  name: 'loja',
  aliases: ["loja-info", "info-loja"]
} 