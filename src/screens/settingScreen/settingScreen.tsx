import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { GREY } from '../../utils/colors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParams, 'SettingScreen'>;


const SettingScreen = ({ navigation }: Props) => {

  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={{ backgroundColor: GREY, height: windowHeight * 0.9, alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
