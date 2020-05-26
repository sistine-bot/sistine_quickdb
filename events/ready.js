module.exports = (client, message) => { //doky.on('ready', () => {
  const config = require('../config.json')
    let tabela = [
        {name: `${client.users.cache.size} fofos`, type: "WATCHING"},
        {name: `meu prefixo: ${config.prefix}`, type: "WATCHING"},
        {name: 'Spotify🎧', type: "LISTENING"},
        {name: `e moderando ${client.guilds.cache.size} servidores`, type: "PLAYING"},
        {name: `${client.guilds.cache.size} servidores`, type: "WATCHING"},
        {name: `amor para ${client.users.cache.size} usuarios`, type: "STREAMING",  url: 'https://twitch.tv/yongvortex'}
    ]
    setInterval(function(){
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
        client.user.setActivity(altstatus)
      }, 20000)
  
  console.log(`[ ${client.user.username} foi inicializada sem Problemas. ]\n-=-=-=-=-=-= INFORMAÇÔES -=-=-=-=-=-=\n[Usúarios]: ${client.users.cache.size}\n[Servidores]: ${client.guilds.cache.size}\n[Canais em Geral]: ${client.channels.cache.size}\n-=-=-=-=-=-= INFORMAÇÔES -=-=-=-=-=-=`); 
}
//});