import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../../routes/routeStack';
import {styles} from './styles';
import HomeHeader from '../../../components/homeHeader/homeHeader';

type Props = NativeStackScreenProps<RootStackParams, 'ConsumerHome'>;

const ConsumerHome = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <HomeHeader headerTitle="Home" navigation={navigation} />
      <View style={styles.scrollView}></View>
    </View>
  );
};
export default ConsumerHome;
