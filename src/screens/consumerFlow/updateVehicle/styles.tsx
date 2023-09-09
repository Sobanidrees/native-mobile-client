import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, WHITE } from '../../../utils/colors';
import { windowHeight, windowWidth } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    innerView: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    profileImage: {
        height: windowHeight * 0.23,
        width: windowWidth * 0.5,
    }
});
