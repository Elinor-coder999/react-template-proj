// import { utilService } from './util.service.js'
// import { storageService } from './async-storage.service.js'

// const movie_KEY = 'movieDB'
// _createMovies()

// export const movieService = {
//     query,
//     get,
//     remove,
//     save,
//     getEmptyMovie,
//     getNextMovieId,
//     getFilterBy,
// }

// function query(filterBy = {}) {
//     return storageService.query(movie_KEY)
//         .then(movies => {
//             if (filterBy.txt) {
//                 const regex = new RegExp(filterBy.txt, 'i')
//                 movies = movies.filter(movie => regex.test(movie.vendor))
//             }
//             if (filterBy.minSpeed) {
//                 movies = movies.filter(movie => movie.maxSpeed >= filterBy.minSpeed)
//             }
//             return movies
//         })
// }

// function get(movieId) {
//     return storageService.get(movie_KEY, movieId)
// }

// function remove(movieId) {
//     return storageService.remove(movie_KEY, movieId)
// }

// function save(movie) {
//     if (movie.id) {
//         return storageService.put(movie_KEY, movie)
//     } else {
//         return storageService.post(movie_KEY, movie)
//     }
// }

// function getEmptyMovie(vendor = '', maxSpeed = 0) {
//     return { id: '', vendor, maxSpeed }
// }

// function getFilterBy() {
//     return { txt: '', minSpeed: 0 }
// }


// function getNextMovieId(movieId) {
//     return storageService.query(movie_KEY)
//         .then(movies => {
//             var idx = movies.findIndex(movie => movie.id === movieId)
//             if (idx === movies.length - 1) idx = -1
//             return movies[idx + 1].id
//         })
// }

// function _createMovies() {
//     let movies = utilService.loadFromStorage(movie_KEY)
//     if (!movies || !movies.length) {
//         movies = []
//         movies.push(_createMovie('audu', 300))
//         movies.push(_createMovie('fiak', 120))
//         movies.push(_createMovie('subali', 100))
//         movies.push(_createMovie('mitsu', 150))
//         utilService.saveToStorage(movie_KEY, movies)
//     }
// }

// function _createMovie(vendor, maxSpeed = 250) {
//     const movie = getEmptyMovie(vendor, maxSpeed)
//     movie.id = utilService.makeId()
//     return movie
// }