import React, { useEffect, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { assignedServiceRequest } from '../../redux/actions/serviceRequests';
import { unwrapResult } from '@reduxjs/toolkit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { styles } from './styles';
import HomeHeader from '../../components/homeHeader/homeHeader';
import ServiceRequest from '../../components/serviceRequest/serviceRequest';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const Home = ({ navigation }: Props) => {
  const [assignedSrs, setAssignedSrs] = useState<any>([]);

  const dispatch = useDispatch();
  const getServiceRequests = async () => {
    try {
      const resultAction = await dispatch<any>(assignedServiceRequest());
      const serviceRequests = unwrapResult(resultAction);
      // console.log('Service Requests:', serviceRequests.vehicle.make);
      setAssignedSrs(serviceRequests);
    } catch (error) {
      Alert.alert('Could not fetch service requests');
      console.error('Error fetching service requests:', error);
    }
  };

  useEffect(() => {
    getServiceRequests();
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader headerTitle="Home" navigation={navigation} />
      <View style={styles.scrollView}>
        <ScrollView style={{ marginBottom: 120 }} showsVerticalScrollIndicator={false}>
          {assignedSrs.length !== 0 && assignedSrs.map((item: any) => (
            <ServiceRequest
              key={item.id}
              carName={item.vehicle.make}
              inspectionType={item.packageType}
              timeAgo={'22 mins ago'}
              location={item.consumer.address}
              date={item.date}
              time={item.time}
              onPress={() => navigation.navigate('CarDetails')}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
