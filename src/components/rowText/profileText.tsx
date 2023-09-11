import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { GREY, PRIMARY_DARK, SUCCESS, WHITE } from '../../utils/colors';
import { SvgXml } from 'react-native-svg';
import { EDIT_ICON, SUCCESS_ICON } from '../../utils/assets';
import { BASICTEXT, BOLDTEXT, BTN_INPUT_HEIGHT, BTN_INPUT_WIDTH } from '../../utils/constantStyle';
import Divider from '../divider/divider';
import { MEDIUMTEXT } from '../../utils/constantStyle';

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string
};

const ProfileText = ({ value, onChange, placeholder }: Props) => {
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
    };

    return (
        <>
            <View style={styles.textIconView}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    value={value}
                    onChangeText={onChange}
                />

            </View>
            <Divider color={GREY} />

        </>
    );
};

export default ProfileText;

const styles = StyleSheet.create({
    textIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: BTN_INPUT_WIDTH,
        marginTop: '10%',
    },
    enterNoText: { fontSize: MEDIUMTEXT },
    valueText: { fontSize: MEDIUMTEXT },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: BTN_INPUT_HEIGHT,
        width: BTN_INPUT_WIDTH,
        borderColor: GREY,
        // marginVertical: '3%',
        padding: 10,
        backgroundColor: WHITE,
    }
});
