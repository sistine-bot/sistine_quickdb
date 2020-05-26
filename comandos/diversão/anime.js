const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');
const fetch = require("node-fetch")

exports.run = async (client, message, args) => {
    //checking args
   if (!args[0]) {
     return message.channel.send("<:gierro:710197544751202414> » Por favor, indique o nome do anime que você deseja procurar!");
      
    }
    //main part
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(async result => {
            if (result.length === 0) {
                return message.channel.send(`<:gierro:710197544751202414> » Nenhum resultado para esta pesquisa: ${search} ,Tente procurar um anime de verdade!`);
            }
          
          var anime = result[0]

            let embed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor(`${anime.titles.english ? anime.titles.english : search}`, anime.posterImage.original)
                //.setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
            .addField('**<:gibook:710212976833200149> » Status**', `Numero de episodes: **${anime.episodeCount ? anime.episodeCount : 'N/A'}**\nData de inicio: **${anime.startDate}**\nData do termino: **${anime.endDate ? anime.endDate : "Still airing"}**`, false)
            .addField('**<:gibooks:710212800529825908> » Estatísticas**', `Média: **${anime.averageRating}**\nClassificação popular: **${anime.ratingRank}**\nRank Popular: **${anime.popularityRank}**`, false)    
            .addField('**<:gipin:710194953028108338> » Informações**', `Nome em Japonês: **${anime.titles.romaji}**\nFaixa Etária: **${anime.ageRating}**\nPorn/Gore: **${anime.nsfw ? 'Sim' : 'Não'}**`, false)
            .setThumbnail(anime.posterImage.original, 200, 300);
          

            return message.channel.send({ embed })
        }).catch(err => {
            console.log(err) //cathing error
            return message.channel.send(`<:gierro:710197544751202414> » Nenhum resultado para esta pesquisa: ${search} ,Tente procurar um anime de verdade!`);
        });
    }
exports.help = {
  name: "anime",
  aliases: []
}