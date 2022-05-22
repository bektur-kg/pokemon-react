import {API} from "./api";


export const getAllPokemons = (LIMIT, OFFSET) => {
	return API.get(`pokemon?offset=${OFFSET}&limit=${LIMIT}`)
}

export const getSinglePokemon = (id) => {
	return API.get(`pokemon/${id}`)
		.then(r => r.json())

}