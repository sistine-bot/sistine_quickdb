
const Discord = require("discord.js");
const config = require('../../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} pergunta` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhuma\``, false)
                .setColor('4287f5'));
        }
  
  //lista das respostas que o bot ira responder
    let replies = [
      'Talvez.',
	    'Certamente não.',
	    'Acredito que sim.',
	    'Nem nos seus sonhos mais loucos.',
    	'Há uma boa chance.',
	    'Muito provável.',
    	'Acho que sim.',
    	'Espero que não.',
    	'Acredito que sim.',
    	'Nunca!',
	    'Desculpe, talvez sim.',
    	'Claro que sim.',
    	'Claro para o não.',
    	'O futuro é sombrio.',
	    'O futuro é incerto.',
	    'Eu prefiro não falar.',
    	'Quem se importa?',
    	'Possivelmente.',
    	'Nunca, nunca, nunca.',
    	'Há uma pequena chance.',
    	'Sim!',
    	'Não',
    	'Existe uma alta probabilidade.',
    	'Que diferença isso faz?',
    	'Não é problema meu.',
      'Pergunte a outra pessoa.'
    ];
//isto vai fazer
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    
  //cria uma embed
    let embed = new Discord.MessageEmbed()
    //titulo da embed
    .setTitle("🧙 Magic 8Ball!")
    //cor do embed
    .setColor("#4287f5")
    //cria um field com que diz a pergunta
    .addField("Pergunta:", question)
    //cria um field que diz as respostas
    .addField("Resposta:", replies[result])
    //envia a embed
    message.channel.send({embed});
}
//exporta a ajuda quando o usuario mandar prefix + name
exports.help = {
    name: "8ball",
    aliases: ["eightball"]
} 