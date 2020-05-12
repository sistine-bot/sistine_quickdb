const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../../config.json')

exports.run = (doky, message, args) => { // setando as bases 
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<:dokyerro:700492899833479249> » você precisa da permissão de: \`MANAGE_MESSAGES\` para utilizar este comando.`); // caso o autor não possua a permissão 'GERENCIAR_MENSAGENS', vamos avisar para ele
    let clean = args.slice(0).join(' '); // puxando uma quantidade de numero, partindo dos argumentos zero
 

  if (clean < 2 || clean > 100) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} 2 a 100` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Mensagens\``, false)
                .setColor('2f3136'));
        }
    
    // caso o membro não escreva um numero
    if (args.length === 0) return message.reply(`<:dokyerro:700492899833479249> » escreva um número de: \`2 à 100\`!`) 
    try { // utilizando a function 'try', traduzindo: tentar
        message.channel.bulkDelete(clean) // tentaremos deletar a quantia que o membro pediu
        // enviando uma embed
        let embed = new Discord.MessageEmbed()

        .setTitle(`**<:dokytrash:700516278426664973> » Clear**`)
        .setDescription(`Limpei um total de \`${clean}\` mensagens.`)
        .setColor('#000000')
        .setFooter(`Moderador: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){ // procurando um erro
        console.log(e); // caso consiga encontrar, daremos o erro
    }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'clear',
  aliases: ["limpar"]
}
