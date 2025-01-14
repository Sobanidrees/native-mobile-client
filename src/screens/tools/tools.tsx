import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import Header from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParams, 'Tools'>;

const Tools = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Header headerTitle="Tool CheckList" />
    </SafeAreaView>
  );
};

export default Tools;
