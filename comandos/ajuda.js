const Discord = require('discord.js')
const config = require('../config.json')

exports.run = (client, message, args) => { // setando a base

// avisando sobre a embed de ajuda na DM
const embedd = new Discord.MessageEmbed()
.setTitle('Mensagem enviada')
.setDescription('<:gicerto:710198069068562473> » Verifique suas mensagens privadas.')
.setColor("#4287f5")
message.reply(embedd)

    let embed = new Discord.MessageEmbed()
        .setTitle(`**Minha central de ajuda!**`)
        .setColor("#4287f5")
        .setDescription('Para ter acesso a lista de comandos, reaja com algum emoji e receba as informações necessárias.\n\n\n<:gifun:710211304974975047> » `Diversão`\n<:gicoin:710207959216554131> » `Economia`\n<:giinfo:707735313325228062> » `Info`\n<:gigame:710186288493363280> » `Jogos`\n<:gimine:710210353253974066> » `Minecraft`\n<:gicargos:710187865329500232> » `Moderação`\n<:gisuporte:710192974163607582> » `Uteis` \n\n\n**Suporte**\n\nSe você encontrou algum bug envie utilizando [**'+`${config.prefix}`+'bug** <bug>]\nCaso prefirir,Entre em meu servidor de '+`[**Suporte**](https://discord.gg/9D9NAcq)`)
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('710211304974975047').then(r => { //diversão
            msg.react('710207959216554131').then(r => { //Economia
            msg.react('707735313325228062').then(r => { //Info
            msg.react('710186288493363280').then(r => { //Jogos
            msg.react('710210353253974066').then(r => { //Minecraft
            msg.react('710187865329500232').then(r => { //Moderação
            msg.react('710192974163607582').then(r => { //Uteis
            msg.react('702987160399380670').then(r => { // inicio
            
})
})
})
})
})
})
})
})
        // filtros de cada reação, para configurar a informação do autor
      const diversaofiltro = (reaction, user, ) => reaction.emoji.id === '710211304974975047' && user.id === message.author.id;
      const economiafiltro = (reaction, user, ) => reaction.emoji.id === '710207959216554131' && user.id === message.author.id;
      const infofiltro = (reaction, user, ) => reaction.emoji.id === '707735313325228062' && user.id === message.author.id;
      const jogosfiltro = (reaction, user, ) => reaction.emoji.id === '710186288493363280' && user.id === message.author.id;
      const minefiltro = (reaction, user, ) => reaction.emoji.id === '710210353253974066' && user.id === message.author.id;
      const moderacaofiltro = (reaction, user, ) => reaction.emoji.id === '710187865329500232' && user.id === message.author.id;
      const uteisfiltro = (reaction, user, ) => reaction.emoji.id === '710192974163607582' && user.id === message.author.id;
      
      const BackFilter = (reaction, user, ) => reaction.emoji.id === '702987160399380670' && user.id === message.author.id;
        
      // coletores de cada reação, para ver confirmar tal membro 
      const diversao = msg.createReactionCollector(diversaofiltro);
      const economia = msg.createReactionCollector(economiafiltro);
      const info = msg.createReactionCollector(infofiltro);
      const jogos = msg.createReactionCollector(jogosfiltro);
      const mine = msg.createReactionCollector(minefiltro);
      const moderacao = msg.createReactionCollector(moderacaofiltro);
      const uteis = msg.createReactionCollector(uteisfiltro);
      
      const Back = msg.createReactionCollector(BackFilter);
 
        diversao.on('collect', r2 => {// criando um evento, caso o membro clique nessa reação, e todos são iguais!
          
            embed = new Discord.MessageEmbed()
          .setTitle("<:gifun:710211304974975047> » Diversão")
          .setDescription(`
\`${config.prefix}abraço [@usuario]\` » De um abraço em algum usuario | hug, abração
\`${config.prefix}anime [nome]\` » Veja as informações de algum anime | nenhuma alternativa
\`${config.prefix}beijar [@usuario]\` » Beije algum usuario | kiss, beijo
\`${config.prefix}big-text [mensagem]\` » Deixe o text omais grande | textogrande
\`${config.prefix}biscoito [@usuario]\` » De um biscoito para algum usuario | cookie
\`${config.prefix}brigar [@usuario]\` » Brigue com algum usuario | fight, lutinha
\`${config.prefix}calc [2 + 2]\` » Faça algum calculo | calcular, calculo
\`${config.prefix}cat\` » Veja uma foto ou gif de um gatinho | gato
\`${config.prefix}crazytext [mensagem]\` » Deixe o texto todo aleatorio | textolouco
\`${config.prefix}dado\` » Veja em que numero o dado vai cair | slice
\`${config.prefix}dog\` » Veja um gif de um cachorrinho | cachorro
\`${config.prefix}flipcoin\` » Flipe uma moeda e veja se caira cara ou coroa | coinflip, cc
\`${config.prefix}fliptext [mensagem]\` » Deixe um texto de cabeça para baixo | flip, flipar
\`${config.prefix}lenny\` » veja um lenny face aleatorio | carinha, carinhas, randomlenny
\`${config.prefix}meme\` » Veja um meme aleatorio do reddit | memes
\`${config.prefix}number [3 409404]\` » Veja um numero aleatorio dentre 2 numeros | randomnumber, numero
\`${config.prefix}pat\` Faça um carinho em alguém | tapinha, carinho
\`${config.prefix}pregunta [mensagem]\` » Faça uma pergunta ao sabio BOT | thinking, what, perg
\`${config.prefix}piada\` » Veja uma piada aleatoria | piadinha
\`${config.prefix}reverse [mensagem]\` » reverta um texto | reverter
\`${config.prefix}roleta\` » Brinque de roleta russa | roletarussa
\`${config.prefix}sadcat\` » Veja uma foto ou gif de um gatinho triste | gatinho
\`${config.prefix}ascii [mensagem]\` » fale de uma forma diferente | nehuma alternativa
\`${config.prefix}space [mensagem]\` » Deixe um texto todo espaçado | espaço, lo-fi, lofi
\`${config.prefix}tapa [@usuario]\` » De um tapa em algum usuario | tapão, slap
\`${config.prefix}tiny [mensagem]\` » Deixe um texto todo pequeno | pequeno, textopequeno
          `)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        economia.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gicoin:710207959216554131> » Economia")
                .setDescription(`
\`${config.prefix}weekly\` » Pegue sua AstroCoin semanal | semanal
\`${config.prefix}daily\` » Pegue suas StarCoin's diaris | diario
\`${config.prefix}demissão\` » Se demita do seu trabalho | demissao
\`${config.prefix}depositar [all ou quantia]\` » Deposite seu dinheiro para não ser roubado | dep, deposit
\`${config.prefix}emprego\` » Escolha um emprego para poder trabalhar | trabalho, trabalhos, empregos
\`${config.prefix}loja\` » Compre itens para seu perfil | Nenhuma alternativa
\`${config.prefix}pagar\` » Envie uma quantia para algum usuario | pay, enviar
\`${config.prefix}perfil [@usuario]\` » Veja o perfil de algum usuario | profile
\`${config.prefix}sacar [all ou quantia]\` » Retire uma quantia de seu banco | retirar
\`${config.prefix}saldo [@usuario]\` » Veja o seu saldo ou de algum usuario | money, bal, balance
\`${config.prefix}bio [mensagem]\` » Coloque uma mensagem na sua biografia do perfil | bioset, setbio
\`${config.prefix}wallpaper [link]\` » Os VIP's podem colocar um wallpaper de graça | background
\`${config.prefix}vender\` » Venda algum item que você possui |  sell
\`${config.prefix}vip\` » Veja as vantagens de possuir vip | vip-info, info-vip
\`${config.prefix}vip-loja\` » Loja que vende itens vips | nenhuma alternativa
\`${config.prefix}trabalhar\` » trabalhe e ganhe suas StarCoin's | work, trabalho
`)
                .setColor("#4287f5")
            msg.edit(embed);
        })
                info.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                  .setTitle("<:giinfo:707735313325228062> » Info")
                  .setDescription(`
\`${config.prefix}about\` » Veja algumas das minhas informações | informações
\`${config.prefix}avatar [@usuario]\` » Veja o avatar de algum usuario | foto
\`${config.prefix}botinfo\` » Veja as principais informações do doky | infobot, dokyinfo, infodoky, info
\`${config.prefix}clima [RJ, SP]\` » Veja o clima de alguma cidade
\`${config.prefix}colorsearch ff0000\` » Veja uma cor em codigo rex amplificada | cor
\`${config.prefix}coronavirus [brazil, EUA]\` » Veja as informações do coronavirus | corona, coronga
\`${config.prefix}emoji :emoji:\` » Veja um emoji ambliado | bigemoji, emojigrande
\`${config.prefix}emojiinfo :emoji:\` » Veja as informações de um emoji | infoemoji
\`${config.prefix}emojis\` » Veja todos os emojis do servidor | Nehuma Alternativa
\`${config.prefix}hostinfo\` » Veja todas as informações da minha host | host, infohost
\`${config.prefix}links\` » Veja o links principais | link
\`${config.prefix}ontime\` » veja o tempo que eu estou online | uptime
\`${config.prefix}ping\` » Veja meu tempo de respostas | ms
\`${config.prefix}rankingconvite\` » Veja o rank dos membros que possuem mais membros no rank | conviteranking, rankingconvite, conviterank, rankconvite
\`${config.prefix}servericon\` » Amplie a foto do servidor | serverfoto
\`${config.prefix}site\` » Veja meu site | website
\`${config.prefix}userinfo [@usuario]\` » Veja as informações de algum usuario | infouser
\`${config.prefix}votar\` » Vote no doky para ele ser um bot mais famoso | vote
`)
              .setColor("#4287f5")

            msg.edit(embed);
        })
      
        jogos.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gigame:710186288493363280> » Jogos")
                .setDescription(`
\`${config.prefix}8ball\` » Pergunte ao sabio 8ball e veja a resposta dele | eighball
\`${config.prefix}guess\` » Jogue um dos melhores jogos do doky | Nenhuma alternativa
\`${config.prefix}jokenpo\` » jogue o famoso jokenpo contra o doky | pedrapapeltesoura, ppt, jkp, rps
`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      mine.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('<:gimine:710210353253974066> » Minecraft')
        .setDescription(`
\`${config.prefix}mchead [nick]\` » Veja a cabeça de alguma skin de um usuario que possui minecraft original | minehead, mccabeça
\`${config.prefix}mcskin [nick]\` » Veja a skin de algum usuario que possui minecraft original | mineskin, skinmined
\`${config.prefix}mcstatus [ip]\` » Veja o status de algum servidor | status, serverinfo
`)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      moderacao.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('<:gicargos:710187865329500232> » Moderação')
        .setDescription(`
\`${config.prefix}addrole [@usuario @cargo 50s]\` » Adicione um cargo temporario ou permanente | adicionarcargo, cargoadd
\`${config.prefix}anuncio\` » mande um anuncio em uma embed anuncionando alguma coisa | anunciar
\`${config.prefix}ban [@usuario motivo]\` » Bana algum usuario permanentemente | banir
\`${config.prefix}clear [1 - 100]\` » Limpe uma quantidade de mensagens | limpar
\`${config.prefix}kick [@usuario motivo]\` » Kicke um usuario se ele fizer alguma besteira | kickar
\`${config.prefix}menu\` » Veja meu menu | system
\`${config.prefix}removerole [@usuario @cargo]\` » Remova um cargo de um usuario | rr, rrole, roleremove
\`${config.prefix}rename [novo nome]\` » Me de um novo nome | renomear
\`${config.prefix}say [mensagem]\` » Fale como o bot | falar
\`${config.prefix}setleave [id]\` » Defina um canal para poder enviar a mensagem quando usuario sair | leaveset
\`${config.prefix}setleaveoff\` » Resete o canal onde será enviada a mensagem de quando sair um utusario | leavesetoff
\`${config.prefix}setwelcome [id]\` » Defina um canal onde será enviado a mensagem de welcome | welcomeset
\`${config.prefix}slowmode [1d/s/m/h]\` » Coloque modo lento em algum canal | modolento
\`${config.prefix}tempmute [@usuario 1[h/s/d/m] ]\` » De tempmute em algúm usuario | mute
\`${config.prefix}unban [@id motivo]\` » Desbana algum usuario | desban, desbanir
\`${config.prefix}unmute [@usuario]\` » desmuta algum usuario que está mutado no servidor | desmute, desmutar
\`${config.prefix}warn [@usuario motivo]\` » de warn em algum usuairo | Warnar
\`${config.prefix}warn clear [@usuario]\` » Limpe os warns de algum usuario | Nenhuma alternativa
\`${config.prefix}warnlevel [@usuario]\` » Veja os warns de algum usuario | warnings
`)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      uteis.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`<:gisuporte:710192974163607582> » Uteis`)
            .setColor("#4287f5")
            .setDescription(`
\`${config.prefix}afk [on | off]\` » Defina seu status como ausente | Nenhuma Alternativa
\`${config.prefix}bug [<script>]\` » Envie um bug que você viu para que possa ser corrigido | bugs
\`${config.prefix}lembrete [ 10[s/m/d/h] mensagem ]\` » peça para o bot te lembrar algo | lembrar
`)
            
           msg.edit(embed);  
        });
      
        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Minha central de ajuda!**`)
            .setColor("#4287f5")
            .setDescription('Para ter acesso a lista de comandos, reaja com algum emoji e receba as informações necessárias.\n\n\n<:gifun:710211304974975047> » `Diversão`\n<:gicoin:710207959216554131> » `Economia`\n<:giinfo:707735313325228062> » `Info`\n<:gigame:710186288493363280> » `Jogos`\n<:gimine:710210353253974066> » `Minecraft`\n<:gicargos:710187865329500232> » `Moderação`\n<:gisuporte:710192974163607582> » `Uteis` \n\n\n**Suporte**\n\nSe você encontrou algum bug envie utilizando [**'+`${config.prefix}`+'bug** <bug>]\nCaso prefirir,Entre em meu servidor de '+`[**Suporte**](https://discord.gg/9D9NAcq)`)
            
           msg.edit(embed);  
        });
    }).catch(() => message.channel.send(erroembed))
  const erroembed = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setDescription(`<:gierro:710197544751202414> » Suas mensagens privadas estão bloqueadas, Ative nas suas configurações de Privacidade e Segurança!`)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
  name: "ajuda",
  aliases: ["help"]
}