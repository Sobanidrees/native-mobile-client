import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import LinearGradient from 'react-native-linear-gradient';


type Props = NativeStackScreenProps<RootStackParams, 'SplashScreen'>;

const SplashScreen = ({ navigation }: Props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient start={{ x: -0.5, y: -0.9 }} colors={['#008080', '#d8eeef']} style={styles.container}>
      <Text style={styles.inspectKar}>EFYX</Text>
    </LinearGradient>
  );
};

export default SplashScreen;
