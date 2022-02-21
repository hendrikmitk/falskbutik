import React, { useState } from 'react';
import { arr } from '../../../data/team';
import ImageSliderButton from './ImageSliderButton';
import ChevronLeftIcon from '../../common/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../common/icons/ChevronRightIcon';

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () =>
    slideIndex === 0
      ? setSlideIndex(arr.length - 1)
      : setSlideIndex(slideIndex - 1);

  const nextSlide = () =>
    slideIndex === arr.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);

  return (
    <div className="flex flex-col items-center space-y-4 py-12">
      <img
        className="h-72 w-72 rounded-full object-cover"
        src={arr[slideIndex].image}
        alt={'image of ' + arr[slideIndex].name}
      />
      <div className="flex flex-col items-center space-y-2">
        <p className="font-semibold capitalize">{arr[slideIndex].name}</p>
        <p className="text-sm capitalize">{arr[slideIndex].job}</p>
      </div>
      <div className="text-orange">
        <ImageSliderButton onClick={prevSlide}>
          <ChevronLeftIcon />
        </ImageSliderButton>
        <ImageSliderButton onClick={nextSlide}>
          <ChevronRightIcon />
        </ImageSliderButton>
      </div>
    </div>
  );
};

export default ImageSlider;
