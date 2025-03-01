import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {COLOURS} from '../../assets/COLOURS';

export interface SignInScreenProps {}

const SignInScreen: FC<SignInScreenProps> = function (props) {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text>SignIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
});

export default SignInScreen;
