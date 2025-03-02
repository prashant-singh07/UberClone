import React, {FC, useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {COLOURS} from '../../assets/theme';
import {CustomButton, CustomCarouesl, CutsomTouchable} from '../../components';
import {FONTS} from '../../assets/theme';
import {ONBOARDING_DATA, SCREEN_WIDTH} from '../../assets/constant';
import Swiper from 'react-native-swiper';
import {useNavigation, StackActions} from '@react-navigation/native';

export interface OnBoardingScreenProps {}

const OnBoardingScreen: FC<OnBoardingScreenProps> = function (props) {
  const {} = props;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);

  function handleSkipPressed() {
    navigateToSignInScreen();
  }

  function handleNextPressed() {
    isLastCarouselElement
      ? navigateToSignInScreen()
      : swiperRef.current?.scrollBy(1);
  }

  function navigateToSignInScreen() {
    const replaceAction = StackActions.replace('SignInScreen');
    navigation.dispatch(replaceAction);
  }

  const isLastCarouselElement = activeIndex === ONBOARDING_DATA.length - 1;

  const renderItem = (item: (typeof ONBOARDING_DATA)[0], index: number) => {
    const {description, id, image, title} = item;
    return (
      <View key={id.toString()} style={styles.carouselContainer}>
        <Image style={styles.carouselImage} source={image} />
        <Text style={styles.carouselTitle}>{title}</Text>
        <Text style={styles.carouselDescription}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <CutsomTouchable style={styles.skipContainer} onPress={handleSkipPressed}>
        <Text style={styles.skipText}>Skip</Text>
      </CutsomTouchable>

      <Swiper
        ref={swiperRef}
        loop={false}
        index={activeIndex}
        onIndexChanged={index => {
          setActiveIndex(index);
        }}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        {ONBOARDING_DATA.map(renderItem)}
      </Swiper>

      <CustomButton
        style={{
          width: SCREEN_WIDTH - 40,
        }}
        title={isLastCarouselElement ? 'Get Started' : 'Next'}
        onPress={handleNextPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLOURS.WHITE_FFFFFF,
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
  },
  skipContainer: {
    alignSelf: 'flex-end',
    padding: 5,
    marginRight: 20,
  },
  skipText: {
    fontSize: 14,
    color: COLOURS.BLACK_101520,
    fontFamily: FONTS.MEDIUM,
  },
  dotStyle: {
    height: 4,
    width: 32,
    borderRadius: 2,
    backgroundColor: COLOURS.GREY_E2E8F0,
    marginRight: 4,
  },
  activeDotStyle: {
    height: 4,
    width: 32,
    borderRadius: 2,
    backgroundColor: COLOURS.BLUE_0286FF,
  },
  carouselContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    height: 270,
    width: 270,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 28,
    fontFamily: FONTS.BOLD,
    color: COLOURS.BLACK_212121,
    textAlign: 'center',
    marginBottom: 10,
  },
  carouselDescription: {
    fontSize: 17,
    fontFamily: FONTS.MEDIUM,
    color: COLOURS.GREY_858585,
    textAlign: 'center',
  },
});

export default OnBoardingScreen;
