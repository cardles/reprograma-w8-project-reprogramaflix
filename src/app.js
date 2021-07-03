// importando express
const express = require("express");

// instanciado o express
const app = express();


// ----- FILMES ----- //
// chamar as rotas FILMES
const movies = require("./routes/moviesRoutes")

// definir a rota raiz/PRINCIPAL
app.use("/filmes", movies)


// ----- SÉRIES ----- //
// chamar as rotas SÉRIES
const tvShows = require("./routes/tvShowsRoutes")
// definir a rota raiz
app.use("/series", tvShows)




// exportanto a const "app" para importar em "server.js"
module.exports = app