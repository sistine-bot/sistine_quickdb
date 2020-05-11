const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  
  try {
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
    
      const str = args.join(' ');
      let msg = await message.reply(str.split('').reverse().join(''));
    } catch (err) {
      message.channel.send('<:dokyerro:700492899833479249> » Aconteceu um erro!\n' + err).catch();
    }
  };
  
exports.help = {
    name: 'reverse',
  aliases: ["reverter"]
};