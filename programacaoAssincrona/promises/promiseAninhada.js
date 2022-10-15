// Promises aninhadas ou promises hell

function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1500);
  });
};

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("anderson.jorge33@gmail.com");
    }, 2000);
  })
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;

      if(!deuErro) {
        resolve({time: 6, to: "anderson.jorge33@gmail.com"}); // OBS: só pode ser passado um parâmetro em promise
      } else {
        reject("Fila cheia");
      }
    }, 4000);
  });
}

console.log('Inicio');
pegarId().then((id) => {
  buscarEmailNoBanco(id).then((email) => {
    enviarEmail("Ola como vai?", email).then(() => {
      console.log("Email enviado para o usuário com id: " + id)
    }).catch(err => {
      console.log(err)
    })
  })
})
console.log('Fim');

