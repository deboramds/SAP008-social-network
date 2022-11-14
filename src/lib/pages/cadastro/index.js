import { createUser } from "../../../configurafirebase/exports";

export default () => {
  const container = document.createElement('div')
  const template = `
     <form method="post" class="form-register">
        <h1>Cadastro</h1>
        <input type="text" placeholder="Nome" id="name-area" class="create-area">
        <input type="email" placeholder="seu@email.com" id="email-area" class="create-area">
        <input type="password" placeholder="Senha" id="password-area" class="create-area">
     </form>
     <div class="box-btns">
        <a href="#login" class="btn-back btn-area" id="btn-back">Voltar</a>
        <button type="submit" class="btn-confirm btn-area"  id="btn-confirm">Confirmar</button>
     </div>
     `;
  container.innerHTML = template;
  return container;

}
