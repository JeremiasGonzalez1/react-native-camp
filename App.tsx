import React from 'react'
import { HomeScreen } from './architecture/presentation/ui/homeScreen/HomeScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Style } from './architecture/presentation/style/style';
import { View } from 'react-native';

export const App = () => {
  return (
    <View style={Style.globalStyle}
    >
      <HomeScreen></HomeScreen>

    </View>
  )
}

export default App
