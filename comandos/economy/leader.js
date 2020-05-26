const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta escrever em seu terminal: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria Discord.js
//const config = require('../../config.json')

exports.run = async (client, message, args) => {
 // Get the Guild and store it under the variable "list"
const list = client.guilds.cache.get(message.guild.id); 
const mlist = []
const ilist = []
// Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
list.members.cache.forEach(member => mlist.push(member.user.tag));
list.members.cache.forEach(member => ilist.push(member.user.id));
//mlist contains all the user's usernames and tags(e.g. MCUniversity#0859), ilist contains all ID's 
console.log(mlist)
console.log(ilist)
let bl = []
let member = message.mentions.users.first() || message.author;
  
for (let i = 0; i < ilist.length; i++) {
    let bal = await db.fetch(`saldo_${message.author.id}_${message.guild.id}`)
    if (bal == null) bal = 0;
    console.log(mlist[i] + " " + bal)
    bl.push(bal + "$ " + mlist[i])

}
bl.sort(); //function(a, b){return b-a}
  bl.reverse();
  if (bl[0] == undefined) bl[0] = "-"
  if (bl[1] == undefined) bl[1] = "-"
  if (bl[2] == undefined) bl[2] = "-"
  if (bl[3] == undefined) bl[3] = "-"
  if (bl[4] == undefined) bl[4] = "-"
  console.log(bl)
     let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(message.guild.name + " economy leaderboards.")
    .setDescription(`**1.** ${bl[0]}\n**2.** ${bl[1]}\n**3.** ${bl[2]}\n**4.** ${bl[3]}\n**5.** ${bl[4]}\n`)
    message.channel.send(embed)
}
exports.help = {
  name: 'leader',
  aliases: []
}