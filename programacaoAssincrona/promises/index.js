// Aula - Promises na prática

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = true;

      if(!deuErro) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  });
}

enviarEmail("Olá, mundo!", "anderson.jorge33@gmail.com").then(() => {
  console.log("OPA, VC CONSEGUI FAZER QUE ME PROMETEU")
}).catch(() => {
  console.log("DEU ERRO")
})
