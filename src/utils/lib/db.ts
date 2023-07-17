import mongoose, { mongo } from "mongoose";

let connection: typeof mongoose;

const url = process.env.NEXT_DATABASE_URL as string;

const startDb = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
}

export default startDb;