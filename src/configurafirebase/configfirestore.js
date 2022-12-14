import { collection, addDoc, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'; // eslint-disable-line import/no-unresolved
import { app } from './configfirebase.js';

export const db = getFirestore (app);

export const loginUser = (email, password) => {
}
export const createPost = async ( textoPost ) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
        textoPost: textoPost,
    });
    console.log("Document written with ID: ", docRef.id);

}
export const getPosts = async () =>{
    const posts = []
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        posts.push({id:doc.id, ...doc.data()});
    });
    return posts;


}

