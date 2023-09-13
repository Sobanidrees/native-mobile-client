import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import {ServicesArray} from '../../utils/constants';
import HomeHeader from '../../components/homeHeader/homeHeader';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';

type Props = NativeStackScreenProps<RootStackParams, 'ProviderServiceHistory'>;

const ProviderServiceHistory = ({navigation}: Props) => {
  return (
    <View style={[styles.container]}>
      <HomeHeader headerTitle="Service History" navigation={navigation} />
      <View style={styles.scrollView}>
        <ScrollView
          style={{marginBottom: 120}}
          showsVerticalScrollIndicator={false}>
          {ServicesArray.map(i => {
            return (
              <ServiceRequest
                key={i.id}
                carName={'Lamborghini'}
                inspectionType={'Basic'}
                location={'Paragon City, Lahore'}
                date={'14th August'}
                time={'12:00pm'}
                img={require('../../assets/images/carImg.png')}
                onPress={() => navigation.navigate('CarDetails')}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProviderServiceHistory;
