import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import Header from '../../components/header';


type Props = NativeStackScreenProps<RootStackParams, 'UncommingInspections'>;


const UncommingInspections = ({ navigation }: Props) => {

  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView style={[styles.container]}>
      <Header navigation={navigation} headerTitle="Pending Services " />


    </SafeAreaView>
  );
};

export default UncommingInspections;
