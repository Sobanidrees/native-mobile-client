import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import Header from '../../components/header/header';
import { ServicesArray } from '../../utils/constants';
import { PRIMARY_COLOR } from '../../utils/colors';
import HomeHeader from '../../components/homeHeader/homeHeader';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';

type Props = NativeStackScreenProps<RootStackParams, 'ProviderServiceHistory'>;

const ProviderServiceHistory = ({ navigation }: Props) => {
  return (
    <View style={[styles.container]}>
      <HomeHeader headerTitle="Your Previous Service History" navigation={navigation} />
      <View style={styles.scrollView}>
        <ScrollView
          style={{ marginBottom: 120 }} showsVerticalScrollIndicator={false}>

          {ServicesArray.map((i) => {
            return (
              <ServiceRequest
                key={i.id}
                carName={'Lamborghini'}
                dateTime={'14th August 10pm'}
                inspectionType={'Basic'}
                img={require('../../assets/images/carImg.png')}
                onPress={() => navigation.navigate('Inspection01')}
              />
            )
          })}

        </ScrollView>
      </View>
    </View>
  );
};

export default ProviderServiceHistory;
