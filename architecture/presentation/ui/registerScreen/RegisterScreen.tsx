import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { styleLogin } from '../loginScreen/LoginScreen';
import { Logo } from '../../components/GlobalScreen/Logo';
import { TextInput } from 'react-native';
import { useForm } from '../../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  },)

  const { email, password, name, onChange } = useForm({
    name: "",
    email: "",
    password: ""
  })

  const onRegister = () => {
    console.log({ email, password, name })
    Keyboard.dismiss()
  }

  return (
    <>

      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#161616" }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styleLogin.formContainer}>

          {/* Logo */}
          <Logo logoPath={require('../../assets/pngs/Frame-2357.png')} width={125} height={110} />

          <Text style={styleLogin.labels}>Name</Text>

          <TextInput
            style={[
              styleLogin.inputField,
              (Platform.OS === 'ios') && styleLogin.inputeFieldIos
            ]}
            placeholder='Ingrese su nombre:'
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            keyboardType='email-address'
            underlineColorAndroid={"white"}
            autoCorrect={false}
            autoCapitalize='words'
            onChangeText={(value) => onChange(value, "email")}
            value={email}
            onSubmitEditing={onRegister}
          />

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
            onChangeText={(value) => onChange(value, "email")}
            value={email}
            onSubmitEditing={onRegister}
          />

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
            onSubmitEditing={onRegister}
          />

          {/* BTN login */}
          <View style={styleLogin.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styleLogin.btnLogin}
              onPress={onRegister} >
              <Text style={styleLogin.buttonText}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.replace("LoginScreen")}
            activeOpacity={0.8}
            style={styleLogin.buttonReturn}
          >
            <Text style={{ ...styleLogin.buttonText, color: "white" }}>
              Login
            </Text>

          </TouchableOpacity>
        </View >
      </KeyboardAvoidingView>

    </>
  )
}
