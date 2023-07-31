import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routeStack';
import { PRIMARY_COLOR, RED_ERROR, WHITE } from '../../utils/colors';

type Props = NativeStackScreenProps<RootStackParams, 'OTPInput'>;

const CELL_COUNT = 4;
const DEFAULT_OTP = '1234';

export function OTPInput({ navigation }: Props) {
    const [value, setValue] = useState('');
    const ref = useRef<CodeField>(null);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        setValue,
        cellCount: CELL_COUNT
    });

    useEffect(() => {
        // Delay the focus on the first cell by 2 seconds
        const timer = setTimeout(() => {
            if (ref.current) {
                ref.current.focus();
            }
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleVerification = () => {
        if (value === DEFAULT_OTP) {
            // Correct OTP, navigate to HomeScreen
            navigation.navigate('HomeScreen');
        } else {
            // Incorrect OTP, show error message or take appropriate action
            Alert.alert('Incorrect OTP. Please try again.');
            // Clear the entered OTP
            setValue('');
            // Focus on the first cell again
            if (ref.current) {
                ref.current.focus();
            }
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Verification</Text>
            <CodeField
                ref={ref}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            <TouchableOpacity>
                <Text style={styles.resendOtp}>Resend otp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verifyBtn} onPress={handleVerification}>
                <Text style={styles.btnText}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 60 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    resendOtp: {
        color: RED_ERROR,
        fontWeight: '500',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 20,
    },
    verifyBtn: {
        paddingVertical: '3%',
        paddingHorizontal: '10%',
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 20,
        marginTop: 20,
    },
    btnText: {
        fontWeight: '600',
        color: WHITE,
        fontSize: 20,
        alignSelf: 'center',
    },
});
