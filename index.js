const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs"); 
const { Collection } = require("discord.js");

const doky = new Discord.Client();

doky.commands = new Discord.Collection();
doky.aliases = new Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/diversão/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/diversão/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/info/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/info/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/jogos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/jogos/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/minecraft/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/minecraft/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/moderação/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/moderação/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/owner/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/owner/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/registro/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/registro/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./comandos/uteis/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/uteis/${f}`);
    console.log(`[ ${f} ] - Comando iniciado ✅`);
    doky.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      doky.aliases.set(alias, props.help.name);
    });
  });
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    doky.on(eventName, event.bind(null, doky));
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

doky.login(config.token);
