const randomPuppy = require('random-puppy');
const Discord = require('discord.js') // puxando a livraria 'discord.js'

module.exports.run = async (doky, message, args) => {
//
const subReddits = ["dankmeme", "meme", "me_irl","meme", "animemes","MemesOfAnime","animememes","AnimeFunny","dankmemes","dankmeme","wholesomememes","MemeEconomy","techsupportanimals","meirl","me_irl","2meirl4meirl","AdviceAnimals"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const image = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("#ffa500")
            .setDescription(`reddit/r/${random}`)
            .setImage(image)
            .setFooter(`reddit/r/${random}`);

        message.channel.send(embed);
    }

module.exports.help = {
    name: 'meme',
    aliases: ['memes']
}