import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../src/screens/loginScreen/loginScreen';
import SignUpScreen from '../src/screens/signUpScreen/signUpScreen';
import ForgotPassword from '../src/screens/forgotPasswordScreen/forgotPassword';
import SplashScreen from '../src/screens/splashScreen/splashScreen';
import HomeScreen from '../src/screens/homeScreen/homeScreen';
import CompletedInspections from '../src/screens/completedInspections/completedInspections';
import UncommingInspections from '../src/screens/upcommingInspections/upcommingInspection';
import NotificationScreen from '../src/screens/notificationScreen/notificationScreen';
import StartInspection from '../src/screens/startInspection/startInspection';
import ToolCheckList from '../src/screens/toolCheckList/toolCheckList';
import SettingScreen from '../src/screens/settingScreen/settingScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPassword: undefined;
  HomeScreen: undefined;
  CompletedInspections: undefined;
  UncommingInspections: undefined;
  NotificationScreen: undefined;
  SettingScreen: undefined;
  StartInspection: undefined;
  ToolCheckList: undefined;
};

export default function RoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="CompletedInspections"
          component={CompletedInspections}
        />
        <Stack.Screen
          name="UncommingInspections"
          component={UncommingInspections}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="StartInspection" component={StartInspection} />
        <Stack.Screen name="ToolCheckList" component={ToolCheckList} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
