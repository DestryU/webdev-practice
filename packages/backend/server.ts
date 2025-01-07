import express, { Request, Response } from 'express'
import cors from 'cors'
//////////////////////////
import addCharacterRouter from './apis/addCharacter/router'


const server = express()
const port = 5000

server.use(cors())
server.use(express.json())

server.use('/api', addCharacterRouter)

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
