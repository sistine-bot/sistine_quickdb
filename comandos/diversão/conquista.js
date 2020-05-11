const Discord = require('discord.js') // puxando a livraria 'discord.js'
const snekfetch = require('snekfetch'); // puxando o NPM snekfetch (instale utilizando: npm i snekfetch)
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base, com async
  let [title, contents] = args.join(" ").split("|"); // definindo um argumento
  if (!contents) [title, contents] = ["Conquista desbloqueada!", title]; // titulo da imagem
  let rnd = Math.floor((Math.random() * 39) + 1); // posicao da fonte

  // imagens aleatorias para aparecer no canto superior esquerdo
  if (args.join(" ").toLowerCase().includes("burn")) rnd = 38; 
  if (args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if (args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  
      if (!args.join(" ")) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} titulo|mensagem ou mensagem` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
  
  if (title.length > 24 || contents.length > 22) return message.reply("<:dokyerro:700492899833479249> » você inseriu mais de 22 caracteres."); // caso ele ultrapasse os caracteris
  // a imagem que vamos puxar, de um site random ai
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url).then(r => message.channel.send({files:[{attachment: r.body}]})); // finalizado! Setando a imagem com o texto que o membro escreveu
};

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'conquista',
  aliases: ["achievement"]
}
