const fs = require('fs');

const options = {flag: 'a'}

fs.writeFile("./anderson.jorge", "\nNovo conteúdo do arquivo", options, (erro) => {
  if(erro) {
    console.log("Erro durante o Salvamento")
  } else if(options.flag === 'a') {
    console.log("conteudo adicionado com sucesso")
  } else {
    console.log("conteudo sobrescrito com sucesso")
  }
})
