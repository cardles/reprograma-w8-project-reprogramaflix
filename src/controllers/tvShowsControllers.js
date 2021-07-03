const tvShows = require("../models/series.json")

// config rota raiz

const home = (req, res) => {
    res.status(200).send({
        "name": "{reprograma}flix - seção séries",
        "message": "Siga as nossas rotas e formas de busca para encontrar suas séries favoritas!"
    })
}

const showAll = (req, res) => {
    res.status(200).send(tvShows)
}

const findByID = (req, res) => {
    const requestedID = req.params.id
    const findedID = tvShows.find(tvShow => tvShow.id === requestedID)
    res.status(200).send(findedID)
}

const findByTitle = (req, res) => {
    const requestedTitle = req.query.title.toLocaleLowerCase()
    const findedTitle = tvShows.filter(tvShow => tvShow.title.toLocaleLowerCase().includes(requestedTitle))
    res.status(200).send(findedTitle)
}

const findByGenre = (req, res) => {
    const requestedGenre = req.query.genre
    const findedGenre = tvShows.filter(tvShow => tvShow.genre.includes(requestedGenre))
    res.status(200).send(findedGenre)
}

module.exports = {
    home,
    showAll,
    findByID,
    findByTitle,
    findByGenre
}