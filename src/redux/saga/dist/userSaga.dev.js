"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSnapshotFromUserAuth = getSnapshotFromUserAuth;
exports.isUserAuthenticated = isUserAuthenticated;
exports.signInWithGoogle = signInWithGoogle;
exports.signInWithEmailAndPassword = signInWithEmailAndPassword;
exports.signUp = signUp;
exports.signInAfterSignUp = signInAfterSignUp;
exports.signOut = signOut;
exports.onGoogleSignInStart = onGoogleSignInStart;
exports.onCheckUserSession = onCheckUserSession;
exports.onEmailAndPasswordStart = onEmailAndPasswordStart;
exports.onSignUpStart = onSignUpStart;
exports.onSignUpSuccess = onSignUpSuccess;
exports.onSignOutStart = onSignOutStart;
exports.userSaga = userSaga;

var _effects = require("redux-saga/effects");

var _firebase = require("../../utils/firebase");

var _UserSlice = require("../reducer/UserSlice");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getSnapshotFromUserAuth),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(isUserAuthenticated),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(signInWithGoogle),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(signInWithEmailAndPassword),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(signUp),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(signInAfterSignUp),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(signOut),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(onGoogleSignInStart),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(onCheckUserSession),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(onEmailAndPasswordStart),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(onSignUpStart),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(onSignUpSuccess),
    _marked13 =
/*#__PURE__*/
regeneratorRuntime.mark(onSignOutStart),
    _marked14 =
/*#__PURE__*/
regeneratorRuntime.mark(userSaga);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSnapshotFromUserAuth(userAuth, additionalDetails) {
  var userSnapshot;
  return regeneratorRuntime.wrap(function getSnapshotFromUserAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_firebase.createUserDocFromAuth, userAuth, additionalDetails);

        case 3:
          userSnapshot = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _UserSlice.signInSuccess)(_objectSpread({
            id: userSnapshot.id
          }, userSnapshot.data())));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return (0, _effects.put)((0, _UserSlice.signInFailed)(_context.t0));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function isUserAuthenticated() {
  var userAuth;
  return regeneratorRuntime.wrap(function isUserAuthenticated$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_firebase.getCurrentUser);

        case 3:
          userAuth = _context2.sent;

          if (userAuth) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return");

        case 6:
          _context2.next = 8;
          return (0, _effects.call)(getSnapshotFromUserAuth, userAuth);

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return (0, _effects.put)((0, _UserSlice.signInFailed)(_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function signInWithGoogle() {
  var _ref, user;

  return regeneratorRuntime.wrap(function signInWithGoogle$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_firebase.signinWithGooglePopup);

        case 3:
          _ref = _context3.sent;
          user = _ref.user;
          _context3.next = 7;
          return (0, _effects.call)(getSnapshotFromUserAuth, user);

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _UserSlice.signInFailed)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function signInWithEmailAndPassword(_ref2) {
  var _ref2$payload, email, password, _ref3, user;

  return regeneratorRuntime.wrap(function signInWithEmailAndPassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref2$payload = _ref2.payload, email = _ref2$payload.email, password = _ref2$payload.password;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(_firebase.signInUserWithEmailAndPassword, email, password);

        case 4:
          _ref3 = _context4.sent;
          user = _ref3.user;
          _context4.next = 8;
          return (0, _effects.call)(getSnapshotFromUserAuth, user);

        case 8:
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 14;
          return (0, _effects.put)((0, _UserSlice.signInFailed)(_context4.t0));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 10]]);
}

function signUp(_ref4) {
  var _ref4$payload, email, password, displayName, _ref5, user;

  return regeneratorRuntime.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ref4$payload = _ref4.payload, email = _ref4$payload.email, password = _ref4$payload.password, displayName = _ref4$payload.displayName;
          _context5.prev = 1;
          console.log(email);
          console.log(password);
          console.log(displayName);
          _context5.next = 7;
          return (0, _effects.call)(_firebase.createAuthUserWithEmailAndPassword, email, password);

        case 7:
          _ref5 = _context5.sent;
          user = _ref5.user;
          console.log(user);
          _context5.next = 12;
          return (0, _effects.put)((0, _UserSlice.signUpSuccess)(user, {
            displayName: displayName
          }));

        case 12:
          _context5.next = 18;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](1);
          _context5.next = 18;
          return (0, _effects.put)((0, _UserSlice.signUpFailed)(_context5.t0));

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[1, 14]]);
}

function signInAfterSignUp(_ref6) {
  var _ref6$payload, user, additionalDetails;

  return regeneratorRuntime.wrap(function signInAfterSignUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _ref6$payload = _ref6.payload, user = _ref6$payload.user, additionalDetails = _ref6$payload.additionalDetails;
          _context6.next = 3;
          return (0, _effects.call)(getSnapshotFromUserAuth, user, additionalDetails);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function signOut() {
  return regeneratorRuntime.wrap(function signOut$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _effects.call)(_firebase.signoutUser);

        case 3:
          _context7.next = 5;
          return (0, _effects.put)((0, _UserSlice.signOutSuccess)());

        case 5:
          _context7.next = 11;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 11;
          return (0, _effects.put)((0, _UserSlice.signUpFailed)(_context7.t0));

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 7]]);
}

function onGoogleSignInStart() {
  return regeneratorRuntime.wrap(function onGoogleSignInStart$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeLatest)('user/googleSignInStart', signInWithGoogle);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function onCheckUserSession() {
  return regeneratorRuntime.wrap(function onCheckUserSession$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeLatest)('user/checkUserSession', isUserAuthenticated);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function onEmailAndPasswordStart() {
  return regeneratorRuntime.wrap(function onEmailAndPasswordStart$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.takeLatest)('user/emailSignInStart', signInWithEmailAndPassword);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function onSignUpStart() {
  return regeneratorRuntime.wrap(function onSignUpStart$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeLatest)('user/signUpStart', signUp);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function onSignUpSuccess() {
  return regeneratorRuntime.wrap(function onSignUpSuccess$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _effects.takeLatest)('user/signUpSucess', signInAfterSignUp);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function onSignOutStart() {
  return regeneratorRuntime.wrap(function onSignOutStart$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)('user/signOutStart', signOut);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function userSaga() {
  return regeneratorRuntime.wrap(function userSaga$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onCheckUserSession), (0, _effects.call)(onGoogleSignInStart), (0, _effects.call)(onEmailAndPasswordStart), (0, _effects.call)(onSignUpStart), (0, _effects.call)(onSignUpSuccess), (0, _effects.call)(onSignOutStart)]);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}