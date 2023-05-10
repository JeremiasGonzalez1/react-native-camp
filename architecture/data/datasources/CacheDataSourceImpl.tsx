import { Movie } from "../../domain/entities/Movie";
import { FakeMovieDBImpl, MovieDB } from "../ddbb/InmemoryDb";
import { CacheDataSource } from "../repositories/MovieRepository";


export class CacheDataSourceImpl implements CacheDataSource {

    readonly ddbb: MovieDB
    constructor(ddbb: MovieDB) {
        this.ddbb = ddbb
    }

    async getPlayNow(): Promise<Movie[]> {
        return this.ddbb.getListMovie()
    }

    async setPlayNow(list: Movie[]): Promise<Boolean> {
        return this.ddbb.setListMovie(list)
    }

}