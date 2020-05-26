const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports.run = async (client, message, args, config) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
    
  let user = db.fetch(`saldo_${message.author.id}`)
  
  if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} saldo @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
  
  if (!args[1]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} saldo @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('<:gierro:710197544751202414> » Você não pode enviar dinheiro negativo')
    }

    if (member < args[1]) {
        return message.channel.send(`Você inseriu uma quantia maior que possui, Tente um numero menor`)
    }

    message.channel.send(`${message.author.tag}, Você enviou ${args[1]} Pontos de Mana para o usuario: ${member} .`)
    db.add(`saldo_${member.id}`, args[1])
    db.subtract(`saldo_${message.author.id}`, args[1])
}
exports.help = {
    name: 'pay',
  aliases: ["pagar", "enviar"]
}