import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const createUser = (user, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("deu certo")
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};
