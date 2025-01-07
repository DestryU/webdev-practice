import { z } from 'zod'
import { Character } from './model'

// Validator: Ensures incoming data meets the required structure and constraints.

export const characterSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .max(35, 'Name must be at most 35 characters')
        .regex(/^[a-zA-Z0-9\s.,'?!-]*$/, 'Name contains invalid characters'),
    race_name: z.string()
        .min(1, 'Race is required')
        .max(50, 'Race must be at most 50 characters')
        .regex(/^[a-zA-Z0-9\s.,'?!-]*$/, 'Race contains invalid characters'),
    class_name: z.string()
        .min(1, 'Class is required')
        .max(50, 'Class must be at most 50 characters')
        .regex(/^[a-zA-Z0-9\s.,'?!-]*$/, 'Class contains invalid characters'),
    level: z.number()
        .int()
        .min(1, 'Level must be at least 1')
        .max(20, 'Level must be at most 20'),
    backstory: z.string()
        .min(1, 'Backstory is required')
        .max(1000, 'Backstory must be at most 1000 characters')
        .regex(/^[a-zA-Z0-9\s.,'?!-]*$/, 'Backstory contains invalid characters'),
})

// Function to validate a character object against the characterSchema
export function validCharacter(character: Character) {
    try {
        // Attempt to parse the character object using the schema
        characterSchema.parse(character)
        // If parsing is successful, return an object indicating the character is valid
        return { isValid: true }
    } catch (error: unknown) {
        // If an error occurs during parsing, check if it is a ZodError
        if (error instanceof z.ZodError) {
            // If it is a ZodError, return an object indicating the character is invalid along with the first error message
            return { isValid: false, error: error.errors[0].message }
        } else {
            // If it is not a ZodError, return a generic error message
            return { isValid: false, error: 'An unexpected error occurred' }
        }
    }
}