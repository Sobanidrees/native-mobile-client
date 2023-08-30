import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { GREY, PRIMARY_DARK, SUCCESS, WHITE } from '../../utils/colors';
import { SvgXml } from 'react-native-svg';
import { EDIT_ICON, SUCCESS_ICON } from '../../utils/assets';
import { BASICTEXT, BOLDTEXT, BTN_INPUT_WIDTH } from '../../utils/constantStyle';

type Props = {
};

const Divider = ({ }: Props) => {
    return (
        <View style={styles.divider} />

    );
};

export default Divider;

const styles = StyleSheet.create({
    divider: {
        width: BTN_INPUT_WIDTH,
        borderWidth: 1,
        borderColor: GREY,
        alignSelf: 'center'
    }
});
