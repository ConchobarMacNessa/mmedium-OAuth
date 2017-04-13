const request = require('request');
const env = require('env2')('./config.env');
const cookieAuthModule = require('hapi-auth-cookie');
const qs = require('querystring');
const connect = require('../database/db_connect');
const post = require('./../database/post');


module.exports = {
  method: 'GET',
  path: '/welcome{githubCode?}',
  config: {
    auth: false,
    handler: (req, reply) => {
      request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.url.query.code}`,
        function(error, response, body) {
          const accessToken = qs.parse(body).access_token;

          const headers = {
            'User-Agent': 'medium-oauth',
            Authorization: `token ${accessToken}`,
          };

          request.get({url: 'https://api.github.com/user', headers},
            (err, response, bodyString) => {
              if (err) throw err;
              const bodyObj = JSON.parse(bodyString);
              const userDetails = {
                username: bodyObj.login,
                avatar_url: bodyObj.avatar_url
              };
              post.githubUser(userDetails, (err) => {
                if (err) {
                  console.log(err);
                  return;
                }
              });
              req.cookieAuth.set({accessToken: accessToken, username: userDetails.username, avatar_url: userDetails.avatar_url});
              reply.redirect('/');
            }
          );
        });
    }
  }
};
