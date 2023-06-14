import { createStackNavigator } from '@react-navigation/stack';
import { Step1 } from '../ui/onBoarding/Step1';
import { LoginScreen } from '../ui/loginScreen/LoginScreen';
import { HomeScreen } from '../ui/homeScreen/HomeScreen';
import { RegisterScreen } from '../ui/registerScreen/RegisterScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}
