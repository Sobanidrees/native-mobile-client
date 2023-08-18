import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { styles } from './styles';

type Props = {
  navigation: any;
  headerTitle: string;
};

const Header = ({ navigation, headerTitle }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconView} onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require('../../assets/images/back.png')} />
      </TouchableOpacity>
      <View style={styles.titleView}>
        <Text style={styles.title}>{headerTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
