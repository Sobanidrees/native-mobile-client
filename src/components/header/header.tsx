import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { styles } from './styles';

type Props = {
  navigation: any;
  headerTitle: any;
};

const Header = ({ navigation, headerTitle }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}></TouchableOpacity>
      <View style={{ width: windowWidth * 0.85, alignSelf: 'center' }}>
        <Text style={styles.title}>{headerTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
