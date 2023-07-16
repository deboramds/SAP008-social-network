import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

import { app } from './configfirebase.js';

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
  onAuthStateChanged(auth, callback);
}

export function userStateLogout() {
  signOutUser()
    .then(() => {
      // Lógica adicional após o logout
    })
    .catch(() => {
      // Tratamento de erro
    });
}

export const getCurrentUser = () => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    return {
      email: currentUser.email,
      displayName: currentUser.displayName,
    };
  } else {
    return null;
  }
};
