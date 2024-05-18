import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
	res.json({ message: 'Hello, World!' })
})

// Todos los recursos que sean movies se identifican con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log('Server is running on port', PORT)
})
