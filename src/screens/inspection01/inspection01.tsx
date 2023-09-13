import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { ServicesArray } from '../../utils/constants';
import { PRIMARY_COLOR } from '../../utils/colors';
import Header from '../../components/header/header';
import ServiceCategory from '../../components/serviceCategory/serviceCategory';
import PrimaryButton from '../../components/primaryButton/primaryButton';

type Props = NativeStackScreenProps<RootStackParams, 'Inspection01'>;

const Inspection01 = ({ navigation }: Props) => {
  return (
    <View style={[styles.container]}>
      <Header headerTitle="Inspect" />
      <ScrollView style={{ marginTop: '2%' }}>
        {ServicesArray.map(i => {
          return (
            <ServiceCategory key={i.id} onPress={() =>
              navigation.navigate('ServiceDetail', {
                serviceName: i.serviceName,
              })}
              serviceName={i.serviceName} />
          );
        })}
      </ScrollView>
      <PrimaryButton onPress={{}} buttonTitle='Submit' buttonStyle={{ marginBottom: 30, width: '96%' }} />

    </View>
  );
};

export default Inspection01;
