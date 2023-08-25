
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screens/home/home';
import ProviderServiceHistory from '../src/screens/providerServiceHistory/providerServiceHistory';
import Notifications from '../src/screens/notifications/notifications';
import Profile from '../src/screens/profile/profile';

const Tab = createBottomTabNavigator<TabParams>();

export type TabParams = {

    Home: undefined;
    ProviderServiceHistory: undefined;
    Notifications: undefined;
    Profile: undefined;
};


const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="ProviderServiceHistory" component={ProviderServiceHistory} />
            <Tab.Screen options={{ headerShown: false }} name="Notifications" component={Notifications} />
            <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}
export default MyTabs
