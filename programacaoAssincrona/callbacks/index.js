// Simulando o envio de email. com callback
// callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`

      Para: ${para}
      -----------------------------------------------
      ${corpo}
      -----------------------------------------------
      De: Anderson Jorge
    `)
    callback();
  }, 5000)
}
console.log("Início do envio de email");
enviarEmail("Oi seja bem vindo", "João Batista", () => {
  console.log("OLÁ ISSO É UM CALLBACK");
  console.log("Ele acaba de ser executado!")
});
console.log("Seu email foi enviado, deve chegar em minutos");
console.log("Tudo OK !!!");
