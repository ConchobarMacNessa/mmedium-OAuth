module.exports = {
  method: 'GET',
  path: '/login-register',
  config: {
    auth: false,
    handler: (req, reply) => {
      reply.view('login_register');
    },
  }
};
