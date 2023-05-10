import { Movie, OriginalLanguage } from "../../../domain/entities/Movie";
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
    }


    public getPlayNow(): Movie[] {

        this.playNowUseCase.invoke().then((value: Movie[]) => { console.log(JSON.stringify(value)) })

        return []
    }

    public getFilmSearch(name: string): Movie[] {


        this.searchFilmUseCase.invoke(name).then((value: Movie[]) => { console.log(JSON.stringify(value, null, 3)) })

        return []
    }

    public getUpComing(): Movie[] {

        this.upComingUseCase.invoke().then((value: Movie[]) => { console.log(JSON.stringify(value, null, 3)) })
        return []
    }
}
