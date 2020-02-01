// Update with your config settings.
const localPg = {
  host:'localhost', 
  port: 5432, 
  user: 'postgres', 
  password: 'postgres', 
  database: 'saltiest_hacker', 
}
module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './saltiest.db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: localPg.database,
      user:     localPg.user,
      password: localPg.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    useNullAsDefault: true, 
    connection: localPg,
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
