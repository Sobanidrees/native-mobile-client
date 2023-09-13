import React, { useEffect } from 'react';
import RoutesStack from './routes/routeStack';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={Store}>
      <RoutesStack />
    </Provider>
  );
};
export default App;
