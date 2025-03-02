import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {COLOURS} from '../../assets/theme';

export interface ProfileScreenProps {}

const ProfileScreen: FC<ProfileScreenProps> = function (props) {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
});

export default ProfileScreen;
