const get = require('./../database/get');

module.exports = {
  method: 'GET',
  path: '/',
  config: {
    auth: { strategy: 'base', mode: 'try' },
    handler: (req, reply) => {
      get.articles((err, articles) => {
        if (err) {
          console.log(err);
          return;
        }

        reply.view('index', {articles:articles, isAuthenticated:false});
      });
    },
  }
};
