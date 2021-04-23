//lol
import express, {Request, Response, Router} from "express"
const router = Router()

//Componetns
import {Root} from "./components/root"
import {Posts} from "./components/posts"

router.get('/', Root)

//TEST
router.get('/api/data', Posts)


export {router}