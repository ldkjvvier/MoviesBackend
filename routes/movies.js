import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const moviesRouter = Router()

// Obtener todas las peliculas
moviesRouter.get('/', MovieController.getAll)
// Obtener pelicula por ID
moviesRouter.get('/:id', MovieController.getById)
// Subir pelicula
moviesRouter.post('/', MovieController.create)
// Modificar pelicula
moviesRouter.patch('/:id', MovieController.update)
// Borrar una pelicula
moviesRouter.delete('/:id', MovieController.delete)
