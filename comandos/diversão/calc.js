const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const math = require('mathjs'); // puxando o NPM 'mathjs' (instale utilizando: npm i mathjs)
const ms = require('ms'); // puxando o NPM 'ms' (instale utilizando: npm i ms)
const config = require('../../config.json')

exports.run = async (client, message, args) => { // setando a base, com async
  
    if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} 2 + 2` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  let conta = args.slice(1).join(' ')
  const embed = new Discord.MessageEmbed()
  .setTitle(`**<:gicalculadora:710201455793012809> » Calculadora**`)
  .addField(`**Conta**`, `\`${conta}\``)
  .addField(`**Resultado:**`, `\`${math.evaluate(args.join(' '))}\``)

  message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'calc',
  aliases: ["calcular", "calculo"]
}
