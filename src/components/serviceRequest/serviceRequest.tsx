import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {CALENDAR_ICON, LOCATION_ICON, TIME_ICON} from '../../utils/assets';
import Divider from '../divider/divider';

const ServiceRequest = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.requestView}>
      <View style={styles.detailView}>
        <View style={styles.rowView}>
          <View style={styles.inspectionView}>
            <Text numberOfLines={1} style={styles.carName}>
              {props.carName}
            </Text>
            <Text style={styles.inspectionType}>{props.inspectionType}</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text numberOfLines={1} style={{}}>
              {props.timeAgo}
            </Text>
          </View>
        </View>
        <View style={styles.iconTextView}>
          <SvgXml xml={LOCATION_ICON} />
          <Text style={styles.dateTimeText}>{props.location}</Text>
        </View>
        <Divider />
        <View style={styles.rowView}>
          <View style={styles.iconTextView}>
            <SvgXml xml={CALENDAR_ICON} />
            <Text style={styles.dateTimeText}>{props.date}</Text>
          </View>
          <View style={styles.iconTextView}>
            <SvgXml xml={TIME_ICON} />
            <Text style={styles.dateTimeText}>{props.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceRequest;
