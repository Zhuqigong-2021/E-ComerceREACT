import React from 'react';
import { CardStyle, FrontImage } from './Card.style';
import { useNavigate, Link } from 'react-router-dom';
import Directory from '../directory/Directory';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../redux/reducer/UserSlice';
import Button from '../button/Button';
const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const signOutUser = () => {
    dispatch(signOutStart());
  };
  const { id, title, imageUrl, route } = item;
  const special = id === 4 ? 'rgba(255,255,255,0.8)' : 'white';

  return (
    <CardStyle
      special={special}
      style={{ minHeight: id === 4 ? '400px' : null }}
    >
      {id === 4 ? (
        currentUser ? (
          <b className="title sign">Welcome {currentUser.displayName}</b>
        ) : (
          <b className="title sign">Sign up for your best user experience</b>
        )
      ) : (
        <h3 className="title noselect">{title}</h3>
      )}
      {/* {id === 4 && currentUser ? (
        <h3 className="title noselect">welcome {currentUser.displayName}</h3>
      ) : (
        <b>Sign up for your best user experience</b>
      )} */}
      {id === 4 ? null : (
        <FrontImage imageUrl={imageUrl} onClick={() => navigate(route)} />
      )}

      {/* <Link to={route}> */}
      {id === 4 ? (
        currentUser ? (
          <Link to="/">
            <Button
              children="sign out"
              onClick={signOutUser}
              className="signbtn"
            />
          </Link>
        ) : (
          <Link to="/signup">
            <Button children="sign up" className="signbtn" />
          </Link>
        )
      ) : (
        <span className="seemore">See more</span>
      )}
      {/* </Link> */}
      {id === 4 ? <Directory /> : ''}
    </CardStyle>
  );
};

export default Card;
