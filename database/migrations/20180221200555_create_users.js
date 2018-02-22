
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments();
      table.string('username', 100).notNullable().unique();;
      table.string('password', 100).notNullable();
      table.string('email', 100).notNullable().unique();;
      table.string('firstName', 100).nullable();
      table.string('lastName', 100).nullable();
      table.string('phoneNumber', 100).nullable();
      table.string('streetAddress', 255).nullable();
      table.string('city', 100).nullable();
      table.string('state', 100).nullable();
      table.string('zipCode', 100).nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
