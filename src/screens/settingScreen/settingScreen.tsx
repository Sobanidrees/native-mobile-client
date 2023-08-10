import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { GREY } from '../../utils/colors';
import Header from '../../components/header';
import { windowHeight, windowWidth } from '../../utils/constants';


type Props = NativeStackScreenProps<RootStackParams, 'SettingScreen'>;


const SettingScreen = ({ navigation }: Props) => {


  return (
    <SafeAreaView style={[styles.container]}>
      <Header navigation={navigation} headerTitle="Settings" />


    </SafeAreaView>
  );
};

export default SettingScreen;
