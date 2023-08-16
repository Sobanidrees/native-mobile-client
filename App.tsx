import React, { useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import RoutesStack from './routes/routeStack';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }, []);

    return (
        <RoutesStack />
    );
};
export default App;