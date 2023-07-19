import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {styles} from './styles';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.inspectKar}>Inspectkar</Text>
    </View>
  );
};

export default SplashScreen;
