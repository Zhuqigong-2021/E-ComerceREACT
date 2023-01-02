import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categorySaga';
import { userSaga } from './userSaga';

function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}

export default rootSaga;
