const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

exports.run = async (doky, message, args) => {
  
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, doky.user.displayAvatarURL())
            .setDescription("Adicione uma reação para começar a jogar!")
            .setTimestamp();

        const r = await message.channel.send(embed);
        const reacted = await promptMessage(r, message.author, 30, chooseArr);

        const dokyChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, dokyChoice);
        

        embed
        .setDescription("")
        .addField(result, `${reacted} vs ${dokyChoice}`);

        r.edit(embed);
  
        function getResult(me, dokyChosen) {
            if ((me === "🗻" && dokyChosen === "✂") ||
                (me === "📰" && dokyChosen === "🗻") ||
                (me === "✂" && dokyChosen === "📰")) {
                    return "Você ganhou!";
            } else if (me === dokyChosen) {
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