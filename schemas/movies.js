import z from 'zod'

const movieSchema = z.object({
	title: z.string({
		invalid_type_error: 'Title must be a string',
		required_error: 'Title is required',
	}),
	year: z.number().int().min(1900).max(2025),
	director: z.string(),
	duration: z.number().int().positive(),
	rate: z.number().min(0).max(10).default(5),
	poster: z.string().url({
		message: 'Poster must be a valid URL',
	}),
	genre: z.array(
		z.enum(
			[
				'Action',
				'Adventure',
				'Comedy',
				'Drama',
				'Fantasy',
				'Horror',
				'Mystery',
				'Thriller',
				'Western',
				'Biography',
			],
			{
				required_error: 'Genre is required',
				invalid_type_error: 'Genre must be a string',
			}
		)
	),
	description: z.string().min(10),
	type: z.enum(['movie', 'series', 'miniserie'], {
		required_error: 'Type is required',
		invalid_type_error: 'Type must be a string',
	}
	),
	age: z.enum(['all', '7', '12', '16', '18'], {
		required_error: 'Age is required',
		invalid_type_error: 'Age must be a string',
	}),
})



export function validateMovie(input) {
	return movieSchema.safeParse(input)
}

export function validatePartialMovie(input) {
	return movieSchema.partial().safeParse(input)
}
