import axios from 'axios'
import { Pokemon } from '../interfaces'


export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {

   // console.log('Hola mundo')
   // if (true) throw new Error('Auxilio')

   const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
   // console.log(data.abilities[1].ability)

   return data
}