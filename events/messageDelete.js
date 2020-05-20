const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db");

module.exports = (client, message) => {
  if (message.channel.type === "dm") return;

  let envlog = db.get(`envlog_${message.guild.id}`);
  if (envlog === null) envlog = "`Nenhum canal definido!`";
  if (envlog === 0) envlog = "`Nenhum canal definido!`";

  let canal = client.channels.cache.get(envlog);
  if (!canal) return;

  if (message.author.bot) return;

  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.displayAvatarURL()
    )
    .setDescription(
      "📝 **Mensagem apagada**\n\n**Canal:** <#" +
        message.channel.id +
        ">\n\n**Mensagem**: \n```" +
        message.content +
        "```"
    )
    .setColor("ff0000")
    .setTimestamp();
  canal.send(embed);
};
