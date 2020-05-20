const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {      
  try {
    let data = await fetch('https://coronavirus-19-api.herokuapp.com/countries').then(res => res.json());
    data = data.find(({ country }) => country.toLowerCase() === (args[0] || 'World').toLowerCase());
    
    
    if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${config.prefix}${this.help.name} país` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
    
    const embed = new Discord.MessageEmbed()
      .setColor('000000')
      .setTitle(`Casos de Corona (Covid-19) no(a) ${args[0] || 'mundo'}`)
      .setThumbnail('https://s2.glbimg.com/WhbzZlFC8PlJuEFLlbm3iaRLJmA=/0x0:1086x652/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/J/0ldrArS9q9dOOLdE16KA/estrutura-do-corona.jpg')
      .addFields(
        { name: 'Casos confirmados no total:', value: data.cases, inline: false },
        { name: 'Casos de hoje:', value: data.todayCases, inline: true },
        { name: 'Mortes no total:', value: data.deaths, inline: false },
        { name: 'Mortes de hoje:', value: data.todayDeaths, inline: true },
        { name: 'Recuperados:', value: data.recovered, inline: false },
        { name: 'Casos criticos:', value: data.critical, inline: true }
      );
    message.channel.send({ embed });
  } catch (error) {
        
    message.channel.send(`<:gierro:710197544751202414> » Ocorreu um erro\n${error}`);
  }
}
exports.help = {
    name: 'coronavirus',
  aliases: ["corona", "coronga"]
};