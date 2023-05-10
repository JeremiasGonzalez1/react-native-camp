import { Movie, NowPlaying } from '../../domain/entities/Movie';
import { NetworkDataSource } from '../repositories/MovieRepository';
import BaseApi from '../services/BaseApi';
import SearchApi from '../services/SearchApi';

export class NetworkDataSourceImpl implements NetworkDataSource {

    async upComing(): Promise<Movie[]> {
        const upComing = await BaseApi.get<NowPlaying>("/upcoming")

        return upComing.data.results
    }


    async getFilmSearch(name: string): Promise<Movie[]> {
        const filmSearch = await SearchApi.get<NowPlaying>("", { params: { query: name } })

        return filmSearch.data.results
    }

    async getListNowPlaying(): Promise<Movie[]> {
        const nowPlaying = await BaseApi.get<NowPlaying>("/now_playing")

        return nowPlaying.data.results
    }


}