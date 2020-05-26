const Discord = require('discord.js'); //exporta a npm discord.js
const superagent = require("superagent"); //exporta a npm superagent
const config = require('../../config.json')
const db = require('quick.db')

//exporta o comando para o index
exports.run = async (client, message, args) => {  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    //Se não mencionar um usuario ele ira responder isto
    if (!member) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhuma\``, false)
                .setColor('4287f5'));
        }
  
    //se o usuario se mencionar ele irá responder isto
    if (member.id == message.author.id) return message.reply("<:gierro:710197544751202414> » você não pode dar um abraço em si mesmo.")
    
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