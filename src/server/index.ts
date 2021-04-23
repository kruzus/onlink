import express, { Application, Request, Response } from "express"

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.send("Working fine baby boy")
})

app.listen(5000, ():void => {
    console.log("Server is live boys")
})