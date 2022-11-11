import cadastro from './lib/pages/cadastro/index.js';
import login from './lib/pages/home/index.js';

const main = document.querySelector('#root');

function init() {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#cadastro':
        main.appendChild(cadastro());
        break;
      case '#login':
        main.appendChild(login());
        break;
      default:
        main.appendChild(cadastro());
        break;
    }
  });
}

window.addEventListener('load', () => {
  main.appendChild(cadastro());
  init();
});
