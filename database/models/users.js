const bookshelf = require('../bookshelf');

/* 

Here is where I could define the behavior to hash the password using bcrypt by creating a salt, generating a hash, then set the password to the hash

 */

const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;