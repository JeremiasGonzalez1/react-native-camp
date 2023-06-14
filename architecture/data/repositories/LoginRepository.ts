import { Login, StatusUser } from "../../domain/entities/User"
import AsyncStorage from "@react-native-async-storage/async-storage"

export interface LoginDataSource {
    Login(data: Login): Promise<StatusUser>
}

export class LoginRepository {
    private readonly dataSource: LoginDataSource

    constructor(dataSource: LoginDataSource) {
        this.dataSource = dataSource
    }

    async login(data: Login) {

        const result = await this.dataSource.Login(data)

        const logged = await try {
            AsyncStorage.getItem('first_time')
        } catch (e) {
            console.log("error to read first time")
        }



        try {
            await AsyncStorage.setItem('token_value', result.token)
        } catch (e) {
            console.log("error to saving token user")
        }

        return result
    }

}