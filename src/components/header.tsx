import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../routes/routeStack';
import { PRIMARY_COLOR, WHITE } from '../utils/colors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParams, 'Header'>;


const Header = ({ navigation }: Props) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/images/back.png')}
                    style={{ height: 25, width: 25 }}
                />
            </TouchableOpacity>
            <Text style={styles.title}>Settings</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: windowHeight * 0.05,
        marginHorizontal: '4%',
        backgroundColor: WHITE,
        alignItems: 'center',
    },
    providerName: { fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR },
    iconView: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '18%'
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: '4%',
        marginHorizontal: '30%',
        color: PRIMARY_COLOR,
    },
})
