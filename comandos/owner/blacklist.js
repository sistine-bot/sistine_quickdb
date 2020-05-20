const Discord = require("discord.js");
const fs = require('fs');
const config = require('../../config.json')

exports.run = async (client, message, args) => {
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("./storages/blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);
  
    if (isNaN(amount)) {
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} @usuario @motivo` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`Doky Dono\``, false)
                .setColor('4287f5'));
        }
  
    if (!message.author.id === '675439542110650399') return message.reply("Você não tem pemisão para utilizar este comando, apenas pessoas especiais.");
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) return message.reply('Diga um id');
    if (args[0] === '675439542110650399') return message.reply("Você não pode se colocar na blacklist");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true//,
          //name: user.username
        }
        message.reply(`<@${user}> Foi setado na blacklist!`);    
        fs.writeFile("../../storages/blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("Esse usuário já está na lista negra");
    return;
    };

}

exports.help = {
    name: 'blacklist',
    aliases: ["bl"],
  };