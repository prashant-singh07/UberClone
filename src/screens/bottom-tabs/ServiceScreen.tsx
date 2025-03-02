import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {COLOURS} from '../../assets/theme';

export interface ServiceScreenProps {}

const ServiceScreen: FC<ServiceScreenProps> = function (props) {
  const {} = props;

  return (
    <View style={styles.screenContainer}>
      <Text>Service</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
});

export default ServiceScreen;
