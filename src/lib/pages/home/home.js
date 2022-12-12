import { loginEmailPassword, signInGoogle } from '../../../configurafirebase/exports.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <form class = "form-login flex-direction">
      <p id="msgErro"></p>
      <h2>Login</h2>
      <input type="email" placeholder="seu@email.com" class="login-area font-size" id="email" name="email-area" requered>
      <input type="password" placeholder="Senha" class="login-area font-size" id="password" name="password-area" requered>
      <button class="btn-sign-in font-size" id="btn-sign-in">Entrar</button>
      <button class="btn-recover-password font-size" id="btn-recover-password">Esqueci minha senha</button> 
    </form>
    <p class="error text-center font-size" id="user-error"></p> 
      <p class="error text-center font-size" id = "user-error-gmail"></p>
      <p class="our text-center font-size">- ou -</p>
      <section class="section-login-google flex-direction">
        <button class="btn-google text-center font-size" id="btn-google"><img src="" alt="btn-google" class="">Sign in with Google</button>
      </section>
      <p class="font-size text-center">
        Ainda não tem conta? <a href="#cadastro" id="click-register">Cadastre-se</a>
      </p>
    </section>
  </section>
  <section class="header-desktop">
    <a href="#about">Sobre Guest star Supernova</a>
  </section>
        `;
  container.innerHTML = template;
  const login = container.querySelector('#btn-sign-in');
  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  const btnGoogle = container.querySelector('#btn-google');
  const msgErro = container.querySelector('#msgErro');

  login.addEventListener('click', (e) => {
    e.preventDefault();

    loginEmailPassword(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(user.displayName);
        window.location.hash = '#feed';
      })
      .catch((error) => {
        msgErro.innerHTML = 'usário ou senha incorretos';
      });
  });

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        msgErro.innerHTML= 'erro ao entrar com Google';
      });
  });

  return container;
};