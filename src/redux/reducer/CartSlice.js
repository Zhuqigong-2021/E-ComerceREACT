import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const addCartItem = (cartItems, productToAdd) => {
  //find if cartitems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  //find cart item to remove
  // const existingCartItem = cartItems.find(
  //   (cartItem) => cartItem.id === cartItemToRemove.id
  // );
  //
  // to check if the quantity equals to one,if yes remove the item from the cart
  // if (existingCartItem && existingCartItem.quantity === 1) {
  //   return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  // }

  // return back the item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : { ...cartItem, quantity: 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const addItemToCart = (cartItems, productToAdd) => {
  // const newCartItems =
  return addCartItem(cartItems, productToAdd);
  // updateCartItems(newCartItems);
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
  // const newCartItems =
  return removeCartItem(cartItems, cartItemToRemove);
  // updateCartItems(newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  // const newCartItems =
  return clearCartItem(cartItems, cartItemToClear);
  // updateCartItems(newCartItems);
};

// const setIsCartOpen = (bool) => {
//   dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
// };
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      return { ...state, cartItems: action.payload };
    },
    setIsCartOpen: (state, action) => {
      return { ...state, isCartOpen: action.payload };
    },
    clearCartItems: (state) => {
      return { ...state, cartItems: [] };
    },
  },
});

export const { setCartItems, setIsCartOpen, clearCartItems } =
  CartSlice.actions;
export default CartSlice.reducer;
