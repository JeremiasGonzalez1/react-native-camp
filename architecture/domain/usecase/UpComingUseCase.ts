import { Movie } from "../entities/Movie";
import { UpcomingRepository } from "../interfaces/UpComingRepository";

export class UpComingUseCase implements UpComingUseCase {
    private readonly upComingRepository: UpcomingRepository
    constructor(upComingRepository: UpcomingRepository) {
        this.upComingRepository = upComingRepository
    }

    public invoke(): Promise<Movie[]> {

        return this.upComingRepository.moviesUpComing()
    }
}