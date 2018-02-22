## Hello!

Thank you for viewing my submission for your technical challenge


### To download the dependencies for the repository:

```
npm install
```

### To start the repository:

```
npm start
```

### To ensure the database works:

First:

Make sure that you create a database on your postgres

```
psql -H postgres

CREATE DATABASE eka_technical_challenge
```

Second:

If you want to build the schema into the database, run the migration command:

```
knex migrate:latest
```

Third (optional):

If you want to seed the database with a couple test cases, run this command

```
knex seed:run
```

If you need to rollback the database to drop the tables, run this command:

```
knex migrate:rollback
```