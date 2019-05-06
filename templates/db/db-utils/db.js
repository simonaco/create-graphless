const MongoClient = require('mongodb').MongoClient
const auth = {
  user: process.env.user,
  password: process.env.password,
}
let db = null
const loadDB = async () => {
  if (db) {
    return db
  }
  const client = await MongoClient.connect(
    `mongodb://${process.env.user}.documents.azure.com:${
      process.env.port
    }/?ssl=true`,
    {
      auth: auth,
    }
  )
  db = client.db(process.env.database)
  return db
}

module.exports.loadDB = loadDB