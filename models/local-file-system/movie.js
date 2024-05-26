import { readJSON } from '../../utils.js'
import { randomUUID } from 'node:crypto'
const movies = readJSON('./movies.json')

export class MovieModel {
	static async getAll({ genre }) {
		if (genre) {
			const filteredMoves = movies.filter((movie) =>
				movie.genre.some(
					(g) => g.toLowerCase() === genre.toLowerCase()
				)
			)
			return filteredMoves
		}
		if (movies.length === 0) return false
		return movies
	}

	static async create({ data }) {
		const newMovie = {
			id: randomUUID(),
			...data,
		}
		movies.push(newMovie)
		return newMovie
	}

	static async delete({ id }) {
		const movieIndex = movies.findIndex((movie) => movie.id === id)
		if (movieIndex === -1) return false
		movies.splice(movieIndex, 1)
		return true
	}

	static async update({ id, data }) {
		const movieIndex = movies.findIndex((movie) => movie.id === id)
		if (movieIndex === -1) return false
		const updateMovie = {
			...movies[movieIndex],
			...data,
		}
		movies[movieIndex] = updateMovie
		return updateMovie
	}
}
