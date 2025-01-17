import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../../utils/colors';
import {windowHeight} from '../../../utils/constantStyle';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  providerName: {fontWeight: '500', fontSize: 20, color: PRIMARY_COLOR},
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },
  subCat: {
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 18,
  },
  subText: {fontSize: 16, fontWeight: '500', color: WHITE},
  scrollView: {
    marginTop: '2%',
    alignItems: 'center',
    borderRadius: 20,
    height: '94%',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginHorizontal: '2%',
  },

  categoryView: {
    marginHorizontal: '6%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
