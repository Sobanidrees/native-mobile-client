import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootStackParams } from '../../../../routes/routeStack';
import { styles } from './styles';
import ServiceRequest from '../../../components/serviceRequest/serviceRequest';
import { ServicesArray } from '../../../utils/constants';
import HomeHeader from '../../../components/homeHeader/homeHeader';
import { RootState } from '../../../redux/store';

type Props = NativeStackScreenProps<RootStackParams, 'ConsumerHome'>;

const ConsumerHome = ({ navigation }: Props) => {
    // const { fullName, address } = useSelector((state: RootState) => state.consumer.consumer ?? {});

    return (
        <View style={styles.container}>
            <HomeHeader headerTitle="Home" navigation={navigation} />
            <View style={styles.scrollView}>
                {/* <Text>Full Name: {fullName}</Text>
                <Text>Address: {address}</Text> */}
            </View>
        </View>
    );
};
export default ConsumerHome;
