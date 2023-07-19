import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../src/screens/splashScreen/splashScreen';
import LoginScreen from '../src/screens/loginScreen/loginScreen';
import SignUpScreen from '../src/screens/signUpScreen/signUpScreen';
import ForgotPassword from '../src/screens/forgotPasswordScreen/forgotPassword';
const Stack = createNativeStackNavigator();

export default function RoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
