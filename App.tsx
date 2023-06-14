import 'react-native-gesture-handler';
import React from 'react'
import { HomeScreen } from './architecture/presentation/ui/homeScreen/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './architecture/presentation/navigation/Navigator';
import { LoginScreen } from './architecture/presentation/ui/loginScreen/LoginScreen';


export const App = () => {
  return (
    <NavigationContainer >
      <HomeScreen />
    </NavigationContainer>
  )
}

export default App
