'use strict';

exports.main = {
  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },
};

exports.signup = {
  handler: function (request, reply) {
    reply.view('signup', { title: 'Sign up for Donations' });
  },
};

exports.login = {
  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },
};

exports.authenticate = {
  handler: function (request, reply) {
    reply.redirect('/home');
  },
};

exports.logout = {
  handler: function (request, reply) {
    reply.redirect('/');
  },
};
