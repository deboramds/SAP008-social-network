import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './configfirebase.js';

export const db = getFirestore(app);

export const loginUser = (email, password) => {
  // Implementação da função loginUser
};

export const createPost = async (textoPost) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      textoPost: textoPost,
      likes: 0 // Adicionando o campo "likes" com valor inicial de 0
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export const getPosts = async () => {
  try {
    const posts = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
};

export const deletePost = async (postId) => {
  try {
    await deleteDoc(doc(db, 'posts', postId));
    console.log('Document with ID deleted: ', postId);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

export const updateLikes = async (postId, likesCount) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, { likes: likesCount });
    console.log('Likes updated successfully:', likesCount);
  } catch (error) {
    console.error('Error updating likes:', error);
  }
};

export const updatePost = async (postId, newText) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, { textoPost: newText });
    console.log('Post updated successfully:', newText);
  } catch (error) {
    console.error('Error updating post:', error);
  }
};
