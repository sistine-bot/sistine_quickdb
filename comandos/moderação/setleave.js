const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)
const config = require('../../config.json')

exports.run = async (doky, message, args) => {
  let member = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
    
  let canall = await db.get(`canall_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canall === null) canall = '`Nenhum canal definido!`';
  if (canall === 0) canall = '`Nenhum canal definido!`';
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("<:dokyerro:700492899833479249> » Você precisa da permisão de: `ADIMINISTRADOR` para utilizar este comando.")
  
  
  
  if(message.content === 'off') {
      return message.channel.send(embed).then(msg => { // definindo a função 'then' como 'msg'
//<:dokycerto:700492893651075112> 
//<:dokyerro:700492899833479249> 
    msg.react('700492893651075112').then(() => msg.react('700492899833479249'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['700492893651075112', '700492899833479249'].includes(reaction.emoji.id) && user.id === message.author.id; // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
          
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();
      //cor rosa
      if (reaction.emoji.id === '700492893651075112') {
          msg.delete()
          message.channel.send('<:dokycerto:700492893651075112> » Setleave resetado com sucesso'); 
          db.set(`canall_${message.guild.id}`, 0)
        } 
      
        if (reaction.emoji.id === '700492899833479249') {
          msg.delete()
          message.channel.send('<:dokyerro:700492899833479249> » Comando cancelado com sucesso'); 
        
        } 
      })
    })
    }
  
  
  if (isNaN(args.join(" "))) return message.channel.send('<:dokyerro:700492899833479249> » Isto não e um id')
  
  if (!args[0]){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} [id do canal]` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Adiministrador\``, false)
                .setColor('2f3136'));
        }
  const embed = new Discord.MessageEmbed()
  .setDescription(`Você deseja desativar o setleave deste servidor?, Não será mais enviado as mensagens de quando um mebro sair`)
  
    // puxando o membro que iremos enviar
    let text = args.slice(0).join(' ')
    
    console.log(`canal de leave member setado com sucesso: <#${text}> no servidor: ${message.guild.name} id: ${message.guild.id}`)
    doky.channels.cache.get('705126526194024510').send(`canal de leave setado com sucesso: <#${text}> no servidor: ${message.guild.name} id: ${message.guild.id}`)
  
    message.channel.send('<:dokycerto:700492893651075112> » canal de leave member setado com sucesso:\n'+`<#${text}>`) 
    db.set(`canall_${message.guild.id}`, args.slice(0).join(' '))
}

exports.help = {
    name: 'setleave',
  aliases: ["leaveset"]
}