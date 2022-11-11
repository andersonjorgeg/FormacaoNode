class Filme{
  constructor() {
    this.titulo = '';
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
vingadores.Reproduzir();
console.log("Titulo do Filme: " + vingadores.titulo);
console.log(`Ano de lançamento: ${vingadores.ano}`);

let hulk = new Filme();
console.log("Titulo do Filme: " + hulk.titulo);
console.log(`Ano de lançamento: ${hulk.ano}`);

let starWars = new Filme();
console.log("Titulo do Filme: " + starWars.titulo);
console.log(`Ano de lançamento: ${starWars.ano}`);
