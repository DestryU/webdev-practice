import { Request, Response } from "express"
import { addCharactertoDB, Character } from "./model"
import { validCharacter } from "./validator"

export const addCharacterController = async (req: Request, res: Response): Promise<any> => {

    const character: Character = req.body
    const validation = validCharacter(character)

    if (!validation.isValid) {
        return res.status(400).json({error: validation.error})
    }

    try {
        const data = await addCharactertoDB(character)
        res.status(201).json({message: 'Character was successfully added', data})
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
}