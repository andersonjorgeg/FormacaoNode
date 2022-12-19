class Filme {
  constructor(titulo, ano, genero, diretor, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.duracao = duracao;
    this.atores = [];
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

  Ficha() {
    console.log(`Titulo: ${this.titulo}`);
    /* console.log(`Ano de lançamento: ${this.ano}`);
    console.log(`Gênero: ${this.genero}`);
    this.Reproduzir();
    this.Avancar(); */
  }
}

let vingadores = new Filme(
  "Vingadores: Era de Ultron",
  2015,
  "Ação",
  "Joss Whedon",
  "2h"
);

let batman = new Filme(
  "Batman Begins",
  2005,
  "Ação",
  "Christopher Nolan",
  "2h30"
);

let starWars = new Filme(
  "starWars",
  2005,
  "Ação",
  "Christopher Nolan",
  "2h30"
);

vingadores.Ficha();
batman.Ficha();
starWars.Ficha();
