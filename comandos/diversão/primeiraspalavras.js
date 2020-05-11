const Discord = require('discord.js')
var Jimp = require("jimp")
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  
        if (message.content.split(' ').slice(1).join(' ').length < 1){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send('<:dokyatencao:700517263224340601> » Você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?')
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('<:dokypontinhos:700516725241675786> » Processando...').then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('<:dokyatencao:700517263224340601> | Ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('<:dokyerro:700492899833479249> » Eu não tenho permissão de `ATTACH_FILES`, Não tenho permissão de enviar imagens')
            }
        }
    }
}

exports.help = {
    name: "primeiraspalavras",
    aliases: ['firstword']
}