import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE, GREEN} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: windowHeight * 0.05,
    marginHorizontal: '4%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  providerName: {fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR},
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },
  linearGradient: {
    alignItems: 'center',
    height: windowHeight * 0.46,
    width: windowWidth * 1,
    borderRadius: 30,
  },
  bannerInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subCat: {
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 18,
  },
  subText: {fontSize: 16, fontWeight: '500', color: WHITE},
  scrollView: {
    height: windowHeight * 0.8,
    marginBottom: 30,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: GREEN,
    marginHorizontal: '2%',
  },

  categoryView: {
    marginHorizontal: '6%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
