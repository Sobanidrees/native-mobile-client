import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARY_COLOR, WHITE, RED_ERROR } from '../../utils/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: WHITE,
    },
    title: { fontSize: 24, fontWeight: '500', marginBottom: '4%', color: WHITE, marginHorizontal: '2%' },

    linearGradient: {
        // alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight * 0.28,
        width: windowWidth * 1,
        borderRadius: 30,
        // borderBottomRightRadius: 30
    },
    categoryView: {
        marginVertical: '6%',
        marginHorizontal: '6%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});
