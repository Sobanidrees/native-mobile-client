import {Dimensions} from 'react-native';

export const ServicesArray = [
  {
    id: 1,
    serviceName: 'Body Frame Accident Checklist',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/air-conditioner.png'),
  },
  {
    id: 2,
    serviceName: 'Engine / Transmission / Clutch',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/carpenter.png'),
  },
  {
    id: 3,
    serviceName: 'Brakes',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 4,
    serviceName: 'Suspension / Steering',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 5,
    serviceName: 'Interior',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 6,
    serviceName: 'AC / Heater',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 7,
    serviceName: 'Electrical / Electronics',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 8,
    serviceName: 'Exterior / Body',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
  {
    id: 9,
    serviceName: 'Tyres',
    name: 'Talha',
    desc: 'Your Car Servicer',
    // image: require('../assets/images/booking.png'),
  },
];

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
