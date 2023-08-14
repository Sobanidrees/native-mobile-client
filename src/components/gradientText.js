import React from 'react';
import {Text} from 'react-native';

const GradientText = props => {
  return (
    <Text {...props} style={[props.style, {opacity: 0}]} />
  );
};

export default GradientText;
