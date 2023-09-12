import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../../routes/routeStack';
import {styles} from './styles';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';
import {ServicesArray} from '../../utils/constants';
import HomeHeader from '../../components/homeHeader/homeHeader';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <HomeHeader headerTitle="Home" navigation={navigation} />
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
                timeAgo={'5 min ago'}
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
export default Home;
