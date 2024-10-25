const { MongoClient } = require('mongodb');

let db;

const connectToDatabase = async (dbUrl) => {
  try {
    const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
};

module.exports = { connectToDatabase, getDb };
