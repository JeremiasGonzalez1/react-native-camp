import { Movie } from "../entities/Movie";

export interface MovieRepository {
    getPlayNow(): Promise<Movie[]>
}