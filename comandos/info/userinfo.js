const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment"); // puxando o NPM moment (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o local do moment, no nosso caso, pt-BR

const status = { 
    online: "<:online:695708217346621550> `online`", 
    idle: "<:ausente:695708216318885899> `ausente`",       
    dnd: "<:ocupado:695708215127572561> `ocupado`", 
    offline: "<:offilne:695708217174392884> `offline`" 
};

exports.run = (client, message, args) => { // setando a base

  let permissions = [];
  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
   // agora, uma 'tabela' (sim, denovo kk), com todas as permissoes do Discord
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulsar membros");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir membros");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar mensagens");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar canais");
    }
  
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar apelidos");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar cargos");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar emojis");
    }

    if(permissions.length == 0){
        permissions.push("Nenhuma permissão");
    }
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
    //.setColor("#2f3136")
    .setColor(`${message.member.displayHexColor}`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField("**<:giprofile:710193333732900945>•Apelido neste servidor**", `\`${member.nickname !== null ? `${member.nickname}` : 'Nenhum apelido'}\``, true)
    .addField("**<:gitag:710185903024504963>•User tag**", `\`${member.user.username}#${member.user.discriminator}\``, true)
    .addField("**<:gistatus:710209679095234580>•Status**",`${status[member.user.presence.status]}`, true)
    .addField('**<:giid:710190138826948668>•Id**',`\`${member.id}\``,false)
    .addField("**<:giuserinfo:710185421279330304>•User Status**", `**<:gigame:710186288493363280>•Jogando**\n${member.user.presence.game ? `${member.user.presence.game.name}` : "Nenhum jogo detectado"}\n\n**<:gipermis:710186900224344155>•Permissões**\n${permissions.join(', ')}\n\n**<:gicalendario:710208232928575581>•Conta criada em**\n${moment(member.user.createdAt).format("LLL")}`,true)
    .addField(`<:gicargos:710187865329500232>•Cargos ${member.roles.cache.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(', ') || "Esse membro não possui cargos."}`, false)
    message.channel.send({embed})
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'userinfo',
  aliases: ["infouser"]
}
