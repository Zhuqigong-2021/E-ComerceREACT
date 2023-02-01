import { createSlice, createSelector, current } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase';

const initialState = {
  isFavoured: 'any',
  category: 'any',
  price: 'any',
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFavoured: (state, action) => {
      return { ...state, isFavoured: action.payload };
    },
    filterCategory: (state, action) => {
      return { ...state, category: action.payload };
    },
    setPriceFilter: (state, action) => {
      return { ...state, price: action.payload };
    },
    setFilter: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { toggleFavoured, filterCategory, setPriceFilter } =
  FilterSlice.actions;
export const { setFilter } = FilterSlice.actions;

// export const getIsFavoured = (state) => state.filter.isFavoured;
// export const getFilter = (state) => state.filter.filter;
// export const getPrice = (state) => state.filter.price;
export const getFilter = (state) => state.filter;

export default FilterSlice.reducer;
