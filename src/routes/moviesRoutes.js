// importando a const "home" para criar a primeira rota
const controllers = require("../controllers/moviesControllers")

// chamando o "router"
const express = require("express")
const router = express.Router() //utilizado no lugar de "get"


// criando uma rota inicial/padrao -> localhost:3000/filmes/
router.get("/", controllers.home)

// rota para todos os filmes
router.get("/todos", controllers.getAll)


// rota para filtrados por título
router.get("/titulo", controllers.getByTitle)

// rota para filtrados por genero
router.get("/genero", controllers.getByGenre)

// rota para filtrados por ID
router.get("/:id", controllers.getByID)


// será importado no arquivo "app.js"
module.exports = router