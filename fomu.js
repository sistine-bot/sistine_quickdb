const Discord = require("discord.js");
module.exports.run = async(bot, message) => {

	message.channel.send(`${message.author}, enviei uma mensagem para você no privado.`).then(msg => msg.delete(9000));
	let member = message.author;
	message.delete().catch();
	await message.author.createDM();

	let embed = new Discord.RichEmbed()
	.setDescription(`**📒 Formulário | Ajudante - UniverseMC** \n \n◾ A UniverseMC está a procura de novos integrantes para a equipe, caso fique interessado, basta responder essas seguintes questões:\n \n▫| digita ok pra continuar`)
	message.author.send(embed)

	var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
	tazer.on('collect', r => {
		let nome = r.content;
		let embed2 = new Discord.RichEmbed()
		.setDescription(`▫ | Você atualmente faz parte da equipe de algum servidor?`)
		message.author.send(embed2)

		var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
		tazer1.on('collect', r => {
			let serve = r.content;
			let embed3 = new Discord.RichEmbed()
			.setDescription(`Você já fez parte da equipe de algum servidor? Se sim liste-os abaixo e se possivel, também fale sobre o cargo ocupado na rede.`)
			message.author.send(embed3)

			var tazer2 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
			 tazer2.on('collect', r => {
			 	let online = r.content;
			 	let embed4 = new Discord.RichEmbed()
			 	.setDescription(`Você possuí microfone disponível para uso?`)
			 	message.author.send(embed4)

			 	var tazer3 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
			 	tazer3.on('collect', r => {
			 		let clasi = r.content;
			 		let embed5 = new Discord.RichEmbed()
			 		.setDescription(`Qual é seu principal objetivo ao tentar entrar à nossa equipe?`)
			 		message.author.send(embed5)

			 		var tazer4 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
			 		tazer4.on('collect', r => {
			 			let fac = r.content;
			 			let embed6 = new Discord.RichEmbed()
			 			.setDescription(`Você estuda, trabalha ou faz algum curso? Se sim, diga seus horários.`)
			 			message.author.send(embed6)

			 			var tazer5 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
			 			tazer5.on('collect', r => {
			 				let fac = r.content;
			 				let embed7 = new Discord.RichEmbed()
			 				.setDescription("*Para enviar seu formulário digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
			 				message.author.send(embed7)

			 				var confirm = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
			 				confirm.on('collect', r => {
			 					if (r.content.toLowerCase() == "confirmar") {
			 						 message.author.send({embed: {description: "📌 Seu formulário foi `enviado`. Aguarde ele ser analizado."}});
			 						 let servericon = message.author.displayAvatarURL;
			 						 const form = new Discord.RichEmbed()
			 						 .setTitle('Formulário | teste')
			 						 .addField("Author", message.author.tag)
			 						 .addField("Você atualmente faz parte de algum servidor?", nome)
			 						 .addField("Você já fez parte da equipe de algum servidor? Se sim liste-os abaixo e se possivel, também fale sobre o cargo ocupado na rede.", serve)
			 						 .addField("Você possuí microfone disponível para uso?", online)
			 						 .addField("Qual é seu principal objetivo ao tentar entrar à nossa equipe?", clasi)
			 						 .addField("Você estuda, trabalha ou faz algum curso? Se sim, diga seus horários.", fac)
			 						 .setFooter(`Formulário | UniverseMC`)
			 						 .setThumbnail(servericon)
			 						 .setColor('#000000')
			 						 message.channel.send(form).then(async msg => {
			 						 	await msg.react("✔")
			 						 	await msg.react("❌")
			 						 	const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✔', '❌') && (u.id !== bot.user.id && u.id === message.author.id))
			 						 	 collector.on("collect", r => {
			 						 	 	switch(r.emoji.name) {
			 						 	 		case '✔':
			 						 	 		message.author.createDM().then(dm => dm.send("vc foi aprovaado"))
			 						 	 		break;

			 						 	 		case '❌':
			 						 	 		message.author.createDM().then(dm => dm.send("vc foi reprovado"))
			 						 	 		break;
			 						 	 	}
			 						 	 })
			 						 })
			 					}
			 					if (r.content.toLowerCase() == "cancelar") {
			 						message.author.send({embed: {description: "cancelado."}});
			 					}
			 				})
			 			})
			 		})
			 	})
			 })
		})
	})
}