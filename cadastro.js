const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const nome = $("#nome").value;
  const email = $("#email").value;
  const login = $("#login").value;
  const senha = $("#senha").value;
  const confirmaSenha = $("#confirma-senha").value;

  const senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    alert("Sua confirmacao de senha nao confere.\nPor favor verifique.");
    return;
  }

  const tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    login.length !== 0 &&
    senhaConfirmada.length !== 0 &&
    senha.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const usuarioCadastrado = {
    email,
    nome,
    login,
    senha,
    confirmaSenha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
});