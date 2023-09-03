import mongoose from "mongoose";
//@ts-ignore
let db;

connect();

async function connect() {

  mongoose.set('strictQuery', true)
    //@ts-ignore
  if (db) return db;

  if (process.env.NODE_ENV === "production") {
    //@ts-ignore
    db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      dbName:'gold-building-btp'
    });
  } else {
    // in development, need to store the db connection in a global variable
    // this is because the dev server purges the require cache on every request
    // and will cause multiple connections to be made
    //@ts-ignore
    if (!global.__db) {
        //@ts-ignore
      global.__db = await mongoose.connect('mongodb://127.0.0.1:27017/goldbuilding');
    }
    //@ts-ignore
    db = global.__db;
  }
  return db;
}

export { mongoose, connect };