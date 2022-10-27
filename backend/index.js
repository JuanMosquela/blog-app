import express from 'express'
import cors from 'cors'
import "dotenv/config.js"
import routes from './routes/posts.js'
import dbConnection from './database/config.js'

const app = express()
dbConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use('/', routes)

app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
