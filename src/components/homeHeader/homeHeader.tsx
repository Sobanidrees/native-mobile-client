import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {SvgXml} from 'react-native-svg';
import {APP_ICON, APP_ICON_WHITE, LOGOUT_ICON} from '../../utils/assets';
import {inspectorLogout} from '../../redux/actions/inspector';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';

type Props = {
  navigation: any;
  headerTitle: string;
};

const HomeHeader = ({navigation, headerTitle}: Props) => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const user = useSelector((state: RootState) => state.inspector);

  const Logout = async () => {
    try {
      await dispatch(inspectorLogout());
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Could not log you out');
      console.log(error);
    }
  };
  return (
    <View style={styles.header}>
      <SvgXml xml={APP_ICON_WHITE} />
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity onPress={Logout}>
        <SvgXml xml={LOGOUT_ICON} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
