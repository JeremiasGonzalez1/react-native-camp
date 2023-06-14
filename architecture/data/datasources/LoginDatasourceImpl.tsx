import { Login, StatusUser } from '../../domain/entities/User';
import { LoginDataSource } from "../repositories/LoginRepository";
import { BackendApi } from "../services/BackendApi";

export class LoginDataSourceImpl implements LoginDataSource {
    async Login(data: Login): Promise<StatusUser> {
        const objet = `{
            "username": "${data.user}",
            "password": "${data.password}"
        }`
        try {
            const result = await BackendApi.post<StatusUser>("/gymbro/login", objet)
            return result.data
        } catch (exception) {
            console.log(exception);
            return {
                token: "",
                expires: ""
            }
        }


    }

}