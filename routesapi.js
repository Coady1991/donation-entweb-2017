const CandidatesApi = require('./app/api/candidatesapi');

module.exports = [

  { method: 'GET', path: '/api/candidates', config: CandidatesApi.find },

];
