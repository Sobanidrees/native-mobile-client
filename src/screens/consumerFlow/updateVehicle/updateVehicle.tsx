import React, { Consumer, useState } from 'react';
import {
    Alert,
    Button,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../routes/routeStack';
import Header from '../../../components/header/header';
import HomeHeader from '../../../components/homeHeader/homeHeader';
import ProfileText from '../../../components/rowText/profileText';
import PrimaryButton from '../../../components/primaryButton/primaryButton';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GREY } from '../../../utils/colors';
import { UpdateVehicleDto } from '../../../models/consumer';
import { vehicleUpdate } from '../../../redux/actions/consumer';

type Props = NativeStackScreenProps<RootStackParams, 'UpdateVehicle'>;

const UpdateVehicle = ({ navigation, route }: Props) => {
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const dispatch = useDispatch();
    const updateVehicleInfo = (body: any) => {
        const updateVehicleParams: UpdateVehicleDto = {
            year: year,
            make: make,
            model: model,
        };
        dispatch<any>(vehicleUpdate(updateVehicleParams))
            .then(unwrapResult)
            .then((consumer: any) => {
                console.log('=========consumer', consumer)
                if (consumer) {

                    navigation.navigate('ConsumerHome');
                } else {
                }
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
    return (
        <View style={[styles.container]}>
            <HomeHeader headerTitle="Vehicle" navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('ConsumerHome')}
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 14,
                    marginTop: '8%',
                }}>
                <Text style={{ fontSize: 14, color: GREY }}>Skip</Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 24,
                    alignSelf: 'center',
                    marginVertical: '4%',
                }}>
                Vehicle Information
            </Text>
            <View style={styles.innerView}>
                <ProfileText value={year} onChange={setYear} placeholder="Enter Year" />
                <ProfileText value={make} onChange={setMake} placeholder="Enter Make" />
                <ProfileText value={model} onChange={setModel} placeholder="Enter Model" />

                <PrimaryButton
                    buttonTitle="Update"
                    navigation={updateVehicleInfo}
                    buttonStyle={{ marginTop: '48%' }}
                />
            </View>
        </View>
    );
};

export default UpdateVehicle;
