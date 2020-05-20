const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs"); 
const { Collection } = require("discord.js");

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/diversão/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/diversão/${f}`);
    console.log(`[ ${f} ] - Comandos iniciado ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/configuravel/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/configuravel/${f}`);
    console.log(`[ CONFIGURAVEIS ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/info/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/info/${f}`);
    console.log(`[ INFORMAÇÕES ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/jogos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/jogos/${f}`);
    console.log(`[ JOGOS ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/minecraft/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/minecraft/${f}`);
    console.log(`[ MINECRAFT ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/moderação/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/moderação/${f}`);
    console.log(`[ MODERAÇÃO ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/owner/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/owner/${f}`);
    console.log(`[ OWNER ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/registro/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/registro/${f}`);
    console.log(`[ REGISTRO ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/uteis/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/uteis/${f}`);
    console.log(`[ UTEIS ] - [ ${f} ] - ✅`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//codigo pra deixar o o bot sempre online
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); // Código que deixa o Bot Online

client.login(config.token);