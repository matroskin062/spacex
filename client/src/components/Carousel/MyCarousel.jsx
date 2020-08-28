import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Left from '../../assets/left_arr.svg';

const MyCarousel = (props) => (
  <Carousel
    arrows
    infinite
    fastSwipe
  >
    {props.children}
  </Carousel>
);

export default MyCarousel;
