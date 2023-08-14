import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import Header from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParams, 'ServiceDetail'>;

const ServiceDetail = ({route, navigation}: Props) => {
  const serviceName = route.params?.serviceName || '';

  return (
    <SafeAreaView style={[styles.container]}>
      <Header navigation={navigation} headerTitle={serviceName} />
    </SafeAreaView>
  );
};

export default ServiceDetail;
