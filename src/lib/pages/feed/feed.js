import { createPost, getPosts, deletePost, updateLikes, updatePost } from '../../../configurafirebase/configfirestore.js';
import { userStateLogout, userStateChanged, getCurrentUser } from '../../../configurafirebase/exports.js';

export default async () => {
  const container = document.createElement('div');
  const template = `
    <div class="container-feed">
    <div className="container-right">
    <div className="container-right">
      <figure>

      </figure>
    </div>

      <div class="botao-sair">
        <button id="logout">sair</button>
      </div>
      <div class="input-post">
        <textarea id="textstory" placeholder="escreva seu post"></textarea>
        <button id="submit">Postar</button>
      </div> 

      <div id="postcontainer"></div>
     
    
    </div>
  `;
  container.innerHTML = template;
  const botaoSair = container.querySelector('#logout');
  const botaoPostar = container.querySelector('#submit');
  const textoPost = container.querySelector('#textstory');
  const postArea = container.querySelector('#postcontainer');

  botaoSair.addEventListener('click', () => {
    console.log('deslogar');
    userStateLogout(userStateChanged);
  });

  botaoPostar.addEventListener('click', async () => {
    console.log(textoPost.value);
    const currentUser = getCurrentUser();
    await createPost(textoPost.value, currentUser.email);
    const newPost = document.createElement('div');
    newPost.innerHTML = `
      <h1>${textoPost.value}</h1>
      <p>Postado por: ${currentUser.email}</p>
      <button class="delete-btn">Deletar</button>
      <button class="edit-btn">Editar</button>
      <button class="like-btn">Curtir</button>
      <span class="likes-count">0</span> <!-- Adicione a contagem inicial de curtidas -->
    `;
    postArea.appendChild(newPost);
    textoPost.value = '';
  });

  const posts = await getPosts();
  console.log(posts);
  if (Array.isArray(posts)) {
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h1>${post.textoPost}</h1>
        <p>Postado por: ${post.userName}</p>
        <button class="delete-btn" data-postid="${post.id}">Deletar</button>
        <button class="edit-btn">Editar</button>
        <button class="like-btn">Curtir</button>
        <span class="likes-count">${post.likes}</span> <!-- Exiba a contagem de curtidas -->
      `;
      postArea.appendChild(postElement);

      const likeButton = postElement.querySelector('.like-btn');
      const likesCountElement = postElement.querySelector('.likes-count');
      let likesCount = post.likes || 0;

      likeButton.addEventListener('click', async () => {
        const postId = post.id;

        // Atualize as curtidas no Firestore
        await updateLikes(postId, likesCount + 1);

        // Atualize a exibição da contagem de curtidas no elemento HTML
        likesCount += 1;
        likesCountElement.textContent = likesCount.toString();
        console.log('Likes updated successfully:', likesCount);
      });

      const editButton = postElement.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        const postId = post.id;
        const editedText = prompt('Digite o novo texto do post:');
        if (editedText) {
          // Atualize o post no Firestore
          updatePost(postId, editedText);
          // Atualize o texto exibido no elemento HTML
          postElement.querySelector('h1').textContent = editedText;
        }
      });
    });
  }

  postArea.addEventListener('click', deletarPost);
  async function deletarPost(event) {
    const deleteButton = event.target;
    if (deleteButton.classList.contains('delete-btn')) {
      const postId = deleteButton.getAttribute('data-postid');
      if (postId) {
        await deletePost(postId);
        deleteButton.parentElement.remove();
      }
    }
  }

  return container;
};
