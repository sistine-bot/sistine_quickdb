const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const math = require('mathjs'); // puxando o NPM 'mathjs' (instale utilizando: npm i mathjs)
const ms = require('ms'); // puxando o NPM 'ms' (instale utilizando: npm i ms)
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base, com async
  
    if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} 2 + 2` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`**<:dokycalculadora:700509255643562105> » Calculadora**`)
  .addField(`**Resultado:**`, `\`${math.evaluate(args.join(' '))}\``)

  message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'calc',
  aliases: ["calcular", "calculo"]
}
