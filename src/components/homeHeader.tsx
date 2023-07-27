// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParams } from '../../routes/routeStack';
// import { PRIMARY_COLOR, WHITE } from '../utils/colors';


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// // type Props = NativeStackScreenProps<RootStackParams, 'HomeHeader'>;


// const HomeHeader = ({ navigation }) => {

//   return (
//     <View style={styles.header}>
//     <Text style={styles.providerName}>Talha Shabbir</Text>
//     <View style={styles.iconView}>
//       <TouchableOpacity onPress={()=> navigation.navigate('SettingScreen')}>
//         <Image
//           source={require('../assets/images/setting.png')}
//           style={{height: 25, width: 25}}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//         <Image
//           source={require('../assets/images/power-off.png')}
//           style={{height: 25, width: 25}}
//         />
//       </TouchableOpacity>
//     </View>
//   </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({

// header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     height: windowHeight * 0.05,
//     marginHorizontal: '4%',
//     backgroundColor: WHITE,
//     alignItems: 'center',
// },
// providerName: { fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR },
// iconView: {
//     // backgroundColor: 'green',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '18%'
// },
// })
