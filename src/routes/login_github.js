const env = require("env2")("./config.env");
const qs = require("querystring");

const clientID = process.env.CLIENT_ID;
const callbackURI = process.env.BASE_URL + "/";

module.exports = {
  method: 'GET',
  path: '/login-github',
  handler: (req, reply) => {
    const url = "https://github.com/login/oauth/authorize/?" + qs.stringify({client_id: clientID, redirect_uri: callbackURI});
    reply.redirect(url);
  },
};
