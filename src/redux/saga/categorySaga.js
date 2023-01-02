import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import {
  fetchCategoryFailed,
  fetchCategorySuccess,
  fetchCategoryStart,
} from '../reducer/CategorySlice';
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategorySuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest('category/fetchCategoryStart', fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
