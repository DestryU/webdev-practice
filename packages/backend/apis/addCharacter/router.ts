import express from 'express'
import { addCharacterController } from './controller'

// Router: Defines the API endpoints and maps them to controller functions.

/*
    Creates a new router object to handle routes for adding a character.
    This router will be used to define the endpoints and their handlers
    for the add character functionality in the backend API.
*/
const router = express.Router()

/*
    Define the POST endpoint for adding a character
    When a POST request is made to '/addCharacter', the addCharacterController
    function will be called to handle the request.
    This path can be anything you want, but it should be unique and descriptive.
*/
router.post('/addCharacter', addCharacterController)

export default router