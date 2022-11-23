export default () => {
  const container = document.createElement('div');
  const template = `
    <form class = "form-login flex-direction">
      <h2>Login</h2>
      <input type="email" placeholder="seu@email.com" class="login-area font-size" id="email-area" name="email-area" requered>
      <input type="password" placeholder="Senha" class="login-area font-size" id="password-area" name="password-area" requered>
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
        Ainda não tem conta? <a href="#createLogin" id="click-register">Cadastre-se</a>
      </p>
    </section>
  </section>
  <section class="header-desktop">
    <a href="#about">Sobre Guest star Supernova</a>
  </section>
        `;
  container.innerHTML = template;
  container.querySelector('.form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.hash = '#feed';
  });

  login.querySelector('#btn-recover-password').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.hash = '#recover';
  });


    const inputEmail = container.querySelector('#email-area').value;
    const inputPassword = container.querySelector('#password-area').value;
    const invalidFormat = /\S+@\S+\.\S+/.test(inputEmail);
    const userError = login.querySelector('#user-error');
    e.preventDefault();
    if (!inputEmail || !inputPassword) {
      userError.innerHTML = 'Campos obrigatórios';
      userError.style.display = 'block';
    } else if (!invalidFormat) {
      userError.innerHTML = 'Preencha o campo de email corretamente';
      userError.style.display = 'block';
    } else if (inputEmail && inputPassword && invalidFormat) {
      logar(inputEmail, inputPassword).then(() => {
        window.location.hash = '#feed';
      }).catch((error) => {
        userError.innerHTML = errorHandlingGeneral(error.code);
        userError.style.display = 'block';
      });
    }
  };

  login.querySelector('#btn-google').addEventListener('click', (e) => {
    e.preventDefault();
    const userErrorGmail = login.querySelector('#user-error-gmail');
    logarGmail().then(() => {
      window.location.hash = '#feed';
    }).catch((error) => {
      userErrorGmail.innerHTML = errorHandlingGeneral(error.code);
      userErrorGmail.style.display = 'block';
    });
  });
  return;
};