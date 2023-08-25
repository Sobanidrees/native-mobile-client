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
import Category from '../../components/category/category';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.providerName}>Talha Shabbir</Text>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image
              source={require('../../assets/images/setting.png')}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../../assets/images/power-off.png')}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
        <View style={styles.categoryView}>
          <Category
            catImg={require('../../assets/images/technology.png')}
            homeCat={'Start New inspection'}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <Category
            catImg={require('../../assets/images/bell-1.png')}
            homeCat={'Notification'}
            onPress={() => navigation.navigate('Notifications')}
          />
          <Category
            catImg={require('../../assets/images/document.png')}
            homeCat={'Completed Inspection'}
            onPress={() => navigation.navigate('ProviderServiceHistory')}
          />
        </View>
      </View> */}
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '2%',
          marginVertical: '2%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tools')}
          style={styles.subCat}>
          <Text style={styles.subText}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCat}>
          <Text style={styles.subText}>E-FYX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCat}>
          <Text style={styles.subText}>E-FYX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subCat}>
          <Text style={styles.subText}>Recent Inspection</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ServiceRequest
            carName={'Lamborghini'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Audi'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Ferrari'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
          <ServiceRequest
            carName={'Porsche'}
            dateTime={'14th August 10pm'}
            inspectionType={'Basic'}
            img={require('../../assets/images/carImg.png')}
            onPress={() => navigation.navigate('Inspection01')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
