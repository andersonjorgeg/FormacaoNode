// Simulando o envio de email. com callback
// O callback também pode receber parâmetros como uma função normal

function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`

      Para: ${para}
      -----------------------------------------------
      ${corpo}
      -----------------------------------------------
      De: Anderson Jorge
    `)
    callback("OK", 5, "5s", "Anderson");
  }, 5000)
}
console.log("Início do envio de email");
enviarEmail("Oi seja bem vindo", "João Batista", (status, amount, time, nome) => {
  console.log(`
    De: ${nome}
    status: ${status}
    Contato: ${amount}
    Tempo de envio: ${time}
    `);
  console.log("Tudo OK !!!");
});
