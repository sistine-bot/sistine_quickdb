const Discord = require('discord.js');
const db = require('quick.db');
const { prefix } = require('../../config.json')

exports.run = async (client, message, args) => { // setando a base
  let memberor = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
  
  //canal de bem vindo
  let canalb = await db.get(`canalb_${message.guild.id}`)
  if (canalb === null) canalb = '`Nenhum canal definido!`'; 
  if (canalb === 0) canalb = '`Nenhum canal definido!`'; 
  
  let lbrole = await db.get(`lbrole_${message.guild.id}`)
  if (lbrole === null) lbrole = '`Nenhum cargo definido`';
  if (lbrole === 0) lbrole = '`Nenhum cargo definido`';
  
  let autorole = lbrole;
  
  //canal de leave member
  let canall = await db.get(`canall_${message.guild.id}`)
  if (canall === null) canall = '`Nenhum canal definido!`';
  if (canall === 0) canall = '`Nenhum canal definido!`'; 
  
  let canalstatus = await db.get(`canals_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canalstatus === null) canalstatus = '`Nenhum canal definido!`';
  if (canalstatus === 0) canalstatus = '`Nenhum canal definido!`';
  
  let canalnovidades = await db.get(`canalnovi_${message.guild.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
  if (canalnovidades === null) canalnovidades = '`Nenhum canal definido!`';
  if (canalnovidades === 0) canalnovidades = '`Nenhum canal definido!`';
  
  //******************************************************
  
  let cnllmsg = await db.get(`canallmsg_${message.guild.id}`)
  if (cnllmsg === null) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
  if (cnllmsg === 0) cnllmsg = `O usuario **{member}**, saiu do servidor,Tomara que ele volte algum dia.`;
  
  let cnlbmsg = await db.get(`canalbmsg_${message.guild.id}`)
  if (cnlbmsg === null) cnlbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  if (cnlbmsg === 0) cnlbmsg = `**{member}**, Seja muito bem vindo(a) ao servidor: {serveridor}`;
  
  let prunchannel = db.get(`prunchannel_${message.guild.id}`)
  if (prunchannel === null) prunchannel = '`Nenhum canal definido!`';
  if (prunchannel === 0) prunchannel = '`Nenhum canal definido!`';
  
  let envlog = db.get(`envlog_${message.guild.id}`)
  if (envlog === null) envlog = '`Nenhum canal definido!`';
  if (envlog === 0) envlog = '`Nenhum canal definido!`';
  
  function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }
    //${message.guild.memberCount}
  
  let embed = new Discord.MessageEmbed()
        .setTitle(`**Minha lista de Menus**`)
        .setColor("#4287f5")
  .addField(`<:doky1:701544373204025454> **»** \`Bem Vindo\``, `Mensagem quando alguém entra no servidor`, false)
  .addField(`<:doky2:701544339167379517> **»** \`Leave Member\``, `Mensagens quando alguém sai do servidor`, false)
  .addField(`<:doky3:701544370305761281> **»** \`Novidades\``, `Novidades da gizelle`, false)
  .addField(`<:doky4:701544361229287696> **»** \`Status\``, `Status da gizelle`, false)
  .addField(`<:doky5:701544355755851906> **»** \`Canal de punições\``, `Envia as mensagens de punições,Kick,ban,warn`, false)
  .addField(`<:doky6:701544349590224937> **»** \`Registro de Mensagens\``, `Envia as mensagens apagadas,Editadas`, false)
  .setThumbnail('https://cdn.discordapp.com/emojis/710324162916384788.png?v=1')

    message.channel.send({embed}).then(msg => { // definindo a função 'then' como 'msg'

msg.react('701544373204025454').then(() => msg.react('701544339167379517')).then(() => msg.react('701544370305761281')).then(() => msg.react('701544361229287696')).then(() => msg.react('701544355755851906')).then(() => msg.react('701544349590224937'))

    const filter = (reaction, user) => { // Criando um filtro para quem clicou no emoji
      return ['701544373204025454', '701544339167379517', '701544370305761281', '701544361229287696', '703003202257158174', '701544355755851906', '701544349590224937'].includes(reaction.emoji.id) && user.id === message.author.id;
    };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']}) // retornnando com as reações
      .then(collected => { // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.id === '701544373204025454') {
          
          const embed1 = new Discord.MessageEmbed()
          .setDescription(`
**<a:giwelcome:709571675363999755> » Canal de Bem-Vindo
<:gichannel:710274224849158184> » Canal neste servidor: <#${canalb}>
<:giarroba:707361585588600872> » Cargo automatico: <@&${autorole}>**

\`\`\`
${prefix}setwelcome <#canal>
${prefix}setwelcome reset

${prefix}welcomemensagem mensagem
\`\`\`

**Mensagem neste servidor**
\`\`\`markdown
# ${cnlbmsg}
\`\`\`
`)
  .setColor('#4287f5')
  .setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
          msg.delete()
          msg.channel.send(embed1)
        
        }

    
      if (reaction.emoji.id === '701544339167379517') {
          
          const embed1 = new Discord.MessageEmbed()
          .setDescription(`
**<a:giblobleave:709599854309015624> » Canal de Leave member
<:gichannel:710274224849158184> » Canal neste servidor: <#${canall}>**

\`\`\`
${prefix}setleave <#canal>
${prefix}setleave reset

${prefix}leavemensagem mensagem
\`\`\`

**Mensagem neste servidor**
\`\`\`markdown
# ${cnllmsg}
\`\`\`
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#4287f5')

           msg.delete()
           msg.channel.send(embed1);
        }
    
    
    if (reaction.emoji.id === '701544370305761281') {
      
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`
** » Registro de Mensagens
<:gichannel:710274224849158184> » Canal neste servidor: <#\`Desativado\`>**

**Em desenvolvimento**
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#4287f5')

           msg.delete()
           msg.channel.send(embed1);
    }
    
    
    if (reaction.emoji.id === '701544361229287696') {
      
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`
** » Canal de Status
<:gichannel:710274224849158184> » Canal neste servidor: <#${canalstatus}>**

\`\`\`
${prefix}setstatus off
${prefix}setstatus [id do canal]
\`\`\`
`)
.setFooter(`Para obter qualquer outra informação ${prefix}ajuda`)
.setColor('#4287f5')

           msg.delete()
           msg.channel.send(embed1);
    }
    
    if (reaction.emoji.id === '701544355755851906') {
      const embedst = new Discord.MessageEmbed()
      .setDescription(`
**<:staff:711807873625227292>» Canal de punições
<:gichannel:710274224849158184> » Canal neste servidor: <#\`${prunchannel}\`>**

\`\`\`
${prefix}setprun reset
${prefix}setprun [id do canal]
\`\`\`
`)
      .setColor('#4287f5')
      msg.delete()
      msg.channel.send(embedst);
    }
    
    if (reaction.emoji.id === '701544349590224937') {
      const embednov = new Discord.MessageEmbed()
      .setDescription(`
** » Canal de Novidades
<:gichannel:710274224849158184> » Canal neste servidor: <#${canalnovidades}>**

\`\`\`
${prefix}setnovidade reset
${prefix}setnovidades [id do canal]
\`\`\`
`)
      .setColor('#4287f5')
      msg.delete()
      msg.channel.send(embednov);
    }
})
})
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "menu",
  aliases: ["system"]
}