const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require("moment");

exports.run = (client, message, args) => { // setando a base

    let region = { // para deixar mais bacana o codigo, iremos configurar o nome dos locais
        "brazil": "🇧🇷•Brasil",
        "eu-central": "🇪🇺•Europa Central",
        "singapore": "🇸🇬•Singapura",
        "us-central": "🇺🇸•U.S Central",
        "sydney": "🇦🇺•Sydney",
        "us-east": "🇺🇸•U.S Leste",
        "us-south": "🇺🇸•U.S Sul",
        "us-west": "🇺🇸•U.S Oeste",
        "eu-west": "🇪🇺•Europa Ocidental",
        "vip-us-east": "🇺🇸•VIP U.S Lest",
        "london": "🇬🇧•London",
        "amsterdam": "🇳🇱•Amsterdam",
        "hongkong": "🇭🇰•Hong Kong"
    };

    function checkBots(guild) { // abrindo uma function, checando a quantia de bots do servidor
        let botCount = 0; // caso tenha zero bots, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os bots
            if (member.user.bot) botCount++; // caso o membro seja um bot, iremos adicionar
        });
        return botCount;
    }
    
    function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.cache.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }


    // agora, vamos filtrar um codigo, identificando a presence dos membros
    let online = message.guild.members.cache.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.cache.filter(a => a.presence.status == "offline").size;
    // vamos criar uma function, definindo quantos emojis possui no servidor
    let sicon = message.guild.iconURL();
  
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}`, message.guild.iconURL())
    .setColor('4287f5')
    .setThumbnail(sicon)
    .addField(`**<:gitag:710185903024504963>•Nome**`, `${message.guild.name}`,true)
    .addField(`**<:gipermis:710186900224344155>•Dono**`, `${message.guild.owner}`, true)
    .addField(`**<:giid:710190138826948668>•Id**`, `${message.guild.id}`, true)
    .addField(`**<:gicalendario:710208232928575581>•Criado em**`, `\`${moment(message.guild.createdAt).format('LLL')}\``, true)
    .addField(`**<:giworld:710182737855643678>•Região**`, `\`${region[message.guild.region]}\``, false)
    .addField(`**<:giuserinfo:710185421279330304>•Membros** ${message.guild.memberCount}`, `<:giprofile:710193570941763614> » **Humanos:** ${checkMembers(message.guild)}\n<:bot:701231829839249493> » **Robôs:** ${checkBots(message.guild)}\n<:online:695708217346621550> » **Disponiveis:** ${online}\n<:ocupado:695708215127572561> » **Ocupados:** ${ocupado}\n<:ausente:695708216318885899> » **Ausentes:** ${ausente}\n<:offilne:695708217174392884> » **Offlines:** ${offline}`,true)
    .addField(`**<:gifolders:710194436591714344>•Canais**`,  `<:gitext:710181600595410985> » **Texto:** ${message.guild.channels.cache.filter(chan => chan.type === 'text').size}\n<:dokyvoice:701234880620527667> » **Voz:** ${message.guild.channels.cache.filter(chan => chan.type === 'voice').size}`, true)
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'serverinfo',
  aliases: ["infoserver"]
}
