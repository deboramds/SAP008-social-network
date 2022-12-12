import {
  // eslint-disable-next-line max-len
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'; // eslint-disable-line import/no-unresolved

import { app } from './configfirebase.js';

// export {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   updateProfile,
//   signOut,
//   onAuthStateChanged,
// // eslint-disable-next-line import/no-unresolved
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function createUser(name, email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}
export function loginEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signInGoogle() {
  return signInWithPopup(auth, provider);
}
export function signOutUser() {
  return signOut(auth);
}

export function userStateChanged(callback) {
 // const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

export function userStateLogout() {
  const authentication = getAuth();
  signOut(authentication)
    .then(() => {
    })
    .catch(() => {
    });
}
