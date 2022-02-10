// Inicializamos express
const express = require('express')
const app = express()

// Middlewares para trabajar con JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Primera ruta, Hola mundo express
app.get('/', (req, res) => {
  res.send('Hello world!')
})


// Lanzamos el server
app.listen(8000, () => {
  console.log('listening on http://localhost:8000')
})