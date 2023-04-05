/*
 *
 * Script to create a database view object
 * Start the script with Mongo Shell and a valid ATLAS account
 *
 * mongo
 * mongodb+srv://admindb:<passwd>@atlas1-u7xxx.mongodb.net/sample_mflix
 *  @exercise_4.js
 */
// import * as mongodb from 'mongodb'
import { client, connectToDatabase } from './services/database.service.ts'
import { Db } from 'mongodb'

async function getCollectionNames( db : Db ) {
  const collections = db.listCollections( {} )
  await collections.forEach( doc => console.log( doc.name ) )
}

const exercise4 = async () => {
  const db = await connectToDatabase( 'sample_mflix' )

  if ( !db ) return

  // list collections and views
  // db.getCollectionNames()
  await getCollectionNames( db )

  console.log( 'Creating View...' )
  const viewCollection = 'short_movie_info'
  await db.dropCollection( viewCollection )
  await db.createCollection( viewCollection, {
    viewOn:'movies',
    pipeline:[ { $project:{ 'year':1, 'title':1, 'plot':1 } } ],
  } )

  const shortMovieInfo = db.collection( viewCollection )
  const movie = await shortMovieInfo.findOne()
  console.log( JSON.stringify( movie ) )

  console.log( 'Done.' )
}

void exercise4().then( () => client.close() ).catch( error => {
  void client.close()
  console.error(error)
} )

// create view
// db.createView(
//     "short_movie_info",
//     "movies",
//     [{ $project: { "year": 1, "title": 1, "plot": 1 } }]
// )
//
// // list collections and views
// db.getCollectionNames()
//
// // query the view
// db.short_movie_info.findOne()
//
// exit
