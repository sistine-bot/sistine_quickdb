const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if (message.author.id !== '675439542110650399') return message.channel.send('<:gierro:710197544751202414> » Você não pode utilizar este comando, Apenas pessoas especiais.');
  
let servers = client.guilds.cache.map(g => g.name)

const embed = new Discord.MessageEmbed()

        .setDescription(servers)

    message.reply(embed).then(msg => { // definindo a função 'then' como 'msg'
//<:giclear:710207069420126260>
    msg.react('710207069420126260')

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['710207069420126260'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
        if (reaction.emoji.id === '710207069420126260') {
          msg.delete()
          
          message.reply('<:gierro:710197544751202414> » Comando deletado'); 
        
        } 
      })
  })
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'serverlist',
  aliases: ["listserver", 'serverslist']
};
