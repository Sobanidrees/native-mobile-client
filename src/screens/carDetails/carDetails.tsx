import React, { useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import Header from '../../components/header/header';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import Divider from '../../components/divider/divider';
import DetailText from '../../components/rowText/detailText';

type Props = NativeStackScreenProps<RootStackParams, 'CarDetails'>;

const CarDetails = ({ navigation }: Props) => {

    const handleInspection = () => {
        navigation.navigate('Inspection01')
    }
    return (
        <View style={[styles.container]}>
            <Header headerTitle="Car Details" navigation={navigation} />
            <View style={styles.innerView}>
                <DetailText title={'Talha Shabbir'} value={''} />
                <DetailText title={'Dubai'} value={''} />
                <DetailText title={'Vehicle Name'} value={'Lamborghini'} />
                <DetailText title={'Model:'} value={'Revuelto'} />
                <DetailText title={'Year:'} value={'2023'} />
                <DetailText title={'Displacement (cc)'} value={'3200'} />
            </View>
            <PrimaryButton
                buttonTitle="Start Inspection"
                navigation={handleInspection}
            />
        </View>
    );
};

export default CarDetails;
