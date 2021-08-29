'use strict';

const Mongodb = require('@pick-star/cli-mongodb');
const { MONGO_DB_URL } = require('../../config/db');

function mongo() {
  return new Mongodb(MONGO_DB_URL);
}

module.exports = mongo;
