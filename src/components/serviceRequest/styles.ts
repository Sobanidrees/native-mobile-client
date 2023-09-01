import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, PRIMARY_COLOR_LIGHT, WHITE} from '../../utils/colors';
import {windowWidth} from '../../utils/constants';
import {LARGETEXT, MEDIUMTEXT} from '../../utils/constantStyle';

export const styles = StyleSheet.create({
  requestView: {
    height: 130,
    width: windowWidth * 0.94,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_LIGHT,
    marginVertical: '2%',
    borderRadius: 12,
  },
  detailView: {justifyContent: 'center', marginHorizontal: 20},
  inspectionView: {
    width: '80%',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: '2%',
  },
  carName: {
    fontSize: LARGETEXT,
    // fontWeight: '300',
    marginTop: '4%',
  },
  inspectionType: {
    fontSize: MEDIUMTEXT,
    // fontWeight: '400',
    marginTop: '2%',
    marginBottom: '6%',
  },
  iconTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {fontSize: 12, marginLeft: 6},
});
