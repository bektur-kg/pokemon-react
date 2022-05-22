const BASE_URL = 'https://pokeapi.co/api/v2'

export const API = {
	get: (route) => {
		return fetch(`${BASE_URL}/${route}`)
	}
}