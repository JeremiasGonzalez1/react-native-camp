import { LoginRepository } from "../../data/repositories/LoginRepository"
import { Login, StatusUser } from "../entities/User"

export class LoginUseCase {
    private readonly repository: LoginRepository

    constructor(repository: LoginRepository) {
        this.repository = repository
    }

    async invoke(data: Login): Promise<StatusUser> {
        return await this.repository.login(data)
    }
}