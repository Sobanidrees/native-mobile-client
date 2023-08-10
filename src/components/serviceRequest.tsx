import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PRIMARY_COLOR, SOLID_BLACK, WHITE } from '../utils/colors';
import { windowWidth } from '../utils/constants';

const ServiceRequest = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.requestView}>
      <View style={{ flexDirection: 'row' }}>
        <ImageBackground style={styles.imgView} source={props.img} />
        <View style={styles.detailView}>
          <Text style={styles.carName}>{props.carName}</Text>
          <Text>Type: {props.inspectionType}</Text>
          <Text>Inspection Time: {props.dateTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceRequest;

const styles = StyleSheet.create({
  requestView: {
    height: 100,
    width: windowWidth * 0.94,
    backgroundColor: WHITE,
    marginVertical: '2%',
    borderRadius: 12,
  },
  imgView: {
    height: 100,
    width: 100,
    //   backgroundColor: 'green',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  detailView: { justifyContent: 'center', marginHorizontal: 10 },
  carName: {
    fontSize: 18,
    color: PRIMARY_COLOR,
  },
});
