import express, { Application} from "express"

//more work...
import helmet from "helmet"
import bodyParser = require("body-parser")
import morgan from "morgan"
import cors from "cors"
import compression from "compression"
require('dotenv').config()
const PORT = process.env.DB_SERVERPORT || 6969;
import {pool} from "../routes/connection/dbconnect";
import {router} from "../routes/"

const app: Application = express();

// app.use(compression())
app.use(helmet())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cors())
app.use(bodyParser.json());
app.use(router)



app.listen(PORT, (): void => {
    console.log(`Server Live at: ${PORT}`)
})