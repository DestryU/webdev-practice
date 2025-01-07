import express from 'express'
import { addCharacterController } from './controller'


const router = express.Router()

router.post('/addCharacter', addCharacterController)

export default router