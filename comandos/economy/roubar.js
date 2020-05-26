const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {
    let member = message.mentions.users.first()
    if (!member) {
        return message.channel.send('<:gierro:710197544751202414> » Você deve mencionar alguém para roubar')
    }
  
  if (message.mentions.users.first().id === "675439542110650399") return message.reply("<:gierro:710197544751202414> » Você não pode roubar meu criador");
  
  if (message.mentions.users.first().id === message.author.id) return message.reply('<:gierro:710197544751202414> » Você não pode se roubar.');  
  let targetuser = await db.get(`saldo_${member.id}`) // fetch mentioned users balance
  let author = await db.get(`saldo_${message.author.id}`) // fetch authors balance
    
  
    const gun0 = new Discord.MessageEmbed()
    .setDescription(`Você não possui nenhuma arma, Você deve possuir uma arma`)
    .setColor('4287f5');
        
    let gun = db.get(`gun_${message.author.id}`)
    if (gun === null) return message.channel.send(gun0)
    if (gun === 0) return message.channel.send(gun0)
  
  const bala0 = new Discord.MessageEmbed()
  .setDescription(`Você não possui nenhuma bala para roubar este usuario!`)
  .setColor('4287f5');
  let balas = db.get(`cartucho_${message.author.id}`)
  if (balas === null) return message.channel.send(bala0)
  if (balas === 0) return message.channel.send(bala0)
  
    
    if (balas < 30) { // if the authors balance is less than 250, return this.
        return message.channel.send('<:gierro:710197544751202414> » Você precisa de pelo menos 30 balas para roubar alguém.')
    }

    if (targetuser < 35) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`<:gierro:710197544751202414> » O usuario ${member} possui menos que 35 Pontos de Magia em seus bolsos.`)
    }

        let timeout = 900000 // definindo o tempo de espera necessário. No nosso caso, 24 horas.

       let roub = await db.get(`roub_${message.author.id}`); // puxando um nome, no caso, que irá armazenar na database
    
       if (roub !== null && timeout - (Date.now() - roub) > 0) { // definindo se o tempo que definimos no começo está válido
         let time = ms(timeout - (Date.now() - roub)); // caso não esteja, iremos avisar o usuário
         message.channel.send(`<:gierro:710197544751202414> » <@${message.author.id}> Você ja robou alguém recentemente, Tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
       } else {
    let random = Math.floor(Math.random() * 200) + 30; // random number 200-1, you can change 200 to whatever you'd like
    let randu = Math.floor(Math.random() * 30) + 1

    const embed = new Discord.MessageEmbed()
    .setDescription(`<:gicerto:710198069068562473> » ${message.author} Você robou o usuario ${member} e saqueou ${random} Pontos de Magia!, Você perdeu ${randu} de balas!`)
    .setColor("4287f5")
    .setTimestamp()
    message.channel.send(embed)

  
         
  db.set(`roub_${message.author.id}`, Date.now())
         
  db.subtract(`cartucho_${message.author.id}`, randu)
  
  db.subtract(`saldo_${member.id}`, random)
  db.add(`saldo_${message.author.id}`, random)
}
}

exports.help = {
  name: 'roubar',
  aliases: ['rob']
}