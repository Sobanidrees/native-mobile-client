import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { ServicesArray } from '../../utils/constants';
import { PRIMARY_COLOR } from '../../utils/colors';
import Header from '../../components/header/header';

type Props = NativeStackScreenProps<RootStackParams, 'Inspection01'>;

const Inspection01 = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Header navigation={navigation} headerTitle="Inspect" />

      <ScrollView style={{ marginTop: '2%' }}>
        {ServicesArray.map(i => {
          return (
            <View key={i.id} style={{ marginHorizontal: '2%' }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceDetail', {
                    serviceName: i.serviceName,
                  })
                }
                style={{
                  // backgroundColor: PRIMARY_COLOR,
                  marginVertical: '2%',
                  padding: '5%',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: PRIMARY_COLOR
                }}>
                <Text style={{ fontSize: 18, fontWeight: '600', }}>
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

export default Inspection01;
