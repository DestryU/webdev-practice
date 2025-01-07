import { supabase } from '../../supaClient'

/*
    Represents a character in the system.

    @property {number} [id] - The unique identifier of the character. Optional field.
    @property {string} name - The name of the character.
    @property {string} race_name - The race of the character.
    @property {string} class_name - The class of the character.
    @property {number} level - The level of the character.
    @property {string} backstory - The backstory of the character.
*/
export interface Character {
    id?: number;
    name: string;
    race_name: string;
    class_name: string;
    level: number;
    backstory: string;
}

/*
    Adds a character to the database.

    @param {Character} character - The character object containing the following properties:
    @param {string} character.name - The name of the character.
    @param {string} character.race_name - The race of the character.
    @param {string} character.class_name - The class of the character.
    @param {number} character.level - The level of the character.
    @param {string} character.backstory - The backstory of the character.
    
    @returns {Promise<any>} The data returned from the database after insertion.
    
    @throws {Error} If there is an error inserting the character into the database.
*/

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