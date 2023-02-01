import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
} from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { SliderStyle, SliderOneBtnStyle } from './ImageSlider.style';
import { TiShoppingCart } from 'react-icons/ti';

const ImageSlider = ({ slides, parentWidth }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const slideStyles = {
    width: '100%',
    height: '100%',

    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `linearGradient(${slides[currentIndex].gradient}),url(${slides[currentIndex].imageUrl})`,
    backgroundBlendMode: 'darken',
  };
  const getSlideStyleWIthBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `linear-gradient(${slides[slideIndex].gradient}),url(${slides[slideIndex].imageUrl})`,
    width: `${parentWidth}px`,
  });

  const gotoPrevious = () => {
    const isFirstIndex = 0;
    const newIndex =
      currentIndex === isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const gotoNext = useCallback(() => {
    const isLastIndex = slides.length - 1;
    const newIndex = currentIndex === isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  // useEffect(() => {
  //   console.log('useEffect');
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //     gotoNext();
  //   }, 200000000);
  //   return () => clearTimeout(timerRef.current);
  // }, [gotoNext]);
  const slidesContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.5s',
  };
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  return (
    <SliderStyle>
      <div className="left" onClick={gotoPrevious}>
        <BsChevronLeft />
      </div>
      <div className="right" onClick={gotoNext}>
        <BsChevronRight />
      </div>

      <div className="styleOverflowStyle">
        {slides.map((_, slideIndex) => {
          const feature =
            slideIndex === 0 ? (
              <Button
                key={slideIndex}
                children="shop now"
                className="sliderOneBtn noselect"
                onClick={() => navigate('/shop')}
              />
            ) : null;
          return feature;
        })}

        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                style={getSlideStyleWIthBackground(slideIndex)}
              >
                <h3 className="sliderTitle noselect">{slide.title}</h3>
                <p className="substyle noslect">{slide.sub}</p>
                {/* {slideIndex === 1 ? (
                  <div className="slidertwo">
                    <TiShoppingCart />
                    <p>Order now</p>
                  </div>
                ) : (
                  ''
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </SliderStyle>
  );
};
export default ImageSlider;
