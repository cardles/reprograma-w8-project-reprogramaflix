// importando o CONTROLE
const controllers = require("../controllers/tvShowsControllers")

// chamando o express
const express = require("express")

// executando/instanciando o Router (que existe dentro do express)
const router = express.Router()

// fazendo que quando for chamada a rota raiz, seja apresentado o que estiver disposto em HOME (tvShowsControllers.js)
router.get("/", controllers.home)

// rota raiz + /todos mostra todas as séries
router.get("/todos", controllers.showAll)

// pesquisar por TÍTULO
router.get("/titulo", controllers.findByTitle)

// pesquisar por GENERO
router.get("/genero", controllers.findByGenre)

// pesquisar por ID
router.get("/:id", controllers.findByID)




module.exports = router



