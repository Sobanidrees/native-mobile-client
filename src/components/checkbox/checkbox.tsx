import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { PRIMARY_DARK, SUCCESS, WHITE } from '../../utils/colors';
import { SvgXml } from 'react-native-svg';
import { SUCCESS_ICON } from '../../utils/assets';
import { BASICTEXT, BOLDTEXT, BTN_INPUT_WIDTH } from '../../utils/constantStyle';

type Props = {
    checked: boolean;
    onPress: () => void;
};

const CheckBox = ({ checked, onPress, }: Props) => {
    return (
        <View style={styles.checkboxView}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                {checked && <SvgXml style={{}} xml={SUCCESS_ICON} />}
            </TouchableOpacity>
            <Text style={styles.enterNoText}>
                Agree to our <Text style={{ fontWeight: BOLDTEXT }}>terms of services </Text>
                and <Text style={{ fontWeight: BOLDTEXT }}>privacy policies</Text>
            </Text>

        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    button: {
        height: 25, width: 25,
        borderWidth: 1,
        borderColor: SUCCESS,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '4%'
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        color: WHITE,
    },
    checkboxView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: BTN_INPUT_WIDTH,
        marginTop: '4%',
    },
    enterNoText: { fontSize: BASICTEXT, marginLeft: '4%' },
});
