class Dado{
  constructor(faces) {
    this.faces = faces;
  }

  Rolar() {
    console.log(`Resultado do dado d${this.faces}: ${this.GetRandomIntInclusive(1, this.faces)}`)
  }

  // Define uma função chamada GetRandomIntInclusive
  GetRandomIntInclusive(min, max) {
  // Arredonda o valor de min para cima para o próximo inteiro
  min = Math.ceil(min);
  // Arredonda o valor de max para baixo para o próximo inteiro
  max = Math.floor(max);
  // Gera um número aleatório entre 0 e 1
  // Multiplica o resultado por (max - min + 1) para garantir que o intervalo inclui min e max
  // Adiciona min para garantir que o intervalo inclui min e max
  // Arredonda o resultado para baixo para o próximo inteiro
  // e retorna o resultado
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let d6 = new Dado(6);
let d12 = new Dado(12);
let d100 = new Dado(100);

console.log(`Jogo de dados:`)
d6.Rolar()
d12.Rolar()
d100.Rolar()
