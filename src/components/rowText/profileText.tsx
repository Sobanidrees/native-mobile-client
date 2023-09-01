import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';
import { windowWidth } from '../../utils/constants';
import { PRIMARY_DARK, SUCCESS, WHITE } from '../../utils/colors';
import { SvgXml } from 'react-native-svg';
import { EDIT_ICON, SUCCESS_ICON } from '../../utils/assets';
import { BASICTEXT, BOLDTEXT, BTN_INPUT_WIDTH } from '../../utils/constantStyle';
import Divider from '../divider/divider';
import { MEDIUMTEXT } from '../../utils/constantStyle';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const ProfileText = ({ value, onChange }: Props) => {
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
                {editing ? (
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={onChange}
                        autoFocus
                        onBlur={handleSave}
                    />
                ) : (
                    <Text style={styles.valueText}>{value}</Text>
                )}
                {editing ? (
                    <TouchableOpacity onPress={handleSave}>
                        <SvgXml xml={SUCCESS_ICON} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleEdit}>
                        <SvgXml xml={EDIT_ICON} />
                    </TouchableOpacity>
                )}
            </View>
            <Divider />

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
        marginBottom: '1.6%',
        marginTop: '10%',
    },
    enterNoText: { fontSize: MEDIUMTEXT },
    valueText: { fontSize: MEDIUMTEXT },
    input: {
        fontSize: MEDIUMTEXT,
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY_DARK,
        paddingBottom: 5,
    },
});
