import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  ListWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
  },
  ListContainer: {
    flex: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 60,
  },
  ListFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  ListFooterText: {
    color: '#FFFFFF',
    fontSize: 23
  },
  ListResetButtonGrid: {
    backgroundColor: '#0C3BA1',
    height: 60,
    justifyContent: 'flex-start',
    paddingTop: 10
  }
});

export default styles;
