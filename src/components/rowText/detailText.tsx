import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';
import Divider from '../divider/divider';
import { MEDIUMTEXT } from '../../utils/constantStyle';

const DetailText = (props: any) => {
    return (
        <View style={styles.textView}>
            <View style={styles.rowView}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.value}>{props.value}</Text>
            </View>
            <Divider />
        </View>
    );
};
export default DetailText;
const styles = StyleSheet.create({
    textView: {
        marginVertical: '6%',
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '2%'
    },
    title: {
        fontSize: MEDIUMTEXT,
    },
    value: {
        fontSize: MEDIUMTEXT,
        fontWeight: '600',
        marginRight: 12,
    },

});
