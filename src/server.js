const hapi = require('hapi');
const server = new hapi.Server();
require('env2')('config.env');
const fs = require('fs');
const path = require('path');

const inert = require('inert');
const vision = require('vision');
const cookieAuthModule = require('hapi-auth-cookie');
const contextCredentials = require('hapi-context-credentials');

const routes = require('./routes');
const handlebars = require('./handlebars');

server.connection({
  // host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 4000,
  // tls: {
  //   key: fs.readFileSync(path.join(__dirname, '../keys/key.pem')),
  //   cert: fs.readFileSync(path.join(__dirname, '../keys/cert.pem'))
  // }
});

console.log(process.env.HOSTNAME || 'localhost');
server.register([inert, vision, cookieAuthModule, contextCredentials], err => {
  if (err) throw err;

  server.auth.strategy('base', 'cookie', 'optional', {
    password: process.env.COOKIE_PASSWORD,
    cookie: 'mmedium-cookie',
    isSecure: false, //@TODO WHEN ON HEROKU CHANGE TO TRUE
    ttl: 24 * 60 * 60 * 1000, //@TODO test timing works as expected
    isSameSite: false,

  });
  // server.auth.default('base');
  server.views(handlebars);
  server.route(routes);
});

module.exports = server;
