const Discord = require('discord.js');
const db = require('quick.db');
const { config , prefix } = require('../../config.json')

exports.run = (client, message, args) => { // setando a base
 //canal de bem vindo
  let canalb = db.get(`canalb_${message.guild.id}`)
  if (canalb === null) canalb = '`Nenhum canal definido!`'; 
  if (canalb === 0) canalb = '`Nenhum canal definido!`'; 
  
  let lrole = db.get(`lrole_${message.guild.id}`)
  if (lrole === null) lrole = '`Nenhum cargo definido`'
  if (lrole === 0) lrole = '`Nenhum cargo definido`'
  
  //canal de leave member
  let canall = db.get(`canall_${message.guild.id}`)
  if (canall === null) canall = '`Nenhum canal definido!`';
  if (canall === 0) canall = '`Nenhum canal definido!`'; 
  
  let canalstatus = db.get(`canals_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canalstatus === null) canalstatus = '`Nenhum canal definido!`';
  if (canalstatus === 0) canalstatus = '`Nenhum canal definido!`';
  
  let canalnovidades = db.get(`canalnovi_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canalnovidades === null) canalnovidades = '`Nenhum canal definido!`';
  if (canalnovidades === 0) canalnovidades = '`Nenhum canal definido!`';
  
  //******************************************************
  
  let cnllmsg = db.get(`canallmsg_${message.guild.id}`)
  if (cnllmsg === null) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
  if (cnllmsg === 0) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
  
  let cnlbmsg = db.get(`canalbmsg_${message.guild.id}`)
  if (cnlbmsg === null) cnlbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  if (cnlbmsg === 0) cnlbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  
  
  if (args[0] === 'help') {
   
  let memberor = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  
    let embed = new Discord.MessageEmbed()
        .setTitle(`**Central de configuração!**`)
        .setColor("#4287f5")
        .setDescription(`Deseja aprender a configurar meus sistemas?

Clique em um emoji de acordo com sua preferencia

<:gi1:701544373204025454> › Welcome

<:gi2:701544339167379517> › Exit member

<:gi3:701544370305761281> › Canal de punições

<:gi4:701544361229287696> › Registro de Mensagens
`)
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('701544373204025454').then(r => { //diversão
            msg.react('701544339167379517').then(r => { //Economia
            msg.react('701544370305761281').then(r => { //Info
            msg.react('701544361229287696').then(r => { //Jogos
              
            msg.react('702987160399380670').then(r => { // inicio
            
})
})
})
})
        // filtros de cada reação, para configurar a informação do autor
      const welcomefiltro = (reaction, user, ) => reaction.emoji.id === '701544373204025454' && user.id === message.author.id;
      const exitfiltro = (reaction, user, ) => reaction.emoji.id === '701544339167379517' && user.id === message.author.id;
      const punisfiltro = (reaction, user, ) => reaction.emoji.id === '701544370305761281' && user.id === message.author.id;
      const regisfiltro = (reaction, user, ) => reaction.emoji.id === '701544361229287696' && user.id === message.author.id;
      const BackFilter = (reaction, user, ) => reaction.emoji.id === '702987160399380670' && user.id === message.author.id;
        
      // coletores de cada reação, para ver confirmar tal membro 
      const welcome = msg.createReactionCollector(welcomefiltro);
      const exit = msg.createReactionCollector(exitfiltro);
      const punições = msg.createReactionCollector(punisfiltro);
      const regis = msg.createReactionCollector(regisfiltro);
      
      const voltar = msg.createReactionCollector(BackFilter);
 
        welcome.on('collect', r2 => {// criando um evento, caso o membro clique nessa reação, e todos são iguais!
          
            embed = new Discord.MessageEmbed()
          .setTitle("<:gifun:710211304974975047> » Diversão")
          .setDescription(`
**Para configurar meu sistema de welcome siga a ordem abaixo**


**Canal que será enviado a mensagem a mensagem**
\`\`\`markdown
# ${prefix}welcomechannel [id do canal]
\`\`\`

**Mensagem modificada que será enviada quando usuario entrar**
\`\`\`markdown
# ${prefix}welcomemensagem [mensagem]

# Para saber as variaveis utilize: ${prefix}welcomemensagem help
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefix}welcomechannel reset
\`\`\`
          `)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        exit.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gicoin:710207959216554131> » Economia")
                .setDescription(`
**Para configurar meu sistema de Exit member siga a ordem abaixo**


**Canal que será enviado a mensagem**
\`\`\`markdown
# ${prefix}exitchannel [id do canal]
\`\`\`

**Mensagem modificada que será enviada quando usuario sair**
\`\`\`markdown
# ${prefix}exitmensagem [mensagem]

# Para saber as variaveis utilize: ${prefix}exitmensagem help
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefix}exitchannel reset
\`\`\`
`)
                .setColor("#4287f5")
            msg.edit(embed);
        })
                punições.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                  .setTitle("<:giinfo:707735313325228062> » Info")
                  .setDescription(`
**Para configurar meu sistema de Punições siga a ordem abaixo**


**Canal que será enviado a mensagem**
\`\`\`markdown
# ${prefix}prunchannel [id do canal]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefix}prunchannel reset
\`\`\`
`)
              .setColor("#4287f5")

            msg.edit(embed);
        })
      
        regis.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gigame:710186288493363280> » Jogos")
                .setDescription(`
**Para configurar meu sistema de Registro de Mensagens siga a ordem abaixo**


**Canal que será enviado as Mensagens**
\`\`\`markdown
# ${prefix}exitchannel [id do canal]
\`\`\`

**Mensagem modificada que será enviada quando usuario sair**
\`\`\`markdown
# ${prefix}exitmensagem [mensagem]

# Para saber as variaveis utilize: ${prefix}exitmensagem help
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefix}exitchannel reset
\`\`\`
`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
     
        voltar.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Minha central de ajuda!**`)
            .setColor("#4287f5")
            .setDescription(`Deseja aprender a configurar meus sistemas?

Clique em um emoji de acordo com sua preferencia

<:gi1:701544373204025454> › Welcome

<:gi2:701544339167379517> › Exit member

<:gi3:701544370305761281> › Canal de punições

<:gi4:701544361229287696> › Registro de Mensagens
`)
msg.edit(embed);  
        });
    })
  }
)} else {
      const embede = new Discord.MessageEmbed()
      .setDescription(`**Você está na minha central de configuração
Clique em uma reação de acordo com sua escolha**
`)
      .setColor("#4287f5")
      message.channel.send(embede)
    }
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "configurar",
  aliases: []
}