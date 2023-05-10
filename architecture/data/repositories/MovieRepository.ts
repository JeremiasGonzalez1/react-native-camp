import { Movie, NowPlaying } from "../../domain/entities/Movie";
import { MovieRepository } from "../../domain/interfaces/MovieRepository";
import { SearchFilmRepository } from "../../domain/interfaces/SearchFilmRepository";
import { UpcomingRepository } from "../../domain/interfaces/UpComingRepository";

export interface NetworkDataSource {
    getListNowPlaying(): Promise<Movie[]>
    getFilmSearch(name: string): Promise<Movie[]>
    upComing(): Promise<Movie[]>
}

export interface CacheDataSource {
    getPlayNow(): Promise<Movie[]>,
    setPlayNow(list: Movie[]): Promise<Boolean>
}

export class MovieRepositoryImpl implements MovieRepository, SearchFilmRepository, UpcomingRepository {

    private readonly networkDataSource: NetworkDataSource
    private readonly cacheDataSource: CacheDataSource
    constructor(cacheDataSource: CacheDataSource, networkDataSource: NetworkDataSource) {
        this.networkDataSource = networkDataSource
        this.cacheDataSource = cacheDataSource
    }

    moviesUpComing(): Promise<Movie[]> {
        return this.networkDataSource.upComing()
    }


    searchFilm(name: string): Promise<Movie[]> {
        return this.networkDataSource.getFilmSearch(name)
    }


    async getPlayNow(): Promise<Movie[]> {

        if (false) {
            return this.cacheDataSource.getPlayNow()
        }

        return this.networkDataSource.getListNowPlaying()

    }

}