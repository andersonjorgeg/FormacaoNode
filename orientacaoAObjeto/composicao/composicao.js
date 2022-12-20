// Criamos o objeto "pessoa"
const pessoa = {
  nome: 'João',
  idade: 30,
  endereço: 'Rua dos Bobos, nº 0',

  imprimirNome: function() {
    console.log(this.nome);
  },

  falar: function() {
    console.log("falou...")
  }
};

// Criamos o objeto "empregado" usando composição
const empregado = {
  ...pessoa, // Copiamos as propriedades do objeto "pessoa"
  cargo: 'Gerente',
  salário: 5000
};

console.log(empregado.nome);
pessoa.falar();
console.log(empregado.cargo);
empregado.falar();
console.log("Objeto Pessoa");
console.log(pessoa);
console.log("Objeto Empregado");
console.log(empregado);
