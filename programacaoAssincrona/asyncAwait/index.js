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

// Declaração de uma função assíncrona chamada principal
async function principal(){
  // Declaração de uma variável chamada usuários e atribuição do resultado da chamada da função pegarUsuarios, que é uma função assíncrona também
  let usuarios = await pegarUsuarios();
  console.log(usuarios);
  };
  console.log("Async/Await");
  
  // A função principal é assíncrona, o que significa que ela pode conter instruções que são executadas de forma assíncrona. Isso é útil quando precisamos esperar por algum tipo de processamento ou resposta de uma operação, como uma chamada de API, por exemplo. A palavra-chave "await" é usada para esperar por uma operação assíncrona a ser concluída antes de continuar a execução do código. Nesse caso, a função principal está aguardando o resultado da chamada da função pegarUsuarios antes de imprimir o valor da variável usuários no console.

principal();

pegarUsuarios().then((usuarios) => {
  console.log(usuarios);
})
console.log("then");

