import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProviderServiceHistory from '../src/screens/providerServiceHistory/providerServiceHistory';
import Notifications from '../src/screens/notifications/notifications';
import Inspection01 from '../src/screens/inspection01/inspection01';
import Tools from '../src/screens/tools/tools';
import Settings from '../src/screens/settings/settings';
import Otp from '../src/screens/otp/otp';
import ServiceDetail from '../src/screens/serviceDetail/serviceDetail';
import Services from '../src/screens/services/services';
import Home from '../src/screens/home/home';
import Login from '../src/screens/login/login';
import SignUp from '../src/screens/signUp/signUp';
import { Inspector } from '../src/models/inspector';

import Profile from '../src/screens/profile/profile';
import BottomTab from './bottomTab';
import DeciderWrapper from '../src/screens/deciderWrapper/deciderWrapper';
import CarDetails from '../src/screens/carDetails/carDetails';

const Stack = createNativeStackNavigator<RootStackParams>();

export type RootStackParams = {
  DeciderWrapper: undefined;
  Login: undefined;
  SignUp: undefined;
  BottomTab: undefined
  Home: undefined;
  ProviderServiceHistory: undefined;
  Notifications: undefined;
  Settings: undefined;
  Inspection01: undefined;
  Tools: undefined;
  Otp: {
    user: Inspector;
    phoneNumber: string
  };
  ServiceDetail: {
    serviceName: any;
  };
  Services: undefined;

  Profile: undefined;
  CarDetails: undefined;
};

export default function RoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DeciderWrapper" component={DeciderWrapper} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProviderServiceHistory"
          component={ProviderServiceHistory}
        />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Inspection01" component={Inspection01} />
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CarDetails" component={CarDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
