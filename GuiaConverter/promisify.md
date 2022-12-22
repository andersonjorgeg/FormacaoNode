# Como usar a função `promisify` e o `async/await` para lidar com operações assíncronas no Node.js

O `promisify` é uma função que transforma uma função que usa o padrão de callback em uma função que retorna uma Promise. Isso é útil porque as Promises são uma maneira de lidar com operações assíncronas de maneira mais simples e legível. 

Importe o módulo `util` no seu código. Você pode fazer isso adicionando a seguinte linha no início do seu arquivo:

<pre>
<code>
const util = require('util');
</code>
</pre>

Encontre a função que você deseja transformar em uma Promise. Por exemplo, se você estiver trabalhando com o módulo `fs`, pode usar a função `fs.readFile`.

Use a função `util.promisify` para transformar a função em uma que retorna uma Promise. Por exemplo:

<pre>
<code>
const readFile = util.promisify(fs.readFile);
</code>
</pre>

Chame a função transformada com os argumentos apropriados. A função `promisify` irá retornar uma nova função que retorna uma `Promise`.

Por exemplo, se você estiver usando a função `fs.readFile`, deve passar o caminho do arquivo e o encoding como argumentos. A função `readFile` retornará uma Promise que resolve com o conteúdo do arquivo lido.

<pre>
<code>
readFile('arquivo.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
</code>
</pre>

Se você estiver usando o `async/await`, pode chamar a função da seguinte maneira:

<pre>
<code>
async function readTextFile() {
  try {
    const data = await readFile('arquivo.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readTextFile();
</code>
</pre>
