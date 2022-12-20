import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  collection,
  updateDoc,
  writeBatch,
  query,
  getDocs,
  DocumentSnapshot,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: 'user@example.com',
});

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  // .reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  return categoryMap;
};
// export const addProductDocFromAuth = async (userAuth) => {
//   if (!userAuth) return;
//   const productRef = doc(db, 'users', userAuth.uid);
//   await updateDoc(productRef, {
//     productRef,
//     product: [
//       {
//         id: 1,
//         prodocutName: 'Ada',
//         price: 'Lovelace',
//         desctiption: 1815,
//         imageUrl: 'aaa',
//       },
//       {
//         id: 2,
//         prodocutName: 'Ada',
//         price: 'Lovelace',
//         desctiption: 1815,
//         imageUrl: 'aaa',
//       },
//     ],
//   });
//   const data = await getDoc(productRef);
//   return data;
// };

export const createUserDocFromAuth = async (userAuth, payload = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...payload,
      });
      //we can either use setDoc or addDOc to create user DOc but difference,setDoc need id ,while addDoc not
      // await addDoc(collection(db, 'users'), {
      //   displayName: displayName,
      //   email: email,
      //   createAt: createAt,
      //   ...payload,
      // });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const signupWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signoutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
