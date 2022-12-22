const fs = require('fs');

function modificarUsuario(nome, curso, categoria) {
  fs.readFile("./usuario.json", {encoding: "utf8"}, (erro, dados) => {
    if(erro) {
      console.log("Um erro aconteceu!")
    } else {
      let conteudo = JSON.parse(dados);
      
      conteudo.nome = nome;
      conteudo.curso = curso;
      conteudo.categoria = categoria;

      fs.writeFile("./usuario.json", JSON.stringify(conteudo, null, 2), (erro) => {
        if(erro) {
          console.log("Ocorreu um erro")
        } else {
          console.log("Arquivo escrito com sucesso")
        }
      })
    }
  })
}

modificarUsuario("Anderson", "PHP do jeito certo!", "PHP");

