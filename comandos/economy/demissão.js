const db = require('quick.db'); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let saldo = await db.get(`saldo_${message.author.id}`) // puxando o 'money' armazenado na database
  
const embedtest = new Discord.MessageEmbed()
.setDescription('<:gierro:710197544751202414> » para pedir demissão, você necessita de **R$ 50000** Pontos de Magia!')
 if (saldo < 50000) return message.reply(embedtest)
  
 var emprego = await db.get(`trabaio_${message.author.id}`)
 
 if (emprego === 0) { 
  const embederro = new Discord.MessageEmbed()
  .setDescription('<:gierro:710197544751202414> » Você não possui um emprego para a demissão')
    message.channel.send(embederro)
  }
if (emprego === null) {
  const embederro = new Discord.MessageEmbed()
  .setDescription('<:gierro:710197544751202414> » Você não possui um emprego para a demissão')
    message.channel.send(embederro)
  }
  if (emprego === 1) {
    const embedone = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja largar a vida de Programador? Saiba: Você pagará **R$ 50000**`)
    message.channel.send(embedone).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { // puxamos um filtro para o usuário que clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // verificamos se o ID do usuário que clicou, é igual ao do autor do comando
    };
    
    msg.awaitReactions(filter, {max: 1}) // retornando com a reação que puxamos acima
    
      .then(collected => { // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado
      
        const reaction = collected.first();
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!'); 
          
          db.delete(`trabaio_${message.author.id}`) // removendo do 'trabaio' da database, que é definido como Programador
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' da database
        } else { // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
  }
  if (emprego === 2) { // agora, o emprego dois, que é o Designer
    const embedtt = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja sair da vida de um Designer? Saiba: Você terá que pagar **R$ 50000** Pontos de Magia`)
    message.channel.send(embedtt).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414'))

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
      msg.awaitReactions(filter, {max: 1}) // retornando com a reação que puxamos acima
    
      .then(collected => { // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado
      
        const reaction = collected.first();
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!'); 
          
          db.delete(`trabaio_${message.author.id}`) // removendo do 'trabaio' da database, que é definido como Programador
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' da database
        } else { // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
  }
  
      if (emprego === 3) { // agora, o emprego dois, que é o Designer
    const embedtt = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja sair da vida de um Minerador? Saiba: Você terá que pagar **R$ 50000** Pontos de Magia`)
    message.channel.send(embedtt).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!');
          db.delete(`trabaio_${message.author.id}`)
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
  }
    if (emprego === 4) { // agora, o emprego dois, que é o Designer
    const embedtt = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja sair da vida de um Mecanico? Saiba: Você terá que pagar **R$ 50000** Pontos de Magia`)
    message.channel.send(embedtt).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!');
          db.delete(`trabaio_${message.author.id}`) 
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
  }
      if (emprego === 5) { // agora, o emprego dois, que é o Designer
    const embedtt = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja sair da vida de um Youtuber? Saiba: Você terá que pagar **R$ 50000** Pontos de Magia`)
    message.channel.send(embedtt).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!');
          db.delete(`trabaio_${message.author.id}`)
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
  }
      if (emprego === 6) { // agora, o emprego dois, que é o Designer
    const embedtt = new Discord.MessageEmbed()
    .setDescription(`Olá **${message.author.username}**, você realmente deseja sair da vida de um Streamer? Saiba: Você terá que pagar **R$ 50000** Pontos de Magia`)
    message.channel.send(embedtt).then(msg => {

    msg.react('710198069068562473').then(() => msg.react('710197544751202414')) // com a função tem denovo, iremos adicionar as mesmas reações

    const filter = (reaction, user) => { // criando um filtro sobre quem clicou
      return ['710198069068562473', '710197544751202414'].includes(reaction.emoji.id) && user.id === message.author.id; // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
    };
    msg.awaitReactions(filter, {max: 1}) // retornando com as reações
      .then(collected => { // e mais uma função then, que vai ser como o collected acima
        const reaction = collected.first(); 
    
        if (reaction.emoji.id === '710198069068562473') { // caso o usuário clique no emoji referente à correto, iremos fazer a ação
          message.reply('<:gicerto:710198069068562473> » você pediu demissão com sucesso!');
          db.delete(`trabaio_${message.author.id}`)
          
          db.subtract(`saldo_${message.author.id}`, 50000) // removendo do 'money' na database
        } else { // caso ele clique no outro emoji, daremos como cancelado
         message.reply('<:gicerto:710198069068562473> » cancelado com sucesso.')
         }
      })
    })
}
}
exports.help = {
  name: 'demissão',
  aliases: ['demissao']
}