import { Movie } from '../entities/Movie';
import { MovieRepository } from '../interfaces/MovieRepository';


export class GetPlayNowUseCase {
    private readonly repository: MovieRepository
    constructor(repository: MovieRepository) {
        this.repository = repository
    }

    async invoke(): Promise<Movie[]> {
        return await this.repository.getPlayNow()
    }

}