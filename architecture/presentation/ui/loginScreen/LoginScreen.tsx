import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Background } from '../../components/Background';
import { Logo } from '../../components/GlobalScreen/Logo';
import { useForm } from '../../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { LoginViewModel } from './LoginViewModel';
import { LoginUseCase } from '../../../domain/usecase/LoginUseCase';
import { LoginRepository } from '../../../data/repositories/LoginRepository';
import { LoginDataSourceImpl } from '../../../data/datasources/LoginDatasourceImpl';
import { observer } from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface Props extends StackScreenProps<any, any> { }


export const LoginScreen = (navigation: Props) => {

    const datasource = new LoginDataSourceImpl()
    const repositiry = new LoginRepository(datasource)
    const useCase = new LoginUseCase(repositiry)
    const viewModel = new LoginViewModel(useCase)

    useEffect(() => {
        navigation.navigation.setOptions({ headerShown: false })
    },)

    return (
        <LoginView viewModel={viewModel} navigation={navigation} />
    )
}

interface PropsView {
    viewModel: LoginViewModel,
    navigation: StackScreenProps<any, any>
}

const LoginView = observer(({ viewModel, navigation }: PropsView) => {

    const { user, password, onChange } = useForm({
        user: "",
        password: ""
    })

    useEffect(() => {
        AsyncStorage.getItem('token_value').then(token => {
            console.log(token)
        })
    }, [])

    useEffect(() => {
    },)
    

    return (
        <>
            {/* Background */}
            <Background />

            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styleLogin.formContainer}>

                    {/* Logo */}
                    <Logo logoPath={require('../../assets/pngs/Frame-2357.png')} width={125} height={110} />

                    <Text style={{ color: "white" }}>
                        el token vence:
                        {viewModel.loginResponse.token}
                    </Text>

                    {/* INPUT user */}
                    <Text style={styleLogin.labels}>User</Text>
                    <TextInput
                        style={[
                            styleLogin.inputField,
                            (Platform.OS === 'ios') && styleLogin.inputeFieldIos
                        ]}
                        placeholder='Ingrese su email:'
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        keyboardType='email-address'
                        underlineColorAndroid={"white"}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value) => onChange(value, "user")}
                        value={user}
                    />

                    {/* INPUT password */}
                    <Text style={styleLogin.labels}>Password:</Text>
                    <TextInput
                        style={[
                            styleLogin.inputField,
                            (Platform.OS === 'ios') && styleLogin.inputeFieldIos
                        ]}
                        secureTextEntry={true}
                        placeholder='******'
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        underlineColorAndroid={"white"}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value) => onChange(value, "password")}
                        value={password}
                    />

                    {/* BTN login */}
                    <View style={styleLogin.btnContainer}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styleLogin.btnLogin}
                            onPress={() => { viewModel.fetchLogin(user, password) }} >
                            <Text style={styleLogin.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* BTN register */}
                    <View style={styleLogin.btnNewUsercontainer}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.replace("RegisterScreen")}>
                            <Text style={styleLogin.buttonText}>Nueva cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </KeyboardAvoidingView>

        </>
    )
})

export const styleLogin = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    login: {
        color: "#2BB157",
        fontSize: 30,
        fontWeight: '700',
        marginTop: 42
    },
    labels: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 35
    },
    inputField: {
        color: "white",
        fontSize: 20
    },
    inputeFieldIos: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    btnContainer: {
        alignItems: "center",
        marginTop: 50
    },
    btnLogin: {
        borderWidth: 2,
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        color: "#2BB157",
        fontSize: 18
    },
    btnNewUsercontainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    buttonReturn: {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }
})
