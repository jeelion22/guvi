
class Movie {
    constructor (title, studio, rating = "PG") {
        this.title = title ;
        this.studio = studio ;
        this.rating = rating
    }

    static getPG (...moviesArray) {
        let pgRatedMovies = [] ;
        for (let movie of moviesArray){
            if (movie.rating == "PG") {
                pgRatedMovies.push(movie)
            }
        }
        
        return pgRatedMovies
    }    
}

const m1 = new Movie("Casino Royale", "Eon Productions", "PG13") ;
const m2 = new Movie("Toy Story", "Pixar Animation Studios", "G") ;
const m3 = new Movie("Finding Nemo", "Pixar Animation Studios", "G") ;
const m4 = new Movie("Shrek", "DreamWorks Animation", "PG") ;
const m5 = new Movie("Frozen", "Walt Disney Animation Studios", "PG")

const pgMovies = Movie.getPG(m1, m2, m3, m4, m5)

console.log(pgMovies)

