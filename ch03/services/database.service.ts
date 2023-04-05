import 'dotenv/config'
import { Db, MongoClient } from 'mongodb'

export let client : MongoClient

export async function connectToDatabase(
  dbName : string | undefined = process.env.DB_NAME,
) : Promise<Db | null> {
  const url = process.env.DB_CONN_STRING

  if ( !url || !dbName ) return null

  client = new MongoClient( url )

  await client.connect()

  return client.db( dbName )
}
