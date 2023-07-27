import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import { RootStackParams } from '../../../routes/routeStack';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Category from '../../components/category';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.providerName}>Talha Shabbir</Text>
                <View style={styles.iconView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SettingScreen')}>
                        <Image
                            source={require('../../assets/images/setting.png')}
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

                <View style={styles.bannerInnerView}>
                    <Text style={styles.title}>You Fix Every Car</Text>
                    <Image
                        source={require('../../assets/images/carImg.png')}
                        style={{ height: 140, width: 140 }}
                    />
                </View>
            </LinearGradient>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '2%',
                    marginVertical: '2%',
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ToolCheckList')}
                    style={styles.subCat}>
                    <Text style={styles.subText}>Tools</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCat}>
                    <Text style={styles.subText}>E-FYX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCat}>
                    <Text style={styles.subText}>E-FYX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCat}>
                    <Text style={styles.subText}>Recent Inspection</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.categoryView}>
                    <Category
                        catImg={require('../../assets/images/technology.png')}
                        homeCat={'Start New inspection'}
                    />
                    <Category
                        catImg={require('../../assets/images/bell-1.png')}
                        homeCat={'Notification'}
                    />
                    <Category
                        catImg={require('../../assets/images/pending.png')}
                        homeCat={'Pending inspection'}
                    />
                    <Category
                        catImg={require('../../assets/images/document.png')}
                        homeCat={'Completed Inspection'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
