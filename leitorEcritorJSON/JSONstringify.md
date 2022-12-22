# método JSON.stringify em JavaScript

O método `JSON.stringify` é uma função do JavaScript que é usada para converter um objeto ou valor em uma string no formato JSON (JavaScript Object Notation). Ele é amplamente utilizado para enviar dados de um aplicativo para outro ou para armazenar dados em um arquivo.

A função JSON.stringify aceita três argumentos:

* `value (obrigatório)`: é o valor a ser convertido em uma string JSON. Pode ser um objeto, array, número, string, booleano ou null.

* `replacer (opcional)`: é uma função que pode ser usada para modificar o valor de cada propriedade enquanto o objeto é convertido em uma string. A função replacer é chamada para cada chave e valor pai encontrado no objeto e recebe dois argumentos: "key" e "value". A função pode usar esses argumentos para decidir qual valor deve ser incluído no resultado final. 
  * Por exemplo, se quisermos excluir a propriedade "password" de um objeto antes de convertê-lo em uma string, podemos usar a função replacer da seguinte maneira:

<pre>
<code>
const obj = { name: 'John', password: '123456' };
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === 'password') {
    return undefined;
  }
  return value;
});
console.log(jsonString); // Output: '{"name":"John"}'
</code>
</pre>

* `space (opcional)`: é uma string ou um número que pode ser usado para adicionar espaços em branco à string JSON resultante, tornando-a mais legível. Se space for uma string, ela será usada como espaço em branco. Se for um número, ele será usado para determinar o número de espaços em branco a serem inseridos. 
  * Por exemplo, se quisermos adicionar 2 espaços em branco para cada nível de indentação, podemos usar a função JSON.stringify da seguinte maneira:

<pre>
<code>
const obj = { a: 1, b: 2 };
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);

/* Output: 
{
  "a": 1,
  "b": 2
}
*/
</code>
</pre>

  * Exemplo de uso:

<pre>
<code>
const obj = { a: 1, b: 2 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"a":1,"b":2}'
</code>
</pre>
