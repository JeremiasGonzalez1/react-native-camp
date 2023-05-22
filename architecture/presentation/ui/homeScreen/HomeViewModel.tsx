import { makeAutoObservable } from "mobx";
import { Movie, OriginalLanguage, NowPlaying } from '../../../domain/entities/Movie';
import { GetPlayNowUseCase } from "../../../domain/usecase/GetPlayNowUseCase";
import { SearchFilmUseCase } from '../../../domain/usecase/SearchFilmUseCase';
import { UpComingUseCase } from '../../../domain/usecase/UpComingUseCase';

export class HomeViewModel {

    private readonly playNowUseCase: GetPlayNowUseCase
    private readonly searchFilmUseCase: SearchFilmUseCase
    private readonly upComingUseCase: UpComingUseCase

    constructor(playNowUseCase: GetPlayNowUseCase, searchfilmUseCase: SearchFilmUseCase, upComingUseCase: UpComingUseCase) {
        this.playNowUseCase = playNowUseCase
        this.searchFilmUseCase = searchfilmUseCase
        this.upComingUseCase = upComingUseCase
        makeAutoObservable(this)
    }

    private _nowPlaying: Movie[] = []
    public get nowPlaying(): Movie[] {
        return this._nowPlaying
    }
    private set nowPlaying(movie: Movie[]) {
        this._nowPlaying = movie
    }

    
    private _upComing: Movie[] = []
    public get upcoming(): Movie[] {
        return this._upComing
    }
    private set upComing(movie: Movie[]) {
        this._upComing = movie
    }


    public getPlayNow() {

        this.playNowUseCase.invoke().then((movie: Movie[]) => { this.nowPlaying = movie })

    }

    public getFilmSearch(name: string): Movie[] {


        this.searchFilmUseCase.invoke(name).then((value: Movie[]) => { console.log(JSON.stringify(value, null, 3)) })

        return []
    }

    public getUpComing() {
        this.upComingUseCase.invoke().then((movie: Movie[]) => { this.upComing = movie })
    }
}
