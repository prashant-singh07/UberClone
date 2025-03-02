import React, {FC, useRef, useState} from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import {COLOURS, FONTS} from '../../assets/theme';
import {IMAGES} from '../../assets/images';
import {SCREEN_WIDTH} from '../../assets/constant';
import {CustomButton, CustomTextInput} from '../../components';

export interface SignInScreenProps {}

const SignInScreen: FC<SignInScreenProps> = function (props) {
  const {} = props;
  const screenRef = useRef<ScrollView>(null);
  const [isLoginScreen, setIsLoginScreen] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleNameChanged(inputText: string) {
    setForm(prev => ({...prev, name: inputText}));
  }

  function handleEmailChanged(inputText: string) {
    setForm(prev => ({...prev, email: inputText}));
  }

  function handlePasswordChanged(inputText: string) {
    setForm(prev => ({...prev, password: inputText}));
  }

  function handleChangeSignUpLoginPressed() {
    screenRef.current?.scrollTo({y: 0, animated: true});
    setIsLoginScreen(prev => !prev);
  }

  function performFormValidation() {
    //validate each input -> enable/disable button
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={screenRef}
        bounces={false}>
        <Image style={styles.carImageStyle} source={IMAGES.SIGN_UP_CAR} />
        <Text style={styles.onBoardMessage}>
          {isLoginScreen ? 'Welcome' : 'Create Your Account'}
        </Text>
        <View style={{paddingHorizontal: 20}}>
          {isLoginScreen ? null : (
            <CustomTextInput
              containerStyle={styles.margibB16}
              label="Name"
              placeholder="Enter Name"
              value={form.name}
              onChangeText={handleNameChanged}
            />
          )}
          <CustomTextInput
            containerStyle={styles.margibB16}
            label="Email"
            placeholder="Enter Email"
            value={form.email}
            onChangeText={handleEmailChanged}
          />
          <CustomTextInput
            containerStyle={styles.margibB30}
            label="Password"
            placeholder="Enter Password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={handlePasswordChanged}
          />
          <CustomButton title={isLoginScreen ? 'Login' : 'Sign Up'} />
          <View style={styles.orContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <CustomButton
            style={styles.googleLoginButton}
            leftImage={IMAGES.GOOGLE_ICON}
            title="Log In With Google"
            titleStyle={styles.googleLoginText}
          />

          <Text style={styles.signUpLoginDescription}>
            {isLoginScreen
              ? "Don't have an account? "
              : 'Already have an account? '}
            <Text
              style={styles.signUpLoginChangeText}
              onPress={handleChangeSignUpLoginPressed}>
              {isLoginScreen ? 'Sign Up' : 'Log In'}
            </Text>
          </Text>
        </View>
      </ScrollView>
      {/* modal needs to be added for sign up completion-> browse to home */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
  },
  carImageStyle: {
    height: 250,
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  onBoardMessage: {
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    color: COLOURS.BLACK_333333,
    position: 'absolute',
    top: 180,
  },
  margibB16: {
    marginBottom: 16,
  },
  margibB30: {
    marginBottom: 30,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    height: 1,
    backgroundColor: COLOURS.GREY_CED1DD,
    flex: 1,
  },
  orText: {
    fontSize: 15,
    fontFamily: FONTS.MEDIUM,
    color: COLOURS.BLACK_333333,
    marginHorizontal: 20,
  },
  googleLoginButton: {
    backgroundColor: COLOURS.WHITE_FFFFFF,
    borderWidth: 1,
    borderColor: COLOURS.GREY_EBEBEB,
    marginBottom: 40,
  },
  googleLoginText: {
    fontFamily: FONTS.MEDIUM,
    color: COLOURS.BLACK_333333,
  },
  signUpLoginDescription: {
    fontSize: 17,
    fontFamily: FONTS.MEDIUM,
    color: COLOURS.GREY_858585,
    textAlign: 'center',
    marginBottom: 40,
  },
  signUpLoginChangeText: {
    fontSize: 17,
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOURS.BLUE_0286FF,
  },
});

export default SignInScreen;
