class Animal {
  constructor(nome, idade, preco) {
    this.nome = nome;
    this.idade = idade;
    this.preco = preco;
  }

  ChecarEstoque() {
    return 10;
  }

  MetodoQualquer() {
    console.log("Esse método faz parte da classe mãe!");
  }
}

class Cachorro extends Animal {
  // Construtor da classe Cachorro que inicializa os atributos nome, idade, preço, raça e peso
  constructor(nome, idade, preco, raca, peso) {
    // Utiliza o construtor da classe mãe (Animal) para inicializar os atributos nome, idade e preço
    super(nome, idade, preco);
    // Inicializa o atributo raça com o valor passado como argumento
    this.raca = raca;
    // Inicializa o atributo peso com o valor passado como argumento
    this.peso = peso;
  }

  Latir() {
    console.log("ROLF! ROLF!");
  }

  ChecarEstoque() {
    console.log("Na loja temos 20 Dogão");
  }

  // Método da classe Cachorro que sobrescreve o método MetodoQualquer da classe mãe
  MetodoQualquer() {
    // Escreve no console a mensagem "Aqui é uma classe de dogs"
    console.log("Aqui é uma classe de dogs");
    // Chama o método MetodoQualquer da classe mãe
    super.MetodoQualquer();
    // Escreve no console a mensagem "Aqui vem funcionalidades"
    console.log("Aqui vem funcionalidades ");
  }
}

let dog = new Cachorro("Dogão", 5, "R$250", "Pitbull", "20Kg");

dog.ChecarEstoque();
dog.Latir();
dog.MetodoQualquer();
console.log(dog);
