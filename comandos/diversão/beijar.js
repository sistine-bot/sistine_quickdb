const Discord = require('discord.js'); //puxando a npm discord.js
const config = require('../../config.json')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    //if(!user) return message.channel.send("<a:dokyerro:698672337033232385> | Não encontrei o usuário mencionado."); //caso o bot não encontre o usuario mencionado
    if (!user) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:gierro:710197544751202414> » Uso incorreto do comando**")
                .setDescription("<:gipin:710194953028108338> › Tente usar ``" + `${prefixos}${this.help.name} @usuario` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('4287f5'));
        }
  
//lista de gifs
    let beijo = [
      'https://i.imgur.com/ckp4UGW.gif',
      'https://imgur.com/Jv7kwzy.gif',
      'https://imgur.com/mVkwmib.gif',
      'https://imgur.com/0eFPxAU.gif',
      'https://imgur.com/8JD3KAD.gif',
      'https://i.pinimg.com/originals/af/c3/00/afc30074164c97655ea37833fe1a86e2.gif',
      'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
      'https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
      'https://pa1.narvii.com/6560/6c22de43a76dcb6c0df4b1882037c5b4d14c460c_hq.gif',
      'https://i.pinimg.com/originals/7d/49/fa/7d49fa49476dda9b040541a83342ceac.gif',
      'https://i.pinimg.com/originals/72/70/e5/7270e5380cccb8190fd520046648322b.gif',
      'https://i.gifer.com/KKjZ.gif',
      'https://ptanime.com/wp-content/uploads/2017/07/Koi-to-uso-GIF3.gif',
      'https://i.pinimg.com/originals/d2/aa/aa/d2aaaa065a79d5fb9c9087a467e28469.gif',
      'https://data.whicdn.com/images/313892848/original.gif'
];
//cria um embed
let embed = new Discord.MessageEmbed()
//cor da embed
.setColor("RANDOM")
//mensagem que menciona os 2 usuarios
.setDescription(`😘 <@${message.author.id}> deu um beijo em: <@${user.id}>`)
//vai pegar um gif aleatorio da lista
.setImage(beijo[Math.floor(Math.random() * beijo.length)])
//coloca a hora que o comando foi enviado na embed
.setTimestamp()
//envia a embed criada
message.channel.send(embed)
}
// setando o nome do arquivo, seguido do prefix
exports.help = {
    name: 'beijar',
  aliases: ["kiss", "beijo"]
}