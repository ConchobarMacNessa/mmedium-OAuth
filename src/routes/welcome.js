const request = require('request');
const env = require('env2')('./config.env');

module.exports = {
  method: 'GET',
  path: '/welcome{githubCode?}',
  config: {
    auth: false,
    handler: (req, reply) => {
      request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.url.query.code}`,
        function(error, response, body) {
          console.log(body);
          reply.redirect('/');
        });
    }
  }
};
