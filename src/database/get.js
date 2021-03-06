const connect = require('./db_connect');

const get = {};

get.articles = (callback) => {

  connect.query(`
    SELECT users.username, users.avatar_url, articles.title, articles.body_text, articles.image_url, articles.date_posted FROM articles
    INNER JOIN users ON users.id = articles.author_id
    ORDER BY articles.id DESC;`, (err, response) => {
    if (err) return callback(err);

    callback(null, response.rows);
  });
};

module.exports = get;
