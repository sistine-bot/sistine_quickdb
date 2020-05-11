const Discord = require('discord.js')
const config = require('../../config.json')

exports.run = async (doky, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = args[0];
	var reminder = args.splice(1).join(' ');
  
  if (!time || !reminder) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} 10[s/m/d/h] mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }

	// This will not work if the bot is restarted or stopped

	time = await time.toString();

	if (time.indexOf('s') !== -1) { // Seconds
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { // Minutes
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { // Hours
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { // Days
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	}	else {
		return message.reply('O tempo deve ser númerico [s/m/h/d]');
	}

	message.reply(`<:dokycerto:700492893651075112> » Eu vou lembrar você de: \`${reminder}\` daqui \`${time}\``);

	setTimeout(function () {
		message.reply(`<:dokynotify:700515853128695839> » Você me pediu para te lembrar de: \`${reminder}\` `);
	}, parseInt(timems));

};

exports.help = {
    name: 'lembrete',
  aliases: ["lembrar"]
};