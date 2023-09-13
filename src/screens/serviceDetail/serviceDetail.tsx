import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import Header from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParams, 'ServiceDetail'>;

const ServiceDetail = ({route}: Props) => {
  const serviceName = route.params?.serviceName || '';

  return (
    <View style={[styles.container]}>
      <Header headerTitle={serviceName} />
    </View>
  );
};

export default ServiceDetail;
