const superagent = require("snekfetch");
const Discord = require('discord.js')

const fs = require('fs');
const config = require('../../config.json')
exports.run = async (doky, message, args) => {

    const ip = args[0]
    
    if(!ip) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} ip` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }

    superagent.get('https://api.mcsrvstat.us/2/' + ip) ////// <- Coloque o IP do seu servidor 
        .end((err, response) => {
      
      let online1 = 'Sim'
      let offline1 = 'Não'

      let online = response.body.players.online

      let On = response.body.online ? online1 : offline1

      let version1 = 'Não disponível'
      let version2 = response.body.version
            
      let Versionn = response.body.version ? version2 : version1

      let maximo = response.body.players.max
      
            const embed = new Discord.MessageEmbed()

            .setTitle(ip + ' - Status')
            .addField(`**ip**`, `${ip}`, false)
            .addField(`**Online**`, `${On}`, false)
            .addField(`**Versão**`, `${Versionn}`, false)
            .addField(`**Jogadores Online**`, `${online} / ${maximo}`)
            .setColor('2f3136')
            .setTimestamp()     
            .setFooter(doky.user.username)
            
                  message.channel.send(embed)
                })
}

exports.help = {
  name: 'mcstatus',
  aliases: ["status", "serverinfo"]
}