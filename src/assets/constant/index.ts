import {Dimensions} from 'react-native';
import {IMAGES} from '../images';

export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('screen');

export const ONBOARDING_DATA = [
  {
    id: 0,
    title: 'The best car in your hands with Vaahan',
    description:
      'Discover the convenience of finding your perfect ride with our Ryde App',
    image: IMAGES.ONBOARDING_1,
  },
  {
    id: 0,
    title: 'The perfect ride is just a tap away!',
    description:
      'Your journey begins with Vaahan. Find your ideal ride effortlessly.',
    image: IMAGES.ONBOARDING_2,
  },
  {
    id: 0,
    title: "Your ride, your way. Let's get started!",
    description:
      'Enter your destination, sit back, and let us take care of the rest.',
    image: IMAGES.ONBOARDING_3,
  },
];
