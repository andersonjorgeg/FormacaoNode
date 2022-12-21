<h1>Entendendo o uso de construtores em JavaScript</h1>

Em JavaScript, um construtor é uma função especial que é usada para criar e inicializar um novo objeto criado a partir de uma classe ou função `construtora`. Quando você chama um construtor usando a palavra-chave `new`, ele cria um novo objeto vazio e, em seguida, chama a função construtora com este objeto vinculado ao `this` dentro da função.

Aqui está um exemplo de como criar uma classe Person com um construtor:

<pre>
<code>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('John', 30);
console.log(person1.name); // 'John'
console.log(person1.age); // 30
</code>
</pre>

No exemplo acima, a classe `Person` tem um construtor com dois parâmetros: `name` e `age`. Quando você cria uma nova instância da classe usando o operador `new`, o construtor é chamado com os valores especificados para name e age, e esses valores são atribuídos aos respectivos atributos do objeto criado.

O construtor também pode ser usado para definir outras propriedades e métodos do objeto, além de inicializar o estado inicial do objeto. Por exemplo:

<pre>
<code>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}

const person1 = new Person('John', 30);
person1.addFriend('Alice');
console.log(person1.friends); // ['Alice']
</code>
</pre>

No exemplo acima, o construtor da classe Person define o atributo friends como um array vazio e o método `addFriend` para adicionar um amigo à lista de amigos do objeto. Quando você cria uma nova instância da classe e chama o método addFriend, o novo amigo é adicionado à lista de amigos do objeto.
