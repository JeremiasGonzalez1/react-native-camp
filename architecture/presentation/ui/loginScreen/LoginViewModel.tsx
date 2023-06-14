import { makeAutoObservable, runInAction } from "mobx";
import { Login, StatusUser } from '../../../domain/entities/User';
import { LoginUseCase } from '../../../domain/usecase/LoginUseCase';

export class LoginViewModel {

    private readonly loginUseCase: LoginUseCase

    constructor(useCase: LoginUseCase) {
        this.loginUseCase = useCase
        makeAutoObservable(this)
    }

    private _loginResponse: StatusUser = {
        expires: "",
        token: ""
    }
    public get loginResponse(): StatusUser {
        return this._loginResponse
    }
    private set loginResponse(status: StatusUser) {
        runInAction(() => this._loginResponse = status
        )
    }

    async fetchLogin(username: string, password: string) {
        const data: Login = {
            user: username,
            password: password
        }

        this.loginUseCase.invoke(data).then((status) => { this.loginResponse = status })
    }
}