const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../../config.json');

exports.run = (client, message, args) => { // setando a base
  
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
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
        .setTitle(`**Dashboard - ${message.guild.name}**`)
        .setColor("#4287f5")
        .setDescription(`
Deseja aprender a configurar meus sistemas?

Clique em um emoji de acordo com sua duvida

<a:gientrou:713228793958891582> › <:gi1:701544373204025454> › Welcome

<a:gisaiu:709599854309015624> › <:gi2:701544339167379517> › Exit member

<:staff:711807873625227292> › <:gi3:701544370305761281> › Canal de punições

<:space_scroll:712784415037849722> › <:gi4:701544361229287696> › Registro de Mensagens
`)
    .setThumbnail('https://cdn.discordapp.com/emojis/710324162916384788.png?v=1')
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
          .setTitle("**<a:gientrou:713228793958891582> » Welcome**")
          .setDescription(`
**Para configurar meu sistema de welcome siga a ordem abaixo**


**Canal que será enviado a mensagem a mensagem**
\`\`\`markdown
# ${prefixos}welcome channel [id]
\`\`\`

**Mensagem modificada que será enviada quando usuario entrar**
\`\`\`markdown
# ${prefixos}welcome mensagem [mensagem]

# Para saber as variaveis utilize: ${prefixos}welcome help
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}welcome reset
\`\`\`
          `)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        exit.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<a:gisaiu:709599854309015624> » Leave Member")
                .setDescription(`
**Para configurar meu sistema de Exit member siga a ordem abaixo**


**Canal que será enviado a mensagem**
\`\`\`markdown
# ${prefixos}exitchannel [id do canal]
\`\`\`

**Mensagem modificada que será enviada quando usuario sair**
\`\`\`markdown
# ${prefixos}exitmensagem [mensagem]

# Para saber as variaveis utilize: ${prefixos}exitmensagem help
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}exitchannel reset
\`\`\`
`)
          .setColor("#4287f5")
            msg.edit(embed);
        })
                punições.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                  .setTitle("<:staff:711807873625227292> » Canal de punições")
                  .setDescription(`
**Para configurar meu sistema de Punições siga a ordem abaixo**


**Canal que será enviado a mensagem**
\`\`\`markdown
# ${prefixos}prunchannel [id do canal]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}prunchannel reset
\`\`\`
`)
              .setColor("#4287f5")

            msg.edit(embed);
        })
      
        regis.on('collect', r2 => {
          let logchannel = db.get(`envlog_${message.guild.id}`);
          if (logchannel === null) logchannel = '`Nenhum canal definido`';
          
            embed = new Discord.MessageEmbed()
                .setTitle("<:space_scroll:712784415037849722> » Registro de Mensagens")
                .setDescription(`
**Event Log Dashboard**
**<:gichannel:710274224849158184> » Canal neste servidor: <#${logchannel}>**

**Canal que será enviado as Mensagens**
\`\`\`markdown
# ${prefixos}log [id do canal]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}log reset
\`\`\`
`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
     
        voltar.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Dashboard - ${message.guild.name}**`)
            .setColor("#4287f5")
            .setDescription(`
Deseja aprender a configurar meus sistemas?

Clique em um emoji de acordo com sua duvida

<a:gientrou:713228793958891582> › <:gi1:701544373204025454> › Welcome

<a:gisaiu:709599854309015624> › <:gi2:701544339167379517> › Exit member

<:staff:711807873625227292> › <:gi3:701544370305761281> › Canal de punições

<:space_scroll:712784415037849722> › <:gi4:701544361229287696> › Registro de Mensagens
`)
          .setThumbnail('https://cdn.discordapp.com/emojis/710324162916384788.png?v=1')
msg.edit(embed);  
        });
    })
  }
)} else {
      const embede = new Discord.MessageEmbed()
      .setDescription(`**Dashboard - ${message.guild.name}**
**Clique em uma reação de acordo com sua escolha**

<a:gientrou:713228793958891582> › <:gi1:701544373204025454> › Welcome

<a:gisaiu:709599854309015624> › <:gi2:701544339167379517> › Exit member

<:staff:711807873625227292> › <:gi3:701544370305761281> › Canal de punições

<:space_scroll:712784415037849722> › <:gi4:701544361229287696> › Registro de Mensagens
`)
      .setThumbnail('https://cdn.discordapp.com/emojis/710324162916384788.png?v=1')
      .setColor("#4287f5")
      message.channel.send(embede).then(msg => { // evento para reagir a mensagem
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
          
          let canalbmsg = db.get(`canalbmsg_${message.guild.id}`)
          if (canalbmsg === null) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
          if (canalbmsg === 0) canalbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
          
          //canal de bem vindo
          let canalb = db.get(`canalb_${message.guild.id}`)
          if (canalb === null) canalb = '`Nenhum canal definido!`'; 
          if (canalb === 0) canalb = '`Nenhum canal definido!`'; 
          
          const  embed = new Discord.MessageEmbed()
          .setTitle("**<a:gientrou:713228793958891582> » Welcome**")
          .setDescription(`
**Welcome Dashboard**
**<:gichannel:710274224849158184> » Canal neste servidor: <#${canalb}>**

**Mensagem modificada que será enviada quando usuario entrar**
\`\`\`ini
[ ${canalbmsg} ]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}welcome reset
\`\`\`
`)
          .setFooter(`Para saber as variaveis, ou caso tenha alguma duvida utilize: ${prefixos}welcome help`)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        exit.on('collect', r2 => {
          let canall = db.get(`canall_${message.guild.id}`)
          if (canall === null) canall = '`Nenhum canal definido!`';
          if (canall === 0) canall = '`Nenhum canal definido!`'; 
          
          let cnllmsg = db.get(`canallmsg_${message.guild.id}`)
          if (cnllmsg === null) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
          if (cnllmsg === 0) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
          
           const embed = new Discord.MessageEmbed()
                .setTitle("<a:gisaiu:709599854309015624> » Leave Member")
                .setDescription(`
**Leave member Dashboard**
**<:gichannel:710274224849158184> » Canal neste servidor: <#${canall}>**

**Mensagem modificada que será enviada quando usuario entrar**
\`\`\`ini
[ ${cnllmsg} ]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}welcome reset
\`\`\`
`)
           .setFooter(`Para saber as variaveis, ou caso tenha alguma duvida utilize: ${prefixos}exit help`)    
           .setColor("#4287f5")
            msg.edit(embed);
        })
                punições.on('collect', r2 => {
                  let prunchannel = db.get(`prunchannel_${message.author.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
                  if (prunchannel === null) prunchannel = '`Nenhum canal definido!`';
                  if (prunchannel === 0) prunchannel = '`Nenhum canal definido!`';
                  
           const embed = new Discord.MessageEmbed()
                  .setTitle("<:staff:711807873625227292> » Canal de punições")
                  .setDescription(`
**Leave member Dashboard**
**<:gichannel:710274224849158184> » Canal neste servidor: <#${prunchannel}>**

**Canal que será enviado a mensagem**
\`\`\`markdown
# ${prefixos}prunchannel [id do canal]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}prunchannel reset
\`\`\`
`)
           .setFooter(`Para saber as variaveis, ou caso tenha alguma duvida utilize: ${prefixos}dashboard help`)
           .setColor("#4287f5")
            msg.edit(embed);
        })
      
        regis.on('collect', r2 => {
          let logchannel = db.get(`envlog_${message.guild.id}`);
          if (logchannel === null) logchannel = '`Nenhum canal definido`';
          
            const embed = new Discord.MessageEmbed()
                .setTitle("<:space_scroll:712784415037849722> » Registro de Mensagens")
                .setDescription(`
**Event Log Dashboard**
**<:gichannel:710274224849158184> » Canal neste servidor: <#${logchannel}>**

**Canal que será enviado as Mensagens**
\`\`\`markdown
# ${prefixos}log [id do canal]
\`\`\`

**Caso queira resetar o canal**
\`\`\`markdown
# ${prefixos}log reset
\`\`\`
`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
     
        voltar.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
            //.setTitle(`**Dashboard - ${message.guild.name}**`)
            .setColor("#4287f5")
            .setDescription(`**Dashboard - ${message.guild.name}**
**Clique em uma reação de acordo com sua escolha**


<a:gientrou:713228793958891582> › <:gi1:701544373204025454> › Welcome

<a:gisaiu:709599854309015624> › <:gi2:701544339167379517> › Exit member

<:staff:711807873625227292> › <:gi3:701544370305761281> › Canal de punições

<:space_scroll:712784415037849722> › <:gi4:701544361229287696> › Registro de Mensagens
`)
            .setThumbnail('https://cdn.discordapp.com/emojis/710324162916384788.png?v=1')
msg.edit(embed);  
        });
    })
})
    }
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "dashboard",
  aliases: ['configurar']
}