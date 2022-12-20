<h1>Como criar e utilizar módulos JavaScript com Node.js</h1>

<h2><span style="color: blue">Passo 1:</span> Crie um arquivo de script JavaScript com o código que deseja incluir no módulo. Por exemplo, você pode criar um arquivo chamado `"meuModulo.js"` com o seguinte conteúdo:</h2>

<pre>
<code>
exports.saudacao = function(nome) {
  return `Olá, ${nome}!`;
}

exports.despedida = function(nome) {
  return `Tchau, ${nome}!`;
}
</code>
</pre>

<h2><span style="color: blue">Passo 2:</span> No arquivo JavaScript principal onde você deseja utilizar o módulo, use a função `require` para importar o módulo. Por exemplo:</h2>

<pre>
<code>
const meuModulo = require('./meuModulo');

console.log(meuModulo.saudacao('Alice'));
console.log(meuModulo.despedida('Alice'));
</code>
</pre>

Você também pode atribuir os métodos do módulo a variáveis separadas, usando a seguinte sintaxe:

<pre>
<code>
const { saudacao, despedida } = require('./meuModulo');

console.log(saudacao('Alice')); // "Olá, Alice!"
console.log(despedida('Alice')); // "Tchau, Alice!"
</code>
</pre>
