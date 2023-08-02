import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SOLID_BLACK, WHITE } from '../utils/colors';

const Category = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient
                start={{ x: -0.5, y: -0.9 }}
                colors={['#008080', '#d8eeef']}
                style={styles.linearGradient}>
                <Image source={props.catImg} style={{ height: 60, width: 60 }} />
                <Text style={styles.title}>{props.homeCat}</Text>
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
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        bottom: -20,
        marginLeft: 6,
        color: SOLID_BLACK,
    },
});
