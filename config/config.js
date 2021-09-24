require('dotenv').config()
module.exports = {
  development: {
    database: 'filmzilla_db',
    dialect: 'postgres'
  },
  test: {
    database: 'filmzilla_db',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
