import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { ServicesArray } from '../../utils/constants';
import { PRIMARY_COLOR } from '../../utils/colors';
import Header from '../../components/header';

type Props = NativeStackScreenProps<RootStackParams, 'StartInspection'>;

const StartInspection = ({ navigation }: Props) => {
  const [number, onChangeNumber] = useState('');



  return (
    <SafeAreaView style={[styles.container]}>
      <Header navigation={navigation} headerTitle="Inspect" />

      <ScrollView style={{ marginTop: '2%' }}>
        {ServicesArray.map(i => {
          return (
            <View key={i.id} style={{ marginHorizontal: '2%' }}>
              <TouchableOpacity

                onPress={() => navigation.navigate('ServiceScreen', {
                  serviceName: i.serviceName,
                })}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  marginVertical: '2%',
                  padding: '5%',
                  borderRadius: 10,
                }}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
                  {i.serviceName}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartInspection;
