import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};
//'idle' | 'loading'| 'succeeded' | 'failed"
export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    try {
      const response = await getCategoriesAndDocuments();

      return response;
    } catch (err) {
      return err.message;
    }
  }
);

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // setCategories: (state, action) => {
    //   return { ...state, categories: action.payload };
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategory.pending, (state) => {
        // state.status = 'loading';
        return { ...state, status: 'loading' };
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        // state.categories = [...action.payload];
        return {
          ...state,
          status: 'succeeded',
          categories: action.payload,
        };
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        // state.status = 'failed';
        // state.error = action.error.message;
        return { ...state, status: 'failed', error: action.error.message };
      });
  },
});

export const { setCategories } = CategorySlice.actions;
export const getCategoryStatus = (state) => state.category.status;
export const getCategoryError = (state) => state.category.error;
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
