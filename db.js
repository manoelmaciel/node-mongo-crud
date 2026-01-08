const { MongoClient, ObjectId } = require("mongodb");

let singleton;
const COLLECTION = "customers";

async function connect() {
	if(singleton) return singleton;

	const client = new MongoClient(process.env.MONGO_HOST);
	await client.connect();

	singleton = client.db(process.env.MONGO_DATABASE); // aqui foi o bug (MONG0_DATABASE) com zero em vez de O maiúsculo
	return singleton;
}

async function findAll() {
	const db = await connect();
	return db.collection(COLLECTION).find().toArray();
}

async function insert(customer) {
	const db = await connect();
  return db.collection(COLLECTION).insertOne(customer);
}

async function findOne(id) {
  const db = await connect();
  return db.collection(COLLECTION).findOne({_id: ObjectId.createFromHexString(id)});
}

async function update(id, customer) {
  const db = await connect();
  return db.collection(COLLECTION).updateOne({ _id: ObjectId.createFromHexString(id) },
    { $set: customer });
}

module.exports = { findAll, insert, findOne, update }
