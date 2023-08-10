import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARY_COLOR, WHITE, RED_ERROR, GREEN } from '../../utils/colors';
import { windowHeight, windowWidth } from '../../utils/constants';
export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: windowHeight * 0.05,
    marginHorizontal: '4%',
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  providerName: { fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR },
  iconView: {
    // backgroundColor: 'green',
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
  subText: { fontSize: 16, fontWeight: '500', color: WHITE },
  scrollView: {
    // backgroundColor: WHITE,
    // height: windowHeight * 0.22,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    // marginBottom: '4%',
    color: GREEN,
    marginHorizontal: '2%',
  },

  categoryView: {
    // marginVertical: '6%',
    marginHorizontal: '6%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
