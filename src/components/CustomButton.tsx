import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import {COLOURS, FONTS} from '../assets/theme';
import CutsomTouchable, {CutsomTouchableProps} from './CutsomTouchable';

export interface CustomButtonProps extends CutsomTouchableProps {
  leftImage?: ImageSourcePropType | undefined;
  leftImageStyle?: StyleProp<ImageStyle> | undefined;
  title: string | undefined;
  titleStyle?: StyleProp<TextStyle> | undefined;
  rightImage?: ImageSourcePropType | undefined;
  rightImageStyle?: StyleProp<ImageStyle> | undefined;
}

const CustomButton: FC<CustomButtonProps> = function (props) {
  const {
    leftImage,
    leftImageStyle,
    title,
    titleStyle,
    rightImage,
    rightImageStyle,
  } = props;
  const {style, ...rest} = props;

  return (
    <CutsomTouchable
      activeOpacity={0.6}
      style={[styles.containerStyle, style]}
      {...rest}>
      {leftImage ? (
        <Image
          source={leftImage}
          style={[styles.leftImageStyle, leftImageStyle]}
        />
      ) : null}
      {title ? (
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      ) : null}
      {rightImage ? (
        <Image
          source={rightImage}
          style={[styles.rightImageStyle, rightImageStyle]}
        />
      ) : null}
    </CutsomTouchable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderRadius: 100,
    height: 56,
    // paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.BLUE_0286FF,
  },
  leftImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 17,
    fontFamily: FONTS.BOLD,
    color: COLOURS.WHITE_FFFFFF,
    textAlign: 'center',
  },
  rightImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default CustomButton;
