import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { GREY } from '../../utils/colors';
import Header from '../../components/header';
import { windowHeight, windowWidth } from '../../utils/constants';


type Props = NativeStackScreenProps<RootStackParams, 'ServiceScreen'>;


const ServiceScreen = ({ route, navigation }: Props) => {

    const serviceName = route.params?.serviceName || '';

    return (
        <SafeAreaView style={[styles.container]}>
            <Header navigation={navigation} headerTitle={serviceName} />


        </SafeAreaView>
    );
};

export default ServiceScreen;
