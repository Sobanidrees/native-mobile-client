import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ServiceCategory = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.service}>
      <Text style={styles.title}>{props.serviceName}</Text>
    </TouchableOpacity>
  );
};
export default ServiceCategory;
