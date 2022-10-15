// Aula - Promises na prática

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;

      if(!deuErro) {
        resolve({time: 6, to: "anderson.jorge33@gmail.com"}) // OBS: só pode ser passado um parâmetro em promise
      } else {
        reject("Fila cheia")
      }
    }, 2000)
  });
}

enviarEmail("Olá, mundo!", "anderson.jorge33@gmail.com").then(({ to, time }) => {
  console.log(`
    Para: ${to}
    Tempo: ${time}s
  `)
}).catch((erro) => {
  console.log("Erro: " + erro)
})
