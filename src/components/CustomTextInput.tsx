import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import {IMAGES} from '../assets/images';
import CutsomTouchable from './CutsomTouchable';
import {COLOURS, FONTS} from '../assets/theme';

interface CustomTextInputProps extends TextInputProps {
  label?: string | undefined;
  labelStyle?: StyleProp<TextStyle> | undefined;
  icon?: ImageSourcePropType | undefined;
  iconStyle?: StyleProp<ImageStyle> | undefined;
  inputContainerStyle?: StyleProp<ViewStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const CustomTextInput: FC<CustomTextInputProps> = props => {
  const {
    label,
    labelStyle,
    icon,
    iconStyle,
    inputContainerStyle,
    containerStyle,
    secureTextEntry,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean | undefined>(
    !secureTextEntry,
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handlePasswordIconPressed() {
    setShowPassword(prev => !prev);
  }

  function handleBlueFocus() {
    setIsFocused(false);
  }

  function handleSetFocus() {
    setIsFocused(true);
  }

  const isFocusedOrFilled = isFocused || props.value;

  return (
    <KeyboardAvoidingView
      //   keyboardVerticalOffset={50}
      style={[styles.containerStyle, containerStyle]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {label ? (
        <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      ) : null}
      <View
        style={[
          styles.inputContainerStyle,
          {
            borderWidth: 1,
            borderColor: isFocusedOrFilled
              ? COLOURS.BLUE_0286FF
              : COLOURS.GREY_F6F8FA,
          },
          inputContainerStyle,
        ]}>
        {icon ? (
          <Image style={[styles.iconStyle, iconStyle]} source={icon} />
        ) : null}
        <TextInput
          style={{flex: 1}}
          onFocus={handleSetFocus}
          onBlur={handleBlueFocus}
          secureTextEntry={!showPassword}
          {...rest}
        />
        {secureTextEntry ? (
          <CutsomTouchable
            activeOpacity={1}
            onPress={handlePasswordIconPressed}>
            <Image
              style={styles.passwordIconStyle}
              source={
                showPassword ? IMAGES.PASSWORD_SHOW : IMAGES.PASSWORD_HIDE
              }
            />
          </CutsomTouchable>
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 50,
    paddingHorizontal: 16,
    backgroundColor: COLOURS.GREY_F6F8FA,
    position: 'relative',
  },
  labelStyle: {
    fontSize: 17,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOURS.BLACK_333333,
    marginBottom: 6,
  },
  iconStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  passwordIconStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});

export default CustomTextInput;
