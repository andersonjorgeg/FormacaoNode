// async / await

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

function pegarUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {name: "Anderson", lang: "JS"},
        {name: "Alan", lang: "Python"},
        {name: "Junior", lang: "C#"}
      ]);
    }, 4000)
  }); 
};

// async/await é bloqueante.
async function principal(){
  let usuarios = await pegarUsuarios();
  console.log(usuarios);
};
console.log("Async/Await");

principal();

pegarUsuarios().then((usuarios) => {
  console.log(usuarios);
})
console.log("then");

