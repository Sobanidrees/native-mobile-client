import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { WHITE } from '../../utils/colors';

const ServiceRequest = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.requestView}>
      <View style={{ flexDirection: 'row' }}>
        <ImageBackground style={styles.imgView} source={props.img} />
        <View style={styles.detailView}>
          <Text style={styles.carName}>{props.carName}</Text>
          <Text style={{}}>Type: {props.inspectionType}</Text>
          <Text style={{}}>Inspection Time: {props.dateTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceRequest;
