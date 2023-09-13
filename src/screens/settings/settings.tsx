import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import Header from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParams, 'Settings'>;

const Settings = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Header headerTitle="Settings" />
    </SafeAreaView>
  );
};

export default Settings;
