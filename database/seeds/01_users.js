
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'testuser1', password: 'testpassword1', email: 'test@email.com', firstName: 'test', lastName: 'user', phoneNumber: '1234567890', streetAddress: '1234 test street', city: 'sacramento', state: 'ca', zipCode: '12345'},
        {id: 2, username: 'testuser2', password: 'testpassword2', email: 'test2@email.com', firstName: 'test2', lastName: 'user2', phoneNumber: '1234567890', streetAddress: '1234 test street', city: 'sacramento', state: 'ca', zipCode: '12345'},
      ]);
    });
};