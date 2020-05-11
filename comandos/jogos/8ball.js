
const Discord = require("discord.js"); //exporta a npm discord.js
const config = require('../../config.json')

//exporta o comando para a index
exports.run = async (doky, message, args) => {
  
    if (!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} pergunta` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhuma\``, false)
                .setColor('2f3136'));
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
    .setColor("#AA9900")
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