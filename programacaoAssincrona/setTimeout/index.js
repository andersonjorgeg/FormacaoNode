// Simulando o envio de email.

function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`

      Para: ${para}
      -----------------------------------------------
      ${corpo}
      -----------------------------------------------
      De: Anderson Jorge
    `)
  }, 8000)
}
console.log("Início do envio de email");
enviarEmail("Oi seja bem vindo", "João Batista");
console.log("Seu email foi enviado, deve chegar em minutos");
console.log("Tudo OK !!!");

