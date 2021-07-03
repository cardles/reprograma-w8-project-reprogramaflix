// responsável por se comunicar com os dados (json ou banco de dados), gerenciar e exportar eles


// importanto dados dos filmes
const movies = require("../models/filmes.json") // cada ponto é como um passo, 1 corresponde a mesma pasta e 2 correspondem a pasta-mãe


// definindo a rota padrão -> página inicial do site (home)
const home = (request, response) => {
    response.status(200).send({
        "message": "Olá pessoa seja bem vindo ao {reprograma}flix"
    })
}


// buscando enviando todos os filmes
const getAll = (request, response) => {
    response.status(200).send(movies)
}


// buscando por ID 
const getByID = (request, response) => {
    const requestedID = request.params.id //pegando o request da rota
    const filteredID = movies.find(movie => movie.id == requestedID) //apenas "==" pois tem divergencias entre string (id -> json) e number

    response.status(200).send(filteredID)
}


// buscando for titulo
const getByTitle = (request, response) => {
    const requestedTitle = request.query.title.toLocaleLowerCase()
    const filteredTitle = movies.filter(movie => movie.title.toLocaleLowerCase().includes(requestedTitle)) //"includes" é um método que verifica se uma array tem ou não um determinado elemento, retornando boolean 

    if (filteredTitle == "" || filteredTitle == undefined) {
        response.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    } else {
        response.status(200).send(filteredTitle) 
    }

}


// buscando por genero
const getByGenre = (request, response) => {

    // acessar qual o gênero requisitado
    const requestedGenre = request.query.genre
    // criar lista para armazenar dados do loop
    let movieList = []

    // comparar todos os itens da lista que são daquele gênero
    movies.forEach(movie => {
        // separar elementos da lista "genre"
        let genreList = movie.genre.split(",")

        for (genre of genreList) {
            if (genre.toLocaleLowerCase().includes(requestedGenre.toLocaleLowerCase())) {

                movieList.push(movie) //inlcui na nova lista, "movieList", todas as informações do filme que corresponder ao genero requerido
            }
        }

    })

    // retornar a resposta
    response.status(200).send(movieList)
}



// exportando a const "home" dentro de um objeto
module.exports = {
    home, 
    getAll, 
    getByID, 
    getByTitle,
    getByGenre
}

