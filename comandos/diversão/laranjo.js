const Discord = require('discord.js'); // puxando a livraria 'discord.js'
var Jimp = require("jimp"); // puxando o NPM jimp (instale utilizando: npm i jimp)
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base com async
  
    if (message.content.split(' ').slice(1).join(' ').length < 1) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`nenhum\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        } else { 
        if (message.content.split(' ').slice(1).join(' ').length > 50) { // caso os caracteres sejam maior que 50
            message.reply(`<:dokyerro:700492899833479249> » você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) { // requisitando a permissao: ATTACH_FILES
                var authorMessage = message
                message.channel.send('<:dokypontinhos:700516725241675786> Processando...').then(message => { // uma brincadeira, q iremos excluir essa mensagem e por outra
                    // imagem que puxaremos, no caso, do Laranjo
                    Jimp.read(`https://media.discordapp.net/attachments/689750456695914586/691077705071984710/295364123043211.png?width=540&height=482`, function (err, image) {
                        if (err) message.channel.send('<:dokyerro:700492899833479249> » Ocorreu um erro ao criar a imagem.') // caso ocorra um erro ao criar a imagem
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // setando o tipo da fonte
                            image.print(font, 23, 310, authorMessage.content.split(' ').slice(1).join(' '), 320) // mexendo no local da fonte
                            var aguardeMessage = message // criando umaa nova mensagem
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => { // mudando para PNG a imagem e botando um buffer
                                const attachment = new Discord.MessageAttachment(buffer, 'laranjo.png') // o nome da imagem gerada
                                message.channel.send(attachment).then(message => { // e por fim, a imagem
                                    aguardeMessage.delete() // deletando a mensagem do inicio
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('<a:dokyerro:698672337033232385> | Você não tem permissão de `ATTACH_FILES`') // caso o usuario nao possua permissao
            }
        }
    }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "laranjo",
  aliases: []
}
