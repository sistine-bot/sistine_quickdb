const Discord = require('discord.js'); //exporta a npm discord.js
const superagent = require("superagent"); //exporta a npm superagent
const config = require('../../config.json')

//exporta o comando para o index
exports.run = async (doky, message, args) => {
  
    let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    //Se não mencionar um usuario ele ira responder isto
    if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhuma\``, false)
                .setColor('2f3136'));
        }
  
    //se o usuario se mencionar ele irá responder isto
    if (member.id == message.author.id) return message.reply("<:dokyerro:700492899833479249> » você não pode dar um abraço em si mesmo.")
    
    const {
        body
    } = await superagent//api com os gifs randons automatico
        .get(`https://nekos.life/api/v2/img/hug`);
    //cria um embed
    let Embed = new Discord.MessageEmbed()
    //descrição da embed onde ele dirá o nome do autor e o nome do mencionado
    .setDescription(`💙 <@${message.author.id}> deu um abraço em <@${member.id}>`)
    //o gif random do api ficara aqui
    .setImage(body.url)
    //cor do embed
    .setColor("#05a8ff")
    //coloca a hora na embed
    .setTimestamp()
    //retorna a embed
    message.channel.send(Embed)
}
//exporta a ajuda quando o usuario mandar prefix + name
exports.help = {
    name: "hug",
    aliases: ["abraço", "abração"]
}