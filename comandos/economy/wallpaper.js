const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
  let member = message.mentions.users.first() || message.author;
  
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} [link]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`VIP\``, false)
                .setColor('4287f5'));
        }
  
  const embidi = new Discord.MessageEmbed()
  .setDescription(`Você não possui VIP, Uitlize: ${config.prefix}`+'loja')
  .setColor(`#4287f5`);
  
  let vip = await db.get(`vip_${message.author.id}`)
  if (vip === null) return message.channel.send(embidi);
  if (vip === 0) return message.channel.send(embidi);
  
  let text = args.slice(0).join(' ')
    
    const embed = new Discord.MessageEmbed()
    .setDescription('<:gicerto:710198069068562473> » Novo wallpaper setado com sucesso:\n`'+`${text}`+'`'+`\n\nUtilize ${prefixos}perfil para visualizar a alteração`)
    .setImage(`${text}`)
    .setColor(`#4287f5`);
  
    message.channel.send(embed) 
    db.set(`foto_${member.id}`, args.slice(0).join(' ')) // adicionando na database, a quantia
}

exports.help = {
    name: 'wallpaper',
  aliases: ["background"]
}