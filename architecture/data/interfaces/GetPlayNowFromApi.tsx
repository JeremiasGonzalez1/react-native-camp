import { Movie, NowPlaying } from "../../domain/entities/Movie";

export interface GetPlayNowFromApi {
    getListNowPlaying(): Promise<NowPlaying>
}