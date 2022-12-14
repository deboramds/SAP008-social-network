import cadastro from './lib/pages/cadastro/cadastro.js';
import login from './lib/pages/home/home.js';
import feed from './lib/pages/feed/feed.js';
import { userStateChanged } from './configurafirebase/exports.js';

const main = document.querySelector('#root');

function redirectAuthUser(user) {
  if (user) {
    window.location.hash = '#feed';
  } else {
    window.location.hash = '#login';
  }
}

async function init() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#cadastro':
      main.appendChild(cadastro());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#feed':
      main.appendChild(await feed());
      break;
    default:
      main.appendChild(login());
      break;
  }
}

window.addEventListener('hashchange', init);

window.addEventListener('load', () => {
  init();
  userStateChanged(redirectAuthUser);
});
