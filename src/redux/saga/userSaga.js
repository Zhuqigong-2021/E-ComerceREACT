import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  getCurrentUser,
  createUserDocFromAuth,
  signinWithGooglePopup,
  signInUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signoutUser,
} from '../../utils/firebase';
import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from '../reducer/UserSlice';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signinWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  // { payload: { email, password } }
  try {
    // console.log(action.payload);
    // const { email, password } = action.payload;

    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    console.log(email);
    console.log(password);
    console.log(displayName);
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log(user);
    // yield put(signUpSuccess({ ...user, displayName }));
    // const userAuth = yield call(getSnapshotFromUserAuth, user, { displayName });
    yield put(signUpSuccess(user, { displayName }));
    yield call(getSnapshotFromUserAuth, user, { displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

// export function* signInAfterSignUp({ payload: { user, payload } }) {
//   yield call(getSnapshotFromUserAuth, user, payload);
// }

export function* signOut() {
  try {
    yield call(signoutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest('user/googleSignInStart', signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest('user/checkUserSession', isUserAuthenticated);
}
export function* onEmailAndPasswordStart() {
  yield takeLatest('user/emailSignInStart', signInWithEmailAndPassword);
}
export function* onSignUpStart() {
  yield takeLatest('user/signUpStart', signUp);
}
// export function* onSignUpSuccess() {
//   yield takeLatest('user/signUpSucess', signInAfterSignUp);
// }
export function* onSignOutStart() {
  yield takeLatest('user/signOutStart', signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailAndPasswordStart),
    call(onSignUpStart),
    // call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
