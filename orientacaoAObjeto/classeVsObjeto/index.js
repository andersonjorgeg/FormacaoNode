class Filme{
  constructor() {
    this.Titulo = '';
    this.ano = 0;
    this.genero = '';
    this.diretor = '';
    this.atores = [];
    this.duracao = 0;
  }

  Reproduzir() {
    console.log("Reproduzindo...");
  }
  Pausar() {
    console.log("Pausado ||");
  }
  Avancar() {
    console.log("Avançar >>");
  }
  Fechar() {
    console.log("Fechar X");
  }
}

let vingadores = new Filme();
let hulk = new Filme();
let starWars = new Filme();
