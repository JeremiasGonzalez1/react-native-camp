import { Movie } from "../entities/Movie";

export interface SearchFilmRepository {
    searchFilm(name: string): Promise<Movie[]>
}