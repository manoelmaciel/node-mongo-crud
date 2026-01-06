const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {
	if(singleton) return singleton;

	const client = new MongoClient(process.env.MONGO_HOST);
	await client.connect();

	singleton = client.db(process.env.MONG0_DATABASE);
	// console.log(process.env.MONGO_DATABASE);
	return singleton;
}

const COLLECTION = "contacts";

async function findAll() {
	const db = await connect();
	// console.log(db);
	// await console.log(db.collection(COLLECTION).find().toArray());
	return db.collection(COLLECTION).find().toArray();
}

module.exports = { findAll }
