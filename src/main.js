import cadastro from './lib/pages/cadastro/cadastro.js';
import login from './lib/pages/home/home.js';
import feed from './lib/pages/feed/feed.js';
import { userStateChanged } from './configurafirebase/exports.js';
import about from './lib/pages/about/about.js';

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
    case '#login':
      main.appendChild(login());
      break;
    case '#cadastro':
      main.appendChild(cadastro());
      break;
      case '#about':
      main.appendChild(about());
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
