import React, {useState} from 'react';
import {ImageBackground, View, Text, ScrollView, TextInput} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import Header from '../../components/header/header';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import ProfileText from '../../components/rowText/profileText';

type Props = NativeStackScreenProps<RootStackParams, 'CarDetails'>;

const CarDetails = ({navigation}: Props) => {
  const [formData, setFormData] = useState({
    image: '',
    engineCapacity: '',
    color: '',
    vin: '',
    engineNo: '',
    registrationNo: '',
    milage: '',
    fuelType: '',
    transmissionType: '',
  });

  const handleInspection = () => {
    navigation.navigate('Inspection01');
  };
  return (
    <View style={[styles.container]}>
      <Header headerTitle="Car Details" />
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.innerView}>
            
            <ProfileText
              value={formData.engineCapacity}
              onChange={text =>
                setFormData({...formData, engineCapacity: text})
              }
              placeholder="Enter Year"
            />
            <ProfileText
              value={formData.color}
              onChange={text => setFormData({...formData, color: text})}
              placeholder="Color"
            />
            <ProfileText
              value={formData.vin}
              onChange={text => setFormData({...formData, vin: text})}
              placeholder="Vin"
            />
            <ProfileText
              value={formData.engineNo}
              onChange={text => setFormData({...formData, engineNo: text})}
              placeholder="Engine No."
            />
            <ProfileText
              value={formData.registrationNo}
              onChange={text =>
                setFormData({...formData, registrationNo: text})
              }
              placeholder="Registration No."
            />
            <ProfileText
              value={formData.milage}
              onChange={text => setFormData({...formData, milage: text})}
              placeholder="Milage"
            />
            <ProfileText
              value={formData.fuelType}
              onChange={text => setFormData({...formData, fuelType: text})}
              placeholder="Fuel Type"
            />
            <ProfileText
              value={formData.transmissionType}
              onChange={text =>
                setFormData({...formData, transmissionType: text})
              }
              placeholder="Transmission Type"
            />
          </View>
        </ScrollView>
      </View>
      <PrimaryButton
        buttonTitle="Start Inspection"
        onPress={handleInspection}
        buttonStyle={{marginBottom: '8%', position: 'absolute', bottom: 0}}
      />
    </View>
  );
};

export default CarDetails;
