const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const fetch = require("node-fetch"); // puxando o NPM 'node-fetch' (instale utilizando: npm i node-fetch)
const config = require('../../config.json')

exports.run = async (doky, message, args) => { // setando a base, mas com a function async
    let text = encodeURIComponent(args.join(' ')); // puxando os argumentos
  
        if (!text) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} mensagem` + "``")
                .addField('**Alternativas**', `\`nenhum\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
    // caso o texto ultrapasse os limites
    const tooLong = `<:dokyerro:700492899833479249> » O texto ultrapassou o limite de \`2000\` caracteres, tente um texto menor.`;
    // setando um link da api da heroku
    fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(res => res.text()) // formando o texto
        .then(body => { // corpo
            if (body.length > 2000) return message.channel.send(tooLong); // enviamos a mensagem de ultrapassar limites
            return message.channel.send(body, { // por fim, o ASCII
                code: "fix"
            });
        })
        .catch(error => {
            this.doky.logger.error(error); // caso haja um erro, filtraremos ele e enviaremos abaixo
            return message.channel.send(texts.general.error.replace(/{{err}}/g, error.message)); //se estiver com um erro e normal(o comando funciona-ra normalmente)
        });
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ascii',
  aliases: []
}
