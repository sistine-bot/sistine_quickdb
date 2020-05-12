const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:dokyerro:700492899833479249> » Você precisa da permissão de: `MANAGE_CHANNELS` para utilizar este comando');
  
    if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} 10[s/m/d/h]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Gerenciar Canais\``, false)
                .setColor('2f3136'));
        }
  message.channel.setRateLimitPerUser(args[0])
  message.reply(`<:dokycerto:700492893651075112> » o tempo do Slowmode alterado com sucesso para ${args[0]} segundos!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['modolento']
}