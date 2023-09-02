import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SvgXml } from 'react-native-svg';
import { APP_ICON, APP_ICON_WHITE, LOGOUT_ICON } from '../../utils/assets';

type Props = {
    navigation: any;
    headerTitle: string;
};

const HomeHeader = ({ navigation, headerTitle }: Props) => {
    const user = useSelector((state: RootState) => state.inspector);

    const Logout = async () => {
        try {
            await AsyncStorage.removeItem('jwtToken');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error removing JWT token:', error);
            // Handle the error here, e.g., show an error message.
        }
    }
    return (
        <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}> */}
            <SvgXml xml={APP_ICON_WHITE} />
            {/* </TouchableOpacity> */}
            <Text style={styles.title}>{headerTitle}</Text>
            <TouchableOpacity onPress={Logout}>
                <SvgXml xml={LOGOUT_ICON} />
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;
