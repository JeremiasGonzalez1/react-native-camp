import { Movie } from "../entities/Movie"
import { SearchFilmRepository } from "../interfaces/SearchFilmRepository"


export class SearchFilmUseCase {

    private readonly searchFilm: SearchFilmRepository

    constructor(searchFilm: SearchFilmRepository) {
        this.searchFilm = searchFilm
    }

    public invoke(name: string): Promise<Movie[]> {
        return this.searchFilm.searchFilm(name)
    }
}