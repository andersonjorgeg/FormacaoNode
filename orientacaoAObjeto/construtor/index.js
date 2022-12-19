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
}

let vingadores = new Filme(
  "Vingadores: Era de Ultron",
  2015,
  "Ação",
  "Joss Whedon",
  "2h"
);

console.log(`Nome: ${vingadores.titulo}`);
console.log(vingadores.ano);
console.log(vingadores.genero);

let batman = new Filme("Batman Begins", 2005, "Ação", "Christopher Nolan", "2h30" );
console.log(`Nome: ${batman.titulo}`);
console.log(batman.ano);
console.log(batman.genero);
