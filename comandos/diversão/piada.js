const { MessageEmbed } = require('discord.js')
const lennys = [
  'Por que a aranha e  o animal mais carente do mundo?\n\n||Porque ela e um aracneedyou||',
  'porque o pinheiro não se perde na floresta?\n\n||porque ele tem uma pinha (um mapinha)||',
  'sabe como é a piada do pintinho caipira?\n\n||pir||',
  'Um caipira chega á casa de um amigo que está vendo uma tv e pergunta\n\n*- E ai, Firme?*\n\n**O outro respond:e**\n\n*- Não, futebor*',
  'o que o pagodeiro foi fazer na igreja:\n\n|| Foi cantar PÁ GOD||',
  'por que napoleão era chamado sempre pras festas na frança?\n\n||Porque ele era BOM NA PARTY||',
  'o que aconteceu co mos lápis quando souberam que o dono da faber castell morreu?\n\n||Eles ficaram desapontados.||',
  'a plantinha foi ao hospital, mas não foi atendida por quê?\n\n||Porque la tinha um médico de plantão.||',
  'Você conehce o site do cavalinho?\n\n||é www ponto cavalinho ponto com ponto com ponto com ponto com ponto com...||',
  'você conhece a piada do pônei?\n\n||Pô nei eu||',
  'Qual é a formula da âgua benta?\n\n||H deus O||',
  'Qual e o rei dos queijos?\n\n||É o rei queijão||',
  'O que o pato falou pra pata?\n\n||Vem quá||',
  'Oque e Oque e: maconha enrolada em jornal?\n\n||Baseado em fatos reais.||',
  'orque a velinha não usa relógio?\n\n||Porque ela e sem hora (Senhora)||',
  'Oque a vaca disse pro boi?\n\n||Te amuuuuu...||',
  'O que a xuxa foi fazer no bar?\n\n||Foi beber ca sasha(cachaça).||',
  'Havia dois camihões voando. um caiu. Porque o outro continuou voando?\n\n||Porque era caminhão-pipa.||',
  'porque a formiga tem 4 patas?\n\n||Porque se tivesse cinco se chamaria FiveMiga||',
  'quando americanos comeram carne pela primeira vez?\n\n||quando chegou cristóvão com lombo||'
]
  

module.exports.run = async (doky, message, args) => {
    var rand_num = Math.floor(Math.random() * lennys.length);
    var rand_val = lennys[rand_num];
const embed = new MessageEmbed()
.setDescription(`${rand_val}`)
.setColor(`2f3136`)
    return message.channel.send(embed);
}

module.exports.help = {
    name: "piada",
  aliases: ["piadinha"]
}