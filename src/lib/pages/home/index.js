export default () => {
  const container = document.createElement('div');
  const template = `
    <form method="post" class = "form-login flex-direction">
      <h2>Login</h2>
      <input type="email" placeholder="seu@email.com" class="login-area font-size" id="email-area" name="email-area" requered>
      <input type="password" placeholder="Senha" class="login-area font-size" id="password-area" name="password-area" requered>
      <button class="btn-sign-in font-size" id="btn-sign-in">Entrar</button>
      <button class="btn-recover-password font-size" id="btn-recover-password">Esqueci minha senha</button>                
    </form>
        `;
  container.innerHTML = template;
  container.querySelector('#btn-sign-in').container.addEventListener('click', (e) => {
    const inputEmail = container.querySelector('#email-area').value;
    const inputPassword = container.querySelector('#password-area').value;
    const invalidFormat = /\S+@\S+\.\S+/.test(inputEmail);
  });
  return container;
};
