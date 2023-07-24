import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { WHITE } from '../utils/colors';

const Category = () => {

    return (
        <TouchableOpacity>
            <LinearGradient start={{ x: -0.5, y: -0.9 }} colors={['#008080', '#d8eeef']} style={styles.linearGradient}>
                <Image source={require('../assets/images/carImg.png')} style={{ height: 140, width: 140, }} />
                <Text style={styles.title}>EFYX</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export default Category;

const styles = StyleSheet.create({
    linearGradient: {
        height: 220,
        width: 160,
        borderRadius: 20,
        marginVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        bottom: -20,
        marginLeft: 6,
        color: WHITE
    }
})