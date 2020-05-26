const Discord = require('discord.js');
const config = require('../config.json');
const db = require('quick.db');

exports.run = (client, message, args) => { // setando a base
  let prefixos = db.get(`prefixos_${message.guild.id}`)
  if (prefixos === null) prefixos = `${config.prefix}`
  
// avisando sobre a embed de ajuda na DM
const embedd = new Discord.MessageEmbed()
.setTitle('Mensagem enviada')
.setDescription('<:gicerto:710198069068562473> » Verifique suas mensagens privadas.')
.setColor("#4287f5")
message.reply(embedd)

    let embed = new Discord.MessageEmbed()
        .setTitle(`**Minha central de ajuda!**`)
        .setColor("#4287f5")
        .setDescription('Para ter acesso a lista de comandos, reaja com algum emoji e receba as informações necessárias.\n\n\n<:gifun:710211304974975047> » `Diversão`\n<:gicoin:710207959216554131> » `Economia`\n<:giinfo:707735313325228062> » `Info`\n<:gigame:710186288493363280> » `Jogos`\n<:gimine:710210353253974066> » `Minecraft`\n<:gicargos:710187865329500232> » `Moderação`\n<:gisuporte:710192974163607582> » `Uteis` \n\n\n**Suporte**\n\nSe você encontrou algum bug envie utilizando [**'+`${prefixos}`+'bug** <bug>]\nCaso prefirir,Entre em meu servidor de '+`[**Suporte**](https://discord.gg/9D9NAcq)`)
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
\`${prefixos}abraço [@usuario]\` » De um abraço em algum usuario | hug, abração
\`${prefixos}anime [nome]\` » Veja as informações de algum anime | nenhuma alternativa
\`${prefixos}beijar [@usuario]\` » Beije algum usuario | kiss, beijo
\`${prefixos}big-text [mensagem]\` » Deixe o text omais grande | textogrande
\`${prefixos}biscoito [@usuario]\` » De um biscoito para algum usuario | cookie
\`${prefixos}brigar [@usuario]\` » Brigue com algum usuario | fight, lutinha
\`${prefixos}calc [2 + 2]\` » Faça algum calculo | calcular, calculo
\`${prefixos}cat\` » Veja uma foto ou gif de um gatinho | gato
\`${prefixos}crazytext [mensagem]\` » Deixe o texto todo aleatorio | textolouco
\`${prefixos}dado\` » Veja em que numero o dado vai cair | slice
\`${prefixos}dog\` » Veja um gif de um cachorrinho | cachorro
\`${prefixos}flipcoin\` » Flipe uma moeda e veja se caira cara ou coroa | coinflip, cc
\`${prefixos}fliptext [mensagem]\` » Deixe um texto de cabeça para baixo | flip, flipar
\`${prefixos}lenny\` » veja um lenny face aleatorio | carinha, carinhas, randomlenny
\`${prefixos}meme\` » Veja um meme aleatorio do reddit | memes
\`${prefixos}number [3 409404]\` » Veja um numero aleatorio dentre 2 numeros | randomnumber, numero
\`${prefixos}pat\` Faça um carinho em alguém | tapinha, carinho
\`${prefixos}pregunta [mensagem]\` » Faça uma pergunta ao sabio BOT | thinking, what, perg
\`${prefixos}piada\` » Veja uma piada aleatoria | piadinha
\`${prefixos}reverse [mensagem]\` » reverta um texto | reverter
\`${prefixos}roleta\` » Brinque de roleta russa | roletarussa
\`${prefixos}sadcat\` » Veja uma foto ou gif de um gatinho triste | gatinho
\`${prefixos}ascii [mensagem]\` » fale de uma forma diferente | nehuma alternativa
\`${prefixos}space [mensagem]\` » Deixe um texto todo espaçado | espaço, lo-fi, lofi
\`${prefixos}tapa [@usuario]\` » De um tapa em algum usuario | tapão, slap
\`${prefixos}tiny [mensagem]\` » Deixe um texto todo pequeno | pequeno, textopequeno
          `)
          .setColor("#4287f5")

            msg.edit(embed);
        })
 
        economia.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gicoin:710207959216554131> » Economia")
                .setDescription(`
\`${prefixos}weekly\` » Pegue sua AstroCoin semanal | semanal
\`${prefixos}daily\` » Pegue suas StarCoin's diaris | diario
\`${prefixos}demissão\` » Se demita do seu trabalho | demissao
\`${prefixos}depositar [all ou quantia]\` » Deposite seu dinheiro para não ser roubado | dep, deposit
\`${prefixos}emprego\` » Escolha um emprego para poder trabalhar | trabalho, trabalhos, empregos
\`${prefixos}loja\` » Compre itens para seu perfil | Nenhuma alternativa
\`${prefixos}pagar\` » Envie uma quantia para algum usuario | pay, enviar
\`${prefixos}perfil [@usuario]\` » Veja o perfil de algum usuario | profile
\`${prefixos}sacar [all ou quantia]\` » Retire uma quantia de seu banco | retirar
\`${prefixos}saldo [@usuario]\` » Veja o seu saldo ou de algum usuario | money, bal, balance
\`${prefixos}bio set [mensagem]\` » Coloque uma mensagem na sua biografia do perfil | nenhuma alternativa
\`${prefixos}bio reset\` » Resete a mensagem da sua bio | nenhuma alternativa
\`${prefixos}wallpaper [link]\` » Os VIP's podem colocar um wallpaper de graça | background
\`${prefixos}vender\` » Venda algum item que você possui |  sell
\`${prefixos}vip\` » Veja as vantagens de possuir vip | vip-info, info-vip
\`${prefixos}vip-loja\` » Loja que vende itens vips | nenhuma alternativa
\`${prefixos}trabalhar\` » trabalhe e ganhe suas StarCoin's | work, trabalho
`)
                .setColor("#4287f5")
            msg.edit(embed);
        })
                info.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                  .setTitle("<:giinfo:707735313325228062> » Info")
                  .setDescription(`
\`${prefixos}about\` » Veja algumas das minhas informações | informações
\`${prefixos}avatar [@usuario]\` » Veja o avatar de algum usuario | foto
\`${prefixos}botinfo\` » Veja as principais informações do doky | infobot, dokyinfo, infodoky, info
\`${prefixos}clima [RJ, SP]\` » Veja o clima de alguma cidade
\`${prefixos}colorsearch ff0000\` » Veja uma cor em codigo rex amplificada | cor
\`${prefixos}coronavirus [brazil, EUA]\` » Veja as informações do coronavirus | corona, coronga
\`${prefixos}emoji :emoji:\` » Veja um emoji ambliado | bigemoji, emojigrande
\`${prefixos}emojiinfo :emoji:\` » Veja as informações de um emoji | infoemoji
\`${prefixos}emojis\` » Veja todos os emojis do servidor | Nehuma Alternativa
\`${prefixos}hostinfo\` » Veja todas as informações da minha host | host, infohost
\`${prefixos}links\` » Veja o links principais | link
\`${prefixos}ontime\` » veja o tempo que eu estou online | uptime
\`${prefixos}ping\` » Veja meu tempo de respostas | ms
\`${prefixos}rankingconvite\` » Veja o rank dos membros que possuem mais membros no rank | conviteranking, rankingconvite, conviterank, rankconvite
\`${prefixos}servericon\` » Amplie a foto do servidor | serverfoto
\`${prefixos}site\` » Veja meu site | website
\`${prefixos}userinfo [@usuario]\` » Veja as informações de algum usuario | infouser
\`${prefixos}votar\` » Vote no doky para ele ser um bot mais famoso | vote
`)
              .setColor("#4287f5")

            msg.edit(embed);
        })
      
        jogos.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("<:gigame:710186288493363280> » Jogos")
                .setDescription(`
\`${prefixos}8ball\` » Pergunte ao sabio 8ball e veja a resposta dele | eighball
\`${prefixos}guess\` » Jogue um dos melhores jogos do doky | Nenhuma alternativa
\`${prefixos}jokenpo\` » jogue o famoso jokenpo contra o doky | pedrapapeltesoura, ppt, jkp, rps
`)
                .setColor("#4287f5")

            msg.edit(embed);
        })
      mine.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('<:gimine:710210353253974066> » Minecraft')
        .setDescription(`
\`${prefixos}mchead [nick]\` » Veja a cabeça de alguma skin de um usuario que possui minecraft original | minehead, mccabeça
\`${prefixos}mcskin [nick]\` » Veja a skin de algum usuario que possui minecraft original | mineskin, skinmined
\`${prefixos}mcstatus [ip]\` » Veja o status de algum servidor | status, serverinfo
`)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      moderacao.on('collect', r2 => {
        embed = new Discord.MessageEmbed()
        .setTitle('<:gicargos:710187865329500232> » Moderação')
        .setDescription(`
\`${prefixos}setprefix\` » Redefina meu prefixo | nenhuma alternativa
\`${prefixos}addrole [@usuario @cargo 50s]\` » Adicione um cargo temporario ou permanente | adicionarcargo, cargoadd
\`${prefixos}anuncio\` » mande um anuncio em uma embed anuncionando alguma coisa | anunciar
\`${prefixos}ban [@usuario motivo]\` » Bana algum usuario permanentemente | banir
\`${prefixos}clear [1 - 100]\` » Limpe uma quantidade de mensagens | limpar
\`${prefixos}kick [@usuario motivo]\` » Kicke um usuario se ele fizer alguma besteira | kickar
\`${prefixos}dashboard\` » configure minha dashboard | nenhuma alternativa
\`${prefixos}removerole [@usuario @cargo]\` » Remova um cargo de um usuario | rr, rrole, roleremove
\`${prefixos}rename [novo nome]\` » Me de um novo nome | renomear
\`${prefixos}say [mensagem]\` » Fale como o bot | falar
\`${prefixos}exit channel [id]\` » Defina um canal para poder enviar a mensagem quando usuario sair | nenhuma alternativa
\`${prefixos}exit reset\` »  caso tenha outras duvidas | nenhuma alternativa
\`${prefixos}exit help\` » Reseta o comando de leave member | nenhuma alternativa
\`${prefixos}welcome channel [id]\` » Defina um canal onde será enviado a mensagem de welcome | nenhuma alternativa
\`${prefixos}welcome mensagem [ nova mensagem ]\` » Defina uma mensagem customizavel | nenhuma alternativa
\`${prefixos}welcome reset\` » Reseta o comando de welcome | nenhuma alternativa
\`${prefixos}welcome help\` » caso tenha outras duvidas | nenhuma alternativa
\`${prefixos}log channel\` » Define o cnaal que e enviado as logs | nenhuma alternativa
\`${prefixos}slowmode [1d/s/m/h]\` » Coloque modo lento em algum canal | modolento
\`${prefixos}tempmute [@usuario 1[h/s/d/m] ]\` » De tempmute em algúm usuario | mute
\`${prefixos}unban [@id motivo]\` » Desbana algum usuario | desban, desbanir
\`${prefixos}unmute [@usuario]\` » desmuta algum usuario que está mutado no servidor | desmute, desmutar
\`${prefixos}warn [@usuario motivo]\` » de warn em algum usuairo | Warnar
\`${prefixos}warn clear [@usuario]\` » Limpe os warns de algum usuario | Nenhuma alternativa
\`${prefixos}warnlevel [@usuario]\` » Veja os warns de algum usuario | warnings
`)
        .setColor('#4287f5')
        
msg.edit(embed)
})
      uteis.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`<:gisuporte:710192974163607582> » Uteis`)
            .setColor("#4287f5")
            .setDescription(`
\`${prefixos}afk [on | off]\` » Defina seu status como ausente | Nenhuma Alternativa
\`${prefixos}bug [<script>]\` » Envie um bug que você viu para que possa ser corrigido | bugs
\`${prefixos}lembrete [ 10[s/m/d/h] mensagem ]\` » peça para o bot te lembrar algo | lembrar
`)
            
           msg.edit(embed);  
        });
      
        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`**Minha central de ajuda!**`)
            .setColor("#4287f5")
            .setDescription('Para ter acesso a lista de comandos, reaja com algum emoji e receba as informações necessárias.\n\n\n<:gifun:710211304974975047> » `Diversão`\n<:gicoin:710207959216554131> » `Economia`\n<:giinfo:707735313325228062> » `Info`\n<:gigame:710186288493363280> » `Jogos`\n<:gimine:710210353253974066> » `Minecraft`\n<:gicargos:710187865329500232> » `Moderação`\n<:gisuporte:710192974163607582> » `Uteis` \n\n\n**Suporte**\n\nSe você encontrou algum bug envie utilizando [**'+`${prefixos}`+'bug** <bug>]\nCaso prefirir,Entre em meu servidor de '+`[**Suporte**](https://discord.gg/9D9NAcq)`)
            
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