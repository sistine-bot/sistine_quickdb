
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
  let content = "";

  for (let i = 0; i < money.length; i++) {
    let user = client.users.cache.get(money[i].ID.split('_')[2]).username

    content += `${i+1}. ${user} ~ ${money[i].data} монет\n`
  }

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name} - Leaderboard`, message.guild.iconURL())
  .setDescription(content)
  .setColor("RANDOM")

  message.channel.send(embed)
}

exports.help = {
    name: 'rrrr',
  aliases: []
}