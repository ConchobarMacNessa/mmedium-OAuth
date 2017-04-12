const get = require('./../database/get');

module.exports = {
  method: 'GET',
  path: '/',
  config: {
    auth: false,
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
