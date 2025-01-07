import express, { Request, Response } from 'express'
import {supabase} from './supaClient'
//////////////////////////
import addCharacterRouter from './apis/addCharacter/router'


const server = express()
const port = 3000

server.use(express.json())

server.use('/api', addCharacterRouter)

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
