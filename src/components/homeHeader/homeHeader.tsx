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
        let jwtToken = await AsyncStorage.removeItem('jwtToken');
        // if (jwtToken) {
        //     console.log("jwtToken: ", jwtToken)
        navigation.navigate('Login');
        // } else {
        //     Alert.alert('no jwt token available')
        // }
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <SvgXml xml={APP_ICON_WHITE} />
            </TouchableOpacity>
            <Text style={styles.title}>{headerTitle}</Text>
            <TouchableOpacity onPress={Logout}>
                <SvgXml xml={LOGOUT_ICON} />
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;
