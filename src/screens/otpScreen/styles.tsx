import { Dimensions, StyleSheet } from 'react-native';
import { PRIMARY_COLOR, RED_ERROR, WHITE } from '../../utils/colors';
import { windowHeight, windowWidth } from '../../utils/constants';

export const styles = StyleSheet.create({
    root: { flex: 1, padding: 60 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    resendOtp: {
        color: RED_ERROR,
        fontWeight: '500',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 20,
    },
    verifyBtn: {
        paddingVertical: '3%',
        paddingHorizontal: '10%',
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 20,
        marginTop: 20,
    },
    btnText: {
        fontWeight: '600',
        color: WHITE,
        fontSize: 20,
        alignSelf: 'center',
    },
});
