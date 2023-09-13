import {Dimensions} from 'react-native';

export const ServicesArray = [
  {
    id: 1,
    serviceName: 'Body Frame Accident Checklist',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 2,
    serviceName: 'Engine / Transmission / Clutch',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 3,
    serviceName: 'Brakes',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 4,
    serviceName: 'Suspension / Steering',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 5,
    serviceName: 'Interior',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 6,
    serviceName: 'AC / Heater',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 7,
    serviceName: 'Electrical / Electronics',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 8,
    serviceName: 'Exterior / Body',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
  {
    id: 9,
    serviceName: 'Tyres',
    name: 'Talha',
    desc: 'Your Car Servicer',
    image: require('../assets/images/carImg.png'),
  },
];

export const isIOS = () => {
  return Platform.OS === 'ios';
};
