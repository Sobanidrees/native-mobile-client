import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
    navigation: any;
    buttonTitle: string;
    buttonStyle?: ViewStyle;
};

const PrimaryButton = ({ navigation, buttonTitle, buttonStyle }: Props) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={navigation}>
            <Text style={styles.buttonTitle}>{buttonTitle} </Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;
