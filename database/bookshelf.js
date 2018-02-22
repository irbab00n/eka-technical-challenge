const config = require('../knexfile')['development'];
const knex = require('knex')(config);
bookshelf = require('bookshelf')(knex);

// bookshelf.plugin('registry');

module.exports = bookshelf;