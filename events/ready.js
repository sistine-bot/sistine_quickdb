module.exports = (doky) => { //doky.on('ready', () => {
  const config = require('../config.json')
  
console.log(`${doky.user.username} Foi iniciado com sucesso`);   
    var tabela = [
        {name: `${doky.users.cache.size} fofos`, type: "WATCHING"},
        {name: `meu prefixo: ${config.prefix}`, type: "WATCHING"},
        {name: 'Spotify🎧', type: "LISTENING"},
        {name: `e moderando ${doky.guilds.cache.size} servidores`, type: "PLAYING"},
        {name: `${doky.guilds.cache.size} servidores`, type: "WATCHING"},
        {name: `amor para ${doky.users.cache.size} usuarios`, type: "STREAMING",  url: 'https://twitch.tv/yongvortex'},
    ]
    setInterval(function(){
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
        doky.user.setActivity(altstatus)
      }, 20000)
}
//});