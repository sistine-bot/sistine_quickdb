const Discord = require('discord.js');
const db = require('quick.db');

module.exports = async (client, message) =>{
    let member = message.user.username;
    
    let canalb = await db.get(`canalb_${message.guild.id}`)
    if (canalb === null) canalb = `Nenhum canal definido!`; 
  
    let canal = client.channels.cache.get(canalb)
    if (!canal) return;
    
  let mensagem = await db.get(`canalbmsg_${message.guild.id}`)
  if (mensagem === null) mensagem = `**${message.user.username}**, Seja muito bem vindo(a) ao servidor: ${message.guild.name}`;
  if (mensagem === 0) mensagem = `**${message.user.username}**, Seja muito bem vindo(a) ao servidor: ${message.guild.name}`;
    
  let lbrole = await db.get(`lbrole_${message.guild.id}`)
  if (lbrole === null) lbrole = '`Nenhum cargo definido`'
  if (lbrole === 0) lbrole = '`Nenhum cargo definido`'
  
  function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }
  
  let membro = mensagem.replace('{member}', message.user.username)
  let servidor = membro.replace('{servidor}', message.guild.name)
  let user = servidor.replace('{usuarios}', message.guild.memberCount)
  
    let embed = new Discord.MessageEmbed()

    //.setTitle(`<a:giwelcome:709571675363999755> Seja Bem-Vindo(a) <a:giwelcome:709571675363999755>`)
    .setDescription(user)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor('#4287f5')
    
    const logembed = new Discord.MessageEmbed()
    .setDescription(`Usuario: **${member}#${message.user.discriminator}** entrou no servidor: ${message.guild.name}\n\nid do servidor: ${message.guild.id}`)
    .setThumbnail(message.user.displayAvatarURL())
    .setColor(`#00ff2f`);
  
    client.channels.cache.get('705126526194024510').send(logembed)
  
    console.log(`Usuario: ${member}#${message.user.discriminator} entrou no servidor: ${message.guild.name} id: ${message.guild.id}`)
    //canal.send(`${member}#${message.user.discriminator}`, embed)
  canal.send(`<@${message.user.id}>`, embed)
}