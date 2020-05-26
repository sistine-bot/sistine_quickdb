const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const num_conv = require('number-to-words'); // puxando o NPM 'number-to-words' (instale utilizando: npm i number-to-words)
const config = require('../../config.json')
const db = require('quick.db');

exports.run = async (client, message, args) => { // setando as bases
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    let output = args.join(' '); // criando um argumento, no caso, o que o membro deseja falar
          if (!output) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
    let bigtext_arr = new Array(); // criaremos uma array
    for (let i = 0; i < output.length; i++) { // puxando numeros, para adicionarmos 
        let isnumber = await parseInt(output[i]); // definimos acima, 'i' e puxamos aqui a quantia de letras possiveis
        if (isnumber >= 0 && isnumber <= 9) // caso ultrapasse o limete, daremos o erro
            bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
        else { 
            if (output[i] !== ' ') { // dentro, ficarai o texto
                if (!output[i].match(/^[a-zA-Z]+$/)) // regex para entradas alfabéticas
                    bigtext_arr.push(`:question:`)
                else
                    bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
            } else bigtext_arr.push('   '); // puxando os detalhes
        }
    }

    try {
        await message.channel.send(bigtext_arr.join('')); // enviando a mensagem com as letras grandes
        return message.delete() // deletando o pedido do membro (!bigtext <edsd>)
    } catch (e) { // procurando algum erro
        return message.reply(`<:gierro:710197544751202414> » Ocorreu um erro e eu não consegui criar sua mensagem.`) // caso tenha algum erro
    }
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'bigtext',
  aliases: ["textogrande"]
}
