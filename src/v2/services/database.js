const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const URI = `${process.env.DB_PROTOCOL}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`;

const client = new MongoClient(URI);

const connect = async () => {
  try {
    const database = client.db(process.env.DB_NAME);
    return database;
  } 
  catch(error) {
    console.log('Connect Failed!');
    return null;
  }
}

const disconnect = async () => {
  try {
    client.close();
    console.log('Disconnect Succeed!');
  }
  catch {
    console.log('Disconnect Failed!');
  }
}

module.exports = {
  connect,
  disconnect
}