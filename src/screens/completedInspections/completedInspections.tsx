import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import Header from '../../components/header';
import { ServicesArray } from '../../utils/constants';
import { PRIMARY_COLOR } from '../../utils/colors';


type Props = NativeStackScreenProps<RootStackParams, 'CompletedInspections'>;


const CompletedInspections = ({ navigation }: Props) => {

    const [number, onChangeNumber] = useState('');

    return (
        <SafeAreaView style={[styles.container]}>
            <Header navigation={navigation} headerTitle="Completed Inspections" />

            <ScrollView style={{ marginTop: '2%' }}>
                {ServicesArray.map(i => {
                    return (
                        <View key={i.id} style={{ marginHorizontal: '2%' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ServiceDetails')}
                                style={{
                                    backgroundColor: PRIMARY_COLOR,
                                    marginVertical: '2%',
                                    padding: '5%',
                                    borderRadius: 10,
                                }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
                                    {i.desc}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CompletedInspections;
