import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../../../routes/routeStack';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Category from '../../components/category';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '5%',
                    marginHorizontal: '4%',
                    backgroundColor: WHITE,
                    alignItems: 'center',
                }}>
                <Text style={{ fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR }}>
                    Talha Shabbir
                </Text>
                <View
                    style={{
                        // backgroundColor: 'green',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '18%'
                    }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/bell.png')}
                            style={{ height: 25, width: 25 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Image
                            source={require('../../assets/images/power-off.png')}
                            style={{ height: 25, width: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <LinearGradient
                start={{ x: -0.5, y: -0.9 }}
                colors={['#008080', '#d8eeef']}
                style={styles.linearGradient}>
                <Text style={styles.title}>EFYX</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.title}>You Fix Every Car</Text>
                    <Image
                        source={require('../../assets/images/carImg.png')}
                        style={{ height: 140, width: 140 }}
                    />
                </View>
            </LinearGradient>
            <ScrollView style={{backgroundColor: WHITE, height: '70%', marginTop: '0.5%'}}>
                <View style={styles.categoryView}>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return <Category key={index} />;
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
