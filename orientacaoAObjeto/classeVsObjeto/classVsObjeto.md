<h1>Entendendo a diferença entre classe e objeto em JavaScript: um tutorial básico</h1>

<h2>Classe</h2>

Em JavaScript, uma classe é um modelo para criar objetos. Ela define os atributos e comportamentos que os objetos criados a partir dessa classe terão. Por exemplo:

<pre>
<code>
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
</code>
</pre>

Nesse exemplo, a classe `Pessoa` tem dois atributos: `nome` e `idade`. Ela também tem um método chamado `falar`, que imprime uma mensagem com o nome e a idade da pessoa.

<h2>Objeto</h2>

Um objeto, por sua vez, é uma instância da classe. Ou seja, é um exemplar concreto de uma classe. Você pode criar um objeto a partir de uma classe usando o operador `new`. Por exemplo:

<pre>
<code>
const p1 = new Pessoa('João', 30);
const p2 = new Pessoa('Maria', 25);
</code>
</pre>

Nesse caso, criamos dois objetos da classe Pessoa, com os nomes `"João"` e `"Maria"` e as idades `30` e `25`, respectivamente. Cada objeto terá seus próprios valores para os atributos `nome` e `idade`, e poderá chamar o método `falar` da classe para imprimir uma mensagem.
