import { Movie } from "../entities/Movie";

export interface UpcomingRepository {
    moviesUpComing(): Promise<Movie[]>
}