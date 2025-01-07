import { supabase } from '../../supaClient'

export interface Character {
    id?: number
    name: string
    race_name: string
    class_name: string
    level: number
    backstory: string
}

export const addCharactertoDB = async (character: Character) => {
    const { name, race_name, class_name, level, backstory} = character

    const {data, error} = await supabase
    .from('characters')
    .insert([{ name, race_name, class_name, level, backstory }]);

    if (error) {
        throw new Error(error.message)
    }

    return data
}