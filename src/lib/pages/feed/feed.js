import { createPost, getPosts } from '../../../configurafirebase/configfirestore.js';
import { userStateLogout, userStateChanged } from '../../../configurafirebase/exports.js';

export default async () => {
  const container = document.createElement('div');
  const template = `
        <textarea id="textstory" placeholder= "escreva seu post"></textarea>
        <button id="submit">Postar</button> 
        <button id="logout">sair</button>
        <div id="postcontainer"></div>
       `;
  container.innerHTML = template;
  const botaoSair = container.querySelector('#logout');
  const botaoPostar = container.querySelector('#submit');
  const textoPost = container.querySelector('#textstory');
  const postArea = container.querySelector('#postcontainer');
  // eslint-disable-next-line no-use-before-define
  botaoSair.addEventListener('click', deslogar);
  function deslogar() {
    console.log('deslogar');
    userStateLogout(userStateChanged);
  }

  botaoPostar.addEventListener('click', postar);
  function postar() {
    console.log(textoPost.value);
    createPost(textoPost.value);
    postArea.innerHTML += `
        <h1>${textoPost.value}</h1>    
    `
  }

  const posts = await getPosts();
  console.log(posts)
  return container;
};
