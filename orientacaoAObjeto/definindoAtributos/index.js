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

vingadores.titulo = "Vingadores 2";
vingadores.ano = 2014;
vingadores.genero = "Ação";

console.log(`Nome: ${vingadores.titulo}`);
console.log(vingadores.ano);
console.log(vingadores.genero);

let batman = new Filme();
batman.titulo = "Batman";
batman.ano = 2009;
batman.genero = "Ação"
console.log(`Nome: ${batman.titulo}`);
console.log(batman.ano);
console.log(batman.genero);