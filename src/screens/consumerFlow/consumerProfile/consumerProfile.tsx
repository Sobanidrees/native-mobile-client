import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../../routes/routeStack';
import HomeHeader from '../../../components/homeHeader/homeHeader';
import ProfileText from '../../../components/rowText/profileText';
import PrimaryButton from '../../../components/primaryButton/primaryButton';
import {useDispatch} from 'react-redux';
import {consumerUpdate} from '../../../redux/actions/consumer';
import {unwrapResult} from '@reduxjs/toolkit';
import {GREY} from '../../../utils/colors';

type Props = NativeStackScreenProps<RootStackParams, 'ConsumerProfile'>;

const ConsumerProfile = ({navigation}: Props) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [consumer, setConsumer] = useState<any>();
  const dispatch = useDispatch();
  const updateConsumerInfo = (body: any) => {
    const updateParams = {
      fullName: fullName,
      address: address,
    };
    dispatch<any>(consumerUpdate(updateParams))
      .then(unwrapResult)
      .then((res: any) => {
        setConsumer(res);
        navigation.navigate('UpdateVehicle');
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <View style={[styles.container]}>
      <HomeHeader headerTitle="Profile" navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigation.navigate('UpdateVehicle')}
        style={{
          alignSelf: 'flex-end',
          marginRight: 14,
          marginTop: '8%',
        }}>
        <Text style={{fontSize: 14, color: GREY}}>Skip</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          alignSelf: 'center',
          marginVertical: '4%',
        }}>
        Create Your Profile
      </Text>
      <View style={styles.innerView}>
        <ProfileText
          value={fullName}
          onChange={setFullName}
          placeholder="Enter name"
        />
        <ProfileText
          value={address}
          onChange={setAddress}
          placeholder="Addres"
        />

        <PrimaryButton
          buttonTitle="Update"
          onPress={updateConsumerInfo}
          buttonStyle={{marginTop: '48%'}}
        />
      </View>
    </View>
  );
};

export default ConsumerProfile;
