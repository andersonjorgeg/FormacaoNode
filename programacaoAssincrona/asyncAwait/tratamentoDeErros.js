// tratamento de erros com async await

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

async function principal(){
  let id = await pegarId();
  let email = await buscarEmailNoBanco(id);
  try{
    await enviarEmail("Ola como vai?", email);
    console.log('Email enviado com sucesso !!!')
  }catch(err){
    console.log(err)
  }
}

principal();  
