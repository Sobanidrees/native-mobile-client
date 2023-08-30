import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PRIMARY_COLOR_LIGHT } from '../../utils/colors';

const ServiceCategory = (props: any) => {
  return (
    // <View style={{ marginHorizontal: '2%' }}>
    <TouchableOpacity

      onPress={props.onPress}
      style={styles.service}>
      <Text style={styles.title}>
        {props.serviceName}
      </Text>
    </TouchableOpacity>
    // </View>
  );
};
export default ServiceCategory;
