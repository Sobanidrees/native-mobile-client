import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { PRIMARY_COLOR_LIGHT, WHITE } from '../src/utils/colors';
import { HOME_ICON, RECENT_ICON, PROFILE_ICON } from '../src/utils/assets';
import Home from '../src/screens/home/home';
import ProviderServiceHistory from '../src/screens/providerServiceHistory/providerServiceHistory';
import Notifications from '../src/screens/notifications/notifications';
import Profile from '../src/screens/profile/profile';

const Tab = createBottomTabNavigator<TabParams>();

export type TabParams = {
    Home: undefined;
    ProviderServiceHistory: undefined;
    Profile: undefined;
};

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: PRIMARY_COLOR_LIGHT,
                    position: 'absolute',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? HOME_ICON : HOME_ICON;
                    } else if (route.name === 'ProviderServiceHistory') {
                        iconName = focused ? RECENT_ICON : RECENT_ICON;
                    } else if (route.name === 'Profile') {
                        iconName = focused ? PROFILE_ICON : PROFILE_ICON;
                    }

                    return (
                        <SvgXml
                            xml={iconName}
                            style={{
                                height: 25,
                                width: 25,
                                resizeMode: 'contain',
                            }}
                        />
                    );
                },
                tabBarLabel: () => null,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ProviderServiceHistory" component={ProviderServiceHistory} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default MyTabs;