const Discord = require('discord.js');
const weather = require('weather-js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => { // setando a base
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} RJ` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }

  
  weather.find({ // puxando os detalhes do npm
        search: args, // definindo argumentos
        degreeType: 'C' // o detalhe setado: C de Graus Celcius
    }, function (err, result) { // caso ache um erro
        if (err) message.channel.send(err); // enviaremos no console
      
        let txt = args.slice(0).join(' ');
      
        // caso o bot não encontre a cidade
        if (!txt) return message.reply(`<:gierro:710197544751202414> » desculpe, mas não encontrei essa cidade!`)
        let embed = new Discord.MessageEmbed()
            .setDescription(`
**${result[0].location.name}**\n
**☀️ Temperatura** ${result[0].current.temperature}°C\n
**🌡️ Sensação Térmica** ${result[0].current.feelslike}°C\n
**💦 Umidade** ${result[0].current.humidity}%\n
**💨 Vento** ${result[0].current.windspeed}`)
            .setColor('#4287f5')
            .setImage(result[0].current.imageUrl)

        message.channel.send(embed)

    });
};
exports.help = {
    name: 'clima',
  aliases: ["tempo"]
  };