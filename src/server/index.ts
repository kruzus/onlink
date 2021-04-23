import express, { Application, Request, Response } from "express"

import {pool} from "../connection/dbconnect";


const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    pool.query('SELECT * FROM accounts',  (err, query) => {
        const data = query.rows;
        
        res.json(data)

        pool.end()
      })
})



app.listen(5000, ():void => {
    console.log("Server is live boys")
})