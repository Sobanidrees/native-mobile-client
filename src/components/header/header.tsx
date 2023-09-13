import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {APP_ICON_WHITE, BACK_ICON} from '../../utils/assets';
import {useNavigation} from '@react-navigation/native';

type Props = {
  headerTitle: string;
};

const Header = ({headerTitle}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SvgXml xml={BACK_ICON} />
      </TouchableOpacity>
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity>
        <SvgXml xml={APP_ICON_WHITE} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
