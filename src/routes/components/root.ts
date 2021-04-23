import {Request, Response} from "express"

export const Root = (req: Request, res: Response) => {
  res.json({msg: "This is coming from root"})
}