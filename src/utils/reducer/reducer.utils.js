// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectCartCount,
//   selectCartTotal,
// } from '../../redux/reducer/CartSlice';
export const createAction = (type, payload) => ({ type, payload });

// const cartCount = useSelector((state) => selectCartCount(state));
// const cartTotal = useSelector((state) => selectCartTotal(state));
// export const updateCartItems = (payload) => {
//   const dispatch = useDispatch();
//   return dispatch(setCartItems({ payload, cartCount, cartTotal }));
// };
