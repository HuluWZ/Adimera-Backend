import { config } from "dotenv";

config();

export const MONGO_DB_CONNECTION =
  process.env.REMOTE_MONGO_DB_CONNECTION || "mongodb+srv://gazettadmin:gazettadmin@gazetta.gtzyt5u.mongodb.net/";
