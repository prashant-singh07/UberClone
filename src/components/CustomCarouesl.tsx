import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper, {SwiperProps} from 'react-native-swiper';
import {COLOURS} from '../assets/theme';

interface CustomCaroueslProps extends SwiperProps {
  data: [];
  renderItem: (item: any, index: number) => React.ReactNode;
}

const CustomCarouesl: FC<CustomCaroueslProps> = props => {
  const {data, renderItem, ...rest} = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Swiper
      loop={false}
      autoplay={true}
      index={activeIndex}
      onIndexChanged={index => setActiveIndex(index)}
      dot={<View style={styles.dotStyle} />}
      activeDotStyle={styles.activeDotStyle}
      {...rest}>
      {data?.map((item, index) => {
        return renderItem(item, index);
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
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
});

export default CustomCarouesl;
