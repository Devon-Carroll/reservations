/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://wnshifkp:V0sY5sc-toJHhZEPH-uriY89AYr9yNI7@ziggy.db.elephantsql.com/wnshifkp",
  DATABASE_URL_DEVELOPMENT = "postgres://wnshifkp:V0sY5sc-toJHhZEPH-uriY89AYr9yNI7@ziggy.db.elephantsql.com/wnshifkp",
  DATABASE_URL_TEST = "postgres://wnshifkp:V0sY5sc-toJHhZEPH-uriY89AYr9yNI7@ziggy.db.elephantsql.com/wnshifkp",
  DATABASE_URL_PREVIEW = "postgres://wnshifkp:V0sY5sc-toJHhZEPH-uriY89AYr9yNI7@ziggy.db.elephantsql.com/wnshifkp",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
