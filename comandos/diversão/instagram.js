const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
const config = require('../../config.json')

exports.run = async (doky, message, args) => { 
  
        const name = args.join(" ");

        if (!name){
            return message.channel.send(new Discord.MessageEmbed()
                .setTitle("**<:dokyerro:700492899833479249> » Uso incorreto do comando**")
                .setDescription("<:dokypin1:700516924404269056> › Tente usar ``" + `${config.prefix}${this.help.name} nome` + "``")
                .addField('**Alternativas**', `\`${this.help.aliases}\``, false)
                .addField('**Permissões**', `\`nenhum\``, false)
                .setColor('2f3136'));
        }
        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("<:dokyerro:700492899833479249> » Eu não consegui encontrar esta conta.")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("informações do perfil", stripIndents`**- Nome:** ${account.username}
            **Nome completo:** ${account.full_name}
            **Bio:** ${account.biography.length == 0 ? "none" : account.biography}
            **Posts:** ${account.edge_owner_to_timeline_media.count}
            **Seguidores:** ${account.edge_followed_by.count}
            **Seguindo:** ${account.edge_follow.count}
            **Conta privada?:** ${account.is_private ? "Sim 🔐" : "Não 🔓"}`);

        message.channel.send(embed);
    }

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "instagram",
  aliases: ["insta"]
};
