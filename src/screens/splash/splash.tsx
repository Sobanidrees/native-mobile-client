import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';

type Props = NativeStackScreenProps<RootStackParams, 'Splash'>;

const Splash = ({navigation}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <Text style={styles.title}>EFYX</Text>;
};

export default Splash;
