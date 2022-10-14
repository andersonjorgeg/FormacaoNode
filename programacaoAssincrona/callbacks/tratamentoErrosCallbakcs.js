// Simulando o envio de email. com callback
// Tratamento de erros com callback

function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    
    // ....... Lógica

    let deuErro = false;

    if(deuErro) {
      callback(12, 'O envio do email falhou')
    } else {
      callback(12);
    }
  }, 5000)
}
console.log("Início do envio de email");

enviarEmail("Oi seja bem vindo", "João Batista", (time, erro) => {

  if(erro == undefined) {
    console.log("Tudo OK !!!")
    console.log(`Tempo de envio: ${time} s`)
  } else {
    console.log("Ocorreu um erro: " + erro)
  }
});
