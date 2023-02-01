import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase';

const initialState = {
  categories: [],
  // status: 'idle',
  // error: null,

  isLoading: false,
};

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoryStart: (state) => {
      state.isLoading = true;
    },
    fetchCategorySuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoryFailed: (state) => {
      state.isLoading = false;
    },
  },
  //this is for thunk
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchCategory.pending, (state) => {
  //       return { ...state, status: 'loading' };
  //     })
  //     .addCase(fetchCategory.fulfilled, (state, action) => {
  //       return {
  //         ...state,
  //         status: 'succeeded',
  //         categories: action.payload,
  //       };
  //     })
  //     .addCase(fetchCategory.rejected, (state, action) => {
  //       return { ...state, status: 'failed', error: action.error.message };
  //     });
  // },
});

export const { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailed } =
  CategorySlice.actions;

//this is for thunk
// export const getCategoryStatus = (state) => state.category.status;
// export const getCategoryError = (state) => state.category.error;
export const isLoading = (state) => state.catergory.isLoading;
const selectCategoryReducer = (state) => state.category;
const selectCategories = createSelector(
  [selectCategoryReducer],
  (CategorySlice) => CategorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
export default CategorySlice.reducer;
