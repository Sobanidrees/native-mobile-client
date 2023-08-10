import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RootStackParams } from '../../../routes/routeStack';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Category from '../../components/category';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';
import { windowHeight, windowWidth } from '../../utils/constants';
import ServiceRequest from '../../components/serviceRequest';
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
            <View>
                {/* <Text style={styles.title}>EFYX</Text> */}

                {/* <View style={styles.bannerInnerView}>
                    <Text style={styles.title}>You Fix Every Car</Text>
                    <Image
                        source={require('../../assets/images/carImg.png')}
                        style={{ height: 140, width: 140 }}
                    />
                </View> */}
                <View style={styles.categoryView}>
                    <Category
                        catImg={require('../../assets/images/technology.png')}
                        homeCat={'Start New inspection'}
                        onPress={() => navigation.navigate('StartInspection')}
                    />
                    <Category
                        catImg={require('../../assets/images/bell-1.png')}
                        homeCat={'Notification'}
                        onPress={() => navigation.navigate('NotificationScreen')}
                    />
                    <Category
                        catImg={require('../../assets/images/pending.png')}
                        homeCat={'Pending inspection'}
                        onPress={() => navigation.navigate('UncommingInspections')}
                    />
                    <Category
                        catImg={require('../../assets/images/document.png')}
                        homeCat={'Completed Inspection'}
                        onPress={() => navigation.navigate('CompletedInspections')}
                    />
                </View>
            </View>
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
            <LinearGradient
                start={{ x: -0.5, y: -0.9 }}
                colors={['#008080', '#d8eeef']}
                style={styles.linearGradient}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.scrollView}>
                        <ServiceRequest carName={'Lamborghini'} dateTime={'14th August 10pm'} inspectionType={'Basic'} img={require('../../assets/images/carImg.png')} onPress={() => navigation.navigate('StartInspection')} />
                        <ServiceRequest carName={'Audi'} dateTime={'14th August 10pm'} inspectionType={'Basic'} img={require('../../assets/images/carImg.png')} onPress={() => navigation.navigate('StartInspection')} />
                        <ServiceRequest carName={'Ferrari'} dateTime={'14th August 10pm'} inspectionType={'Basic'} img={require('../../assets/images/carImg.png')} onPress={() => navigation.navigate('StartInspection')} />
                        <ServiceRequest carName={'Porsche'} dateTime={'14th August 10pm'} inspectionType={'Basic'} img={require('../../assets/images/carImg.png')} onPress={() => navigation.navigate('StartInspection')} />
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
};
export default HomeScreen;
