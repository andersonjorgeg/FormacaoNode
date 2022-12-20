<h1>Composição em JavaScript: Criando novas funcionalidades reutilizando código existente</h1>

A composição em JavaScript é um padrão de projeto que permite que você crie novas funcionalidades `reutilizando código existente`. Isso é feito criando objetos que contenham outros objetos ou funções como propriedades ou métodos.

Por exemplo, imagine que você tem um objeto `"pessoa"` que contém informações sobre uma pessoa, como `nome`, `idade` e `endereço`. Você também tem um objeto `"empregado"` que contém informações adicionais sobre um empregado, como `cargo` e `salário`. Em vez de criar um objeto "empregado" do zero, você pode usar `composição` para criar um objeto "empregado" a partir do objeto "pessoa", adicionando apenas as propriedades e métodos adicionais que são específicos para um empregado.

Aqui está um exemplo de código em JavaScript que ilustra como a composição pode ser usada:

<pre>
<code>
// Criamos o objeto "pessoa"
const pessoa = {
  nome: 'João',
  idade: 30,
  endereço: 'Rua dos Bobos, nº 0'

  imprimirNome: function() {
    console.log(this.nome);
  },

  falar: function() {
    console.log("falou...")
  }
};

// Criamos o objeto "empregado" usando composição
const empregado = {
  ...pessoa, // Copiamos as propriedades e métodos do objeto "pessoa"
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
</code>
</pre>

<pre>
Resultado:
João
falou...
Gerente
falou...
Objeto Pessoa
{
  nome: 'João',
  idade: 30,
  'endereço': 'Rua dos Bobos, nº 0',
  imprimirNome: [Function: imprimirNome],
  falar: [Function: falar]
}
Objeto Empregado
{
  nome: 'João',
  idade: 30,
  'endereço': 'Rua dos Bobos, nº 0',
  imprimirNome: [Function: imprimirNome],
  falar: [Function: falar],
  cargo: 'Gerente',
  'salário': 5000
}
</pre>

A sintaxe `...pessoa` é usada em JavaScript para "espalhar" as propriedades de um objeto em uma lista de propriedades. Isso é chamado de "operador de espalhamento" ou "operador de espalhamento de objeto".

com isso `...pessoas` todas as propriedades do objeto `"pessoa"` é passada para o objeto `"empregado"`, Ou seja, além de suas próprias propriedades cargo e salário.

Neste exemplo, o objeto `"empregado"` herda todas as propriedades e métodos do objeto `"pessoa"`, mas também possui suas próprias propriedades e métodos específicos. Isso nos permite criar novas funcionalidades de forma flexível e modular, reutilizando o código existente de forma eficiente.

