import React, { useState, useRef, useEffect, useCallback } from 'react';
import HomeContainer from './Home.style';
import { SlideContainer } from './Home.style';
import Directory from '../directory/Directory';
import Card from '../front-card/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../redux/reducer/UserSlice';
import Button from '../button/Button';
import { FrontContent } from './Home.style';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ImageSlider from '../slider/ImageSlider';
import { getWith } from '../../hooks/GetWidth';

const Home = () => {
  const dispatch = useDispatch();
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  const signOutUser = () => {
    dispatch(signOutStart());
  };
  const categories = [
    {
      id: 1,
      title: 'Mens fashion',
      imageUrl:
        'https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      route: 'shop/jackets',
    },
    {
      id: 2,
      title: 'Sports shoes',
      imageUrl:
        'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      route: 'shop/sneakers',
    },
    {
      id: 3,
      title: 'Womens fasion',
      imageUrl:
        'https://images.unsplash.com/photo-1581974364779-6ff14c4b0d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80',
      route: 'shop/womens',
    },
    {
      id: 4,
      title: null,
      imageUrl: null,
      route: null,
    },
  ];
  const content = (
    <FrontContent>
      <div className="frontcard">
        {categories.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      {/* <div className="collection">
        <div className="signupbtn">
          {currentUser ? (
            <b>Welcome {currentUser.displayName} </b>
          ) : (
            <b>Sign up for your best user experience</b>
          )}

          {currentUser ? (
            <Link to="/" className="nav__item">
              <Button
                children="sign out"
                onClick={signOutUser}
                className="btn_front"
              />
            </Link>
          ) : (
            <Link to="/signup" className="nav__item">
              <Button children="sign up" className="btn_front" />
            </Link>
          )}
        </div>
        <div className="col">
          <Directory />
        </div>
      </div> */}
    </FrontContent>
  );

  const slides = [
    {
      name: 'image1',
      imageUrl:
        'https://images.unsplash.com/photo-1545110502-0dbad94206e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      // 'https://images.unsplash.com/photo-1609278406501-bba0992e4846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      // 'https://images.unsplash.com/photo-1496237512359-00617bf3c6d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      // 'https://images.unsplash.com/photo-1612231868724-f5192a66c84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      // 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80',
      gradient:
        ' to right, rgba(0,0,0,1),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8),rgba(0,0,0,1)',
      title: 'New year  New fashion',
      sub: 'All you need is right here  ',
    },
    {
      name: 'image2',
      imageUrl:
        'https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      gradient: ' to bottom, #fb923c,#fdba74,#fed7aa,#ffedd5',
      title: 'Beauty is on the way',
      sub: 'Save up to 20% with auto-delivery',
    },
    {
      name: 'image3',
      imageUrl:
        'https://images.unsplash.com/photo-1616007636941-4cdd0478d8e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      gradient: ' to bottom, grey,#9ca3af,#d1d5db,#e5e7eb',
      title: 'Tech is the future',
      sub: 'See how tech change our life',
    },
  ];

  const constainerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100vh',
    margin: '0,auto',
  };
  const width = getWith();

  return (
    <HomeContainer
    // style={getSlideStyleWithBackground(slideIndex)}

    // imageUrl={slideImage[currentIndex].imageUrl}
    // str={slideImage[currentIndex].gradient}
    >
      {/* <div className="left" onClick={() => leftClick()}>
        <BsChevronLeft />
      </div> */}
      {/* <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      > */}

      {/* </div> */}
      {/* <div style={getSlidesContainerStylesWithWidth()}>
        {slideImage.map((_, slideIndex) => (
          <SlideContainer
            key={slideIndex}
           
            imageUrl={slideImage[slideIndex].imageUrl}
            str={slideImage[slideIndex].gradient}
            slideIndex={slideIndex}
          />
        ))}
      </div> */}

      <div style={constainerStyles}>
        <ImageSlider slides={slides} parentWidth={width} />
      </div>
      {content}
      {/* <div> */}
      {/* <img
          src="https://images.unsplash.com/photo-1659290334121-2e6aa96659d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="remote controller"
          className="remote"
          style={{ objectFit: 'cover', width: '100%', height: '100% ' }}
        /> */}
      {/* <div className="slider">
        <Slider1 />
      </div> */}

      {/* </div> */}

      {/* <Directory /> */}
      {/* <div className="right" onClick={() => rightClick()}>
        <BsChevronRight />
      </div> */}
    </HomeContainer>
  );
};

export default Home;
