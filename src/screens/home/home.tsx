import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParams } from '../../../routes/routeStack';
import { styles } from './styles';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';
import { ServicesArray } from '../../utils/constants';
import HomeHeader from '../../components/homeHeader/homeHeader';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <HomeHeader headerTitle="Home" navigation={navigation} />
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
export default Home;
