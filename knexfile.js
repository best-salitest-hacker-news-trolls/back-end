// Update with your config settings.
const localPg = {
  host:'localhost', 
  port: 5432, 
  user: 'postgres', 
  password: 'postgres', 
  database: 'saltiest_hacker', 
}
const heroku = process.env.DATABASE_URL + '?ssl=true'

const localPGConnection = `postgres://postgres:postgres@localhost/saltiest_hacker`
module.exports = {

  development: {
    client: 'pg',
    connection: localPGConnection
  },

  staging: {
    client: 'pg',
    connection: localPGConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true, 
    connection: heroku,
    migrations: {
      directory: './migrations'
    },
    seeds:{
      directory: './seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
