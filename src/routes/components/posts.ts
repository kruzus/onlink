import {Request, Response} from "express"
import {pool} from "../connection/dbconnect";

export const Posts =  (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    async function getData(){
        const client = await pool.connect()
        
        try {
            const data =  (await client.query("SELECT * FROM posts")).rows
            res.json(data)
        } catch (e) {
            console.log(`ERROR FROM POSTS.TS ${e}`)
        } finally {
            client.release()
            res.status(404)
            // await pool.end()  
        } 

         
    }
    
    return getData()
  
}