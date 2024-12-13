const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const dbConfig = {
  dbName: process.env.DB_NAME || 'dummyjson-test-db',
  maxPoolSize: 5,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`;

const client = new MongoClient(URI, dbConfig);

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