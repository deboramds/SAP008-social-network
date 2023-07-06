import { createPost, getPosts } from '../../../configurafirebase/configfirestore.js';
import { userStateLogout, userStateChanged } from '../../../configurafirebase/exports.js';


export default async () => {
  const container = document.createElement('div');
  const template = `
  <div class = "container-feed">
    <div class = "input-post">
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
  function deslogar() {
    console.log('deslogar');
    userStateLogout(userStateChanged);
  }

  botaoPostar.addEventListener('click', postar);
  async function postar() {
    console.log(textoPost.value);
    await createPost(textoPost.value);
    postArea.innerHTML += `
      <h1>${textoPost.value}</h1>    
    `;
    textoPost.value = '';
  }

  const posts = await getPosts();
  console.log(posts);
  for (const post of posts) {
    postArea.innerHTML += `
      <h1>${post.title}</h1>
    `;
  }

  return container;
};

