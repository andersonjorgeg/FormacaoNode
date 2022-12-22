# O método `JSON.parse`: uma introdução

O método JSON.parse é uma função presente no objeto JSON do JavaScript que permite converter uma string no formato JSON em um objeto JavaScript.

A sintaxe da função é a seguinte:

<pre>
<code>
JSON.parse(text, reviver)
</code>
</pre>

Onde:

* `text`: é a string que representa o objeto JSON que será convertida.
* `reviver`: é uma função opcional que pode ser utilizada para transformar o valor produzido pelo parse. Essa função é chamada para cada chave e valor no objeto que está sendo construído.

Exemplo de uso:

<pre>
<code>
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); <span style="color:green">// "John"</span>
</code>
</pre>

O método `JSON.parse` é útil para trabalhar com dados que foram recebidos de uma `requisição HTTP` ou de um `arquivo`, já que esses dados geralmente são enviados como `strings` no formato JSON. Ao usar o JSON.parse, é possível converter esses dados em um `objeto JavaScript` e trabalhar com eles de forma mais fácil e rápida.

## O parâmetro `reviver` no método JSON.parse: uma explicação detalhada

O parâmetro `reviver` é uma função `opcional` que pode ser passada como segundo argumento para o método `JSON.parse`. Essa função é chamada para cada chave e valor no objeto que está sendo construído a partir da string no formato JSON.

A função `reviver` é chamada com dois argumentos: `key` e `value`, que representam, respectivamente, a chave e o valor do item atual no objeto que está sendo construído. A função deve retornar o valor que será usado para o item atual.

Exemplo:

<pre>
<code>
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === 'age') {
    return value + 10;
  }
  return value;
});
console.log(obj.age);  <span style="color:green">// 40</span>
</code>
</pre>

No exemplo acima, a função `reviver` verifica se a chave atual é `'age'` e, se for, adiciona 10 ao valor do item. Isso faz com que a propriedade age do objeto resultante seja 40 ao invés de 30.

O parâmetro reviver pode ser usado para transformar os valores produzidos pelo parse de acordo com as necessidades da aplicação. Ele é uma forma de pré-processar os dados antes de serem usados na aplicação.
