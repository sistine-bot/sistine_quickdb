const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author;
  let biog = await db.get(`bio_${member.id}`)
  
  
  if (args[0] === 'reset') {
    if (!['675439542110650399'].includes(message.author.id)) {
    return message.channel.send(`<:dokyerro:700492899833479249> » Você não pode utilizar este comando, apenas pessoas especiais.`)
    }
  
    message.channel.send('<:gicerto:710198069068562473> » A BIO do usuario '+`${member}`+' foi resetada com sucesso!') 
    db.delete(`bio_${member.id}`)
  }
  
  if (args[0] === 'set') {
    if (!args[1]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }

    // puxando o membro que iremos enviar
    let text = args.slice(1).join(' ')
  
    message.channel.send('<:gicerto:710198069068562473> » Nova bio setada com sucesso:\n`'+`${text}`+'`') 
    db.set(`bio_${member.id}`, args.slice(1).join(' ')) // adicionando na database, a quantia
}
}
exports.help = {
    name: 'setbio',
  aliases: []
}