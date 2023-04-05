const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

const url =
  'mongodb+srv://learnNode:1arlDK0mIR267nPd@serverlessinstance0.xzvly.mongodb.net/test';
// const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

const dbName = 'mongodb-fundamentals-db';

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to the server...');

    const db = client.db(dbName);

    console.log(`${dbName} collections:`);
    const cursor = await db.listCollections();
    await cursor.forEach(console.dir);
  } catch (e) {
    await client.close();
    console.error(e);
  }

  return 'done.';
}

main().then(console.log).catch(console.error).finally(() => client.close());
