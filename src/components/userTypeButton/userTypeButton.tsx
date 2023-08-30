import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { PRIMARY_COLOR, PRIMARY_COLOR_LIGHT, PRIMARY_DARK, SOLID_BLACK, WHITE } from '../../utils/colors';

type Props = {
    onSelectUserType: (userType: string) => void; // Callback function to handle user type selection
};

const UserTypeButton = ({ onSelectUserType }: Props) => {
    const [selectedType, setSelectedType] = useState<string>('consumer'); // Store the selected user type

    const handleUserTypeSelection = (userType: string) => {
        setSelectedType(userType); // Set the selected user type in the state
        onSelectUserType(userType); // Call the parent callback function
    };
    return (
        <View style={[styles.btnView]}>
            <TouchableOpacity
                style={[styles.btnStyle, {
                    backgroundColor:
                        selectedType === 'consumer' ? PRIMARY_COLOR_LIGHT : WHITE,
                    borderColor: selectedType === 'consumer' ? WHITE : PRIMARY_DARK,
                    borderWidth: selectedType === 'consumer' ? 0 : 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                },]}
                onPress={() => handleUserTypeSelection('consumer')} // Call the callback with selected user type
            >
                <Text style={{ fontSize: 18, fontWeight: '500', color: selectedType === 'consumer' ? WHITE : PRIMARY_COLOR_LIGHT, }}>
                    Consumer
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btnStyle, {
                    backgroundColor:
                        selectedType === 'inspector' ? PRIMARY_COLOR_LIGHT : WHITE,
                    borderColor: selectedType === 'inspector' ? WHITE : PRIMARY_DARK,
                    borderWidth: selectedType === 'inspector' ? 0 : 1,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10

                },]}
                onPress={() => handleUserTypeSelection('inspector')} // Call the callback with selected user type
            >
                <Text style={{ fontSize: 18, fontWeight: '500', color: selectedType === 'inspector' ? WHITE : PRIMARY_COLOR_LIGHT, }}>
                    Inspector
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserTypeButton;