const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  try {
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
  }
    
      const str = args.join(' ');
      let msg = await message.reply(str.split('').reverse().join(''));
    } catch (err) {
      message.channel.send('<:gierro:710197544751202414> » Ouve um erro!\n' + err).catch();
    }
  };
  
exports.help = {
    name: 'reverse',
  aliases: ["reverter"]
};