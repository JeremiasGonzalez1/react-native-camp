import { OriginalLanguage } from "../../domain/entities/Movie";
import { Movie } from "../../domain/entities/Movie";

export interface MovieDB {
    getListMovie(): Promise<Movie[]>,
    setListMovie(list: Movie[]): Promise<Boolean>
}

export class FakeMovieDBImpl implements MovieDB {

    async setListMovie(list: Movie[]): Promise<Boolean> {
        if (list.length > 0) {
            this.movieList = list
            return true
        }
        return false
    }

    async getListMovie(): Promise<Movie[]> {
        return this.movieList
    }

    private movieList: Movie[] = [{
        adult: true,
        backdrop_path: "string",
        genre_ids: [1, 2, 3],
        id: 2,
        original_language: OriginalLanguage.En,
        original_title: "string",
        overview: "string",
        popularity: 3,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2
    },
    {
        adult: true,
        backdrop_path: "string",
        genre_ids: [1, 2, 3],
        id: 2,
        original_language: OriginalLanguage.En,
        original_title: "string",
        overview: "string",
        popularity: 3,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2
    },
    {
        adult: true,
        backdrop_path: "string",
        genre_ids: [1, 2, 3],
        id: 2,
        original_language: OriginalLanguage.Es,
        original_title: "string",
        overview: "string",
        popularity: 3,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2
    }
    ]

}

