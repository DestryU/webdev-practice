import { isValid, z } from 'zod';

export const characterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    race_name: z.string().min(1, 'Race is required'),
    class_name: z.string().min(1, 'Class is required'),
    level: z.number().int().min(1, 'Level must be at least 1'),
    backstory: z.string().min(1, 'Backstory is required'),
})

export const validCharacter = (character: unknown) => {
    try {
        characterSchema.parse(character)
        return { isValid: true }
    } catch (error:unknown) {
        if (error instanceof z.ZodError) {
            return { isValid: false, error: error.errors[0].message }
        } else {
            return { isValid: false, error: 'An unexpected error occurred' }
        }
    }}