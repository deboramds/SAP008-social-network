import { createPost, getPosts, deletePost, updateLikes } from '../../../configurafirebase/configfirestore.js';
import { userStateLogout, userStateChanged } from '../../../configurafirebase/exports.js';

export default async () => {
  const container = document.createElement('div');
  const template = `
    <div class="container-feed">
      <div class="input-post">
        <textarea id="textstory" placeholder="escreva seu post"></textarea>
        <button id="submit">Postar</button>
      </div> 
      <button id="logout">sair</button>
      <div id="postcontainer"></div>
    </div>
  `;
  container.innerHTML = template;
  const botaoSair = container.querySelector('#logout');
  const botaoPostar = container.querySelector('#submit');
  const textoPost = container.querySelector('#textstory');
  const postArea = container.querySelector('#postcontainer');

  botaoSair.addEventListener('click', deslogar);
  async function deslogar() {
    console.log('deslogar');
    userStateLogout(userStateChanged);
  }

  botaoPostar.addEventListener('click', postar);
  async function postar() {
    console.log(textoPost.value);
    await createPost(textoPost.value);
    const newPost = document.createElement('div');
    newPost.innerHTML = `
      <h1>${textoPost.value}</h1>
      <button class="delete-btn">Deletar</button>
      <button class="like-btn">Curtir</button>
      <span class="likes-count">0</span> <!-- Adicione a contagem inicial de curtidas -->
    `;
    postArea.appendChild(newPost);
    textoPost.value = '';
  }

  const posts = await getPosts();
  console.log(posts);
  if (Array.isArray(posts)) {
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h1>${post.textoPost}</h1>
        <button class="delete-btn" data-postid="${post.id}">Deletar</button>
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
