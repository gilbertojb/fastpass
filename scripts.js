const uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const digits    = '0123456789';
const symbols   = '[]{}()*#;/,-_%';

function randNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarSenha() {
  let elementoNovaSenha = document.querySelector('#novaSenha');

  let elementoOptions = document.querySelectorAll('input[type=checkbox]:checked');
  let elementoErro = document.querySelector('#erro');

  if (elementoOptions.length === 0) {
    elementoErro.innerHTML = 'Para uma senha mais segura, selecione uma das opções acima!';
    elementoErro.style.display = 'block';
    return;
  } else {
    elementoErro.innerHTML = '';
    elementoErro.style.display = 'none';
  }

  let caracteres = '';

  elementoOptions.forEach(elemento => {
    let option = elemento.value;

    if (option === 'uppercase') {
      caracteres = caracteres + uppercase;
    }

    if (option === 'lowercase') {
      caracteres = caracteres + lowercase;
    }

    if (option === 'digits') {
      caracteres = caracteres + digits;
    }

    if (option === 'symbols') {
      caracteres = caracteres + symbols;
    }
  });

  let passLength = 20;
  let totalChar = caracteres.length;

  let newPassword = '';

  for (let index = 0; index < passLength; index++) {
    let key = randNumber(0, totalChar - 1);
    newPassword = newPassword + caracteres[key];
  }

  elementoNovaSenha.value = newPassword;
}
