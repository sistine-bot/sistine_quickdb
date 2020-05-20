const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if (message.author.id !== '675439542110650399') return message.channel.send('<:gierro:710197544751202414> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
let users = client.users.cache.map(a => a).slice(0,85).join(" | ")

const embed = new Discord.MessageEmbed()

        .setDescription(users)

    message.reply(embed).then(msg => { // definindo a função 'then' como 'msg'

    msg.react('710207069420126260')
//<:giclear:710207069420126260>
    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['710207069420126260'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '710207069420126260') {
          msg.delete()
          
          message.reply('<:gierro:710197544751202414> » Eval deletado'); 
        
        } 
      })
  })
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'userslist',
  aliases: []
};
