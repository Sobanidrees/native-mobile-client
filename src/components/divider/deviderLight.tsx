import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GREY, LIGHT_GREY } from '../../utils/colors';
import { BTN_INPUT_WIDTH } from '../../utils/constantStyle';
type Props = {
};
const DividerLight = ({ }: Props) => {
    return (
        <View style={styles.divider} />
    );
};
export default DividerLight;
const styles = StyleSheet.create({
    divider: {
        width: BTN_INPUT_WIDTH,
        borderWidth: 0.8,
        borderColor: LIGHT_GREY,
        alignSelf: 'center',
        marginVertical: '2%'
    }
});
