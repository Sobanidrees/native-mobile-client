import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes/routeStack';
import HomeHeader from '../../components/homeHeader/homeHeader';
import ProfileText from '../../components/rowText/profileText';
import PrimaryButton from '../../components/primaryButton/primaryButton';

type Props = NativeStackScreenProps<RootStackParams, 'Profile'>;

const Profile = ({navigation}: Props) => {
  const [name, setName] = useState('Talha Shabbir');
  const [designation, setDesignation] = useState('HG-329821-3');
  const [phoneNumber, setPhoneNumber] = useState('+92-3202919700');

  return (
    <View style={[styles.container]}>
      <HomeHeader headerTitle="Profile" navigation={navigation} />
      <View style={styles.innerView}>
        <ImageBackground
          style={styles.profileImage}
          source={require('../../assets/images/profileImage.png')}
        />
        <ProfileText placeholder="" value={name} onChange={setName} />
        <ProfileText
          placeholder=""
          value={designation}
          onChange={setDesignation}
        />
        <ProfileText
          placeholder=""
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <PrimaryButton
          buttonTitle="Submit"
          onPress={{}}
          buttonStyle={{marginTop: '40%'}}
        />
      </View>
    </View>
  );
};

export default Profile;
