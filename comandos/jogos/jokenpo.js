const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

exports.run = async (client, message, args) => {
  
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL())
            .setDescription("Adicione uma reação para começar a jogar!")
            .setTimestamp();

        const r = await message.channel.send(embed);
        const reacted = await promptMessage(r, message.author, 30, chooseArr);

        const clientChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, clientChoice);
        

        embed
        .addField(result, `${reacted} vs ${clientChoice}`)
        .setColor('4287f5');
        r.edit(embed);
  
        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Você ganhou!";
            } else if (me === clientChosen) {
                return "Empate!";
            } else {
                return "Você perdeu!";
            }
        }
    }
exports.help ={
  name: "jokenpo",
  aliases: ["pedrapapeltesoura", "ppt", "jkp", "rps"]
}