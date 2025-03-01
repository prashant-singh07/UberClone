import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {COLOURS} from '../../assets/COLOURS';

export interface ActivityScreenProps {}

const ActivityScreen: FC<ActivityScreenProps> = function (props) {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text>Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
});

export default ActivityScreen;
