const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const num_conv = require('number-to-words'); // puxando o NPM 'number-to-words' (instale utilizando: npm i number-to-words)
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando as bases

    let output = args.join(' '); // criando um argumento, no caso, o que o membro deseja falar
          if (!output) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
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
        return message.reply(`<:dokyerro:700492899833479249> » Ocorreu um erro e eu não consegui criar sua mensagem.`) // caso tenha algum erro
    }
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'bigtext',
  aliases: ["textogrande"]
}
