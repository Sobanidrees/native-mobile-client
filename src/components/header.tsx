import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../routes/routeStack';
import { PRIMARY_COLOR, WHITE } from '../utils/colors';
import { windowHeight, windowWidth } from '../utils/constants';

type Props = {
    navigation: any;
    headerTitle: any;
};

const Header = ({ navigation, headerTitle }: Props) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../.../../assets/images/back.png')}
                    style={{ height: 25, width: 25 }}
                />
            </TouchableOpacity>
            <View style={{ width: windowWidth * 0.85, alignSelf: 'center', }}>
                <Text style={styles.title}>{headerTitle}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        backgroundColor: WHITE,
        height: windowHeight * 0.05,
        marginHorizontal: '4%',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        alignSelf: 'center',
        color: PRIMARY_COLOR,
        left: '-4%'
    },
    providerName: { fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR },
    iconView: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '18%'
    },

})
