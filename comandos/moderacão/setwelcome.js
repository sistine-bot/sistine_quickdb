const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  
  var canalb = await db.get(`canalb_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canalb === null) canalb = `Nenhum canal definido!`; 
  
  if (isNaN(args.join(" "))) return message.channel.send('<:dokyerro:700492899833479249> » Isto não e um id')
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permisão de: `ADIMINISTRADOR` para utilizar este comando.")
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} [id do canal]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Adiministrador\``, false)
                .setColor('2f3136'));
        }

    // puxando o membro que iremos enviar
    var text = args.slice(0).join(' ')
    
    console.log(`canal de bem vindo setado com sucesso: <{text}>no servidor: ${message.guild.name} id: ${message.guild.id}`)
    doky.channels.cache.get('705126526194024510').send(`canal de bem vindo setado com sucesso: <#${text}> no servidor: ${message.guild.name} id: ${message.guild.id}`)
    
    message.channel.send('<:dokycerto:700492893651075112> » canal de bem vindo setado com sucesso:\n'+`<#${text}>`) 
    db.set(`canalb_${message.guild.id}`, args.slice(0).join(' '))
}

exports.help = {
    name: 'setwelcome',
  aliases: ["welcomeset"]
}