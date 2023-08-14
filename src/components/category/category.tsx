import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Category = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={props.catImg} style={{height: 60, width: 60}} />
      <Text style={styles.title}>{props.homeCat}</Text>
    </TouchableOpacity>
  );
};
export default Category;
