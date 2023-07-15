import { createUser } from '../../../configurafirebase/exports.js';

export default () => {
  const container = document.createElement('div');
  const template = `
  `
  container.innerHTML = template;
  const form = container.querySelector('#cadastrarRegister');
  const email = container.querySelector('#usernameRegister');
  const senha = container.querySelector('#passwordRegister');
  const name = container.querySelector('#nameRegister');

  form.addEventListener('click', (e) => {
    e.preventDefault();
    createUser(name.value, email.value, senha.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
      });
  });
  return container;
};

