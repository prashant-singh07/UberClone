import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {COLOURS} from '../../assets/COLOURS';
import {CutsomTouchable} from '../../components';
import {FONTS} from '../../assets/theme';

export interface OnBoardingScreenProps {}

const OnBoardingScreen: FC<OnBoardingScreenProps> = function (props) {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <CutsomTouchable style={styles.skipContainer}>
        <Text style={styles.skipText}>Skip</Text>
      </CutsomTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
    alignItems: 'center',
  },
  skipContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
    padding: 5,
  },
  skipText: {
    fontSize: 14,
    color: COLOURS.BLACK_101520,
    fontFamily: FONTS.MEDIUM,
  },
});

export default OnBoardingScreen;
