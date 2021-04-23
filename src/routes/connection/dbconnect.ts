//COnnecting to database.
import {Pool} from "pg"



//wait for it
// import dotenv from "dotenv"
// dotenv.config()



//CHANGE THIS TO .ENV IN PROD
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reviews',
  password: 'skoozle',
  port: 5432,
})



