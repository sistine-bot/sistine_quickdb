const Discord = require("discord.js");
const fs = require('fs');
const config = require('../../config.json')

exports.run = async (client, message, args) => {
  
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    if(message.author.id !== '675439542110650399') return message.channel.send(`${message.author}, Você não tem permissão para utilizar este comando, apenas pessoas especiais.`);
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario @motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Doky Dono\``, false)
                .setColor('4287f5'));
        }
  
    if (!blacklist[user]) {
        message.reply("Esse usuário não foi incluído na lista negra");
        return;
    };
    
    if (blacklist[user].state === false) {
        message.reply("Esse usuário não foi incluído na lista negra");
        return;
    };

    if (blacklist[user].state === true) {
        blacklist[user] = {
            state: false
        }
    message.reply("Esse usuário foi removido da lista negra");
    fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
        if(err) throw err;
        return;
    });
    }
    
}

exports.help = {
    name: 'unblacklist',
  aliases: ["unbl", "blu"],
  };