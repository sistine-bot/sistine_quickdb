const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases

    // para puxarmos um membro mencionado, iremos utilizar a function abaixo
    let member = message.mentions.users.first() || message.author; // uma coisa bacana de falar: o ||, pode ser nomeado de 'ou' dentro do nosso code. Ou seja, caso o autor não mencione ninguém, ele vai puxar o autor mesmo

    let embed = new Discord.MessageEmbed()

    .setColor('#4287f5')
    .setTitle(`Avatar de ${member.username}`) // puxando o nome do membro
    .setDescription("**📥 clique [aqui](" + member.displayAvatarURL() + ") para baixar a imagem**") // setando o link da imagem!
    .setImage(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    message.reply(embed)
  
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'avatar',
  aliases: ["foto"]
}
