# Como usar a função `promisify` e o `async/await` para lidar com operações assíncronas no Node.js

O `promisify` é uma função que transforma uma função que usa o padrão de callback em uma função que retorna uma Promise. Isso é útil porque as Promises são uma maneira de lidar com operações assíncronas de maneira mais simples e legível. O `async/await` é uma maneira de escrever código assíncrono de maneira síncrona, tornando-o mais legível.

Aqui está um exemplo de como usar a função `promisify` com o `async/await`:

<pre>
<code>
const fs = require('fs');
const util = require('util');

<span style="color:green">// Transforma a função `fs.readFile` em uma função que retorna uma Promise:</span>
const readFile = util.promisify(fs.readFile);

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

A função util.promisify é fornecida pelo módulo util do Node.js. Ela transforma uma função que usa o padrão de callback em uma função que retorna uma Promise. O async/await é usado para tornar a chamada da função assíncrona mais legível.
