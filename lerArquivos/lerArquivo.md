<h1>Lendo arquivos com o módulo fs do Node.js</h1>

Para ler um arquivo de texto com o módulo fs do Node.js e especificando a codificação do texto como UTF-8, você pode usar a função `readFile` da seguinte maneira:

<pre>
<code>
<span style="color: green">// Importa o módulo fs</span>
const fs = require("fs");

<span style="color: green">// Chama a função readFile e passa o nome do arquivo, um objeto com opções de configuração e uma função de callback como parâmetros</span>
fs.readFile("./anderson.jorge", {encoding: 'utf-8'}, (erro, dados) => {
  <span style="color: green">// Verifica se ocorreu um erro ao ler o arquivo</span>
  if(erro) {
    console.log("Ocorreu uma falha durante a leitura do arquivo!");
  } else {
    console.log(dados);
  }
});
</code>
</pre>

A função `readFile` é usada para ler um arquivo de forma assíncrona e retorna uma Promise que é resolvida com o conteúdo do arquivo quando o arquivo é lido. Ela recebe três parâmetros:

* `./anderson.jorge`: o nome do arquivo a ser lido.
* `{encoding: 'utf-8'}`: um objeto com opções de configuração. No exemplo acima, estamos especificando a codificação do texto como 'utf-8'.
* `(erro, dados) => {}`: uma função de callback que é chamada quando o arquivo é lido ou quando ocorre um erro. Ela recebe dois parâmetros:
  * `erro`: um objeto de erro vazio se o arquivo foi lido com sucesso, ou um objeto de erro contendo informações sobre o erro ocorrido se houve falha na leitura do arquivo.
  * `dados`: o conteúdo do arquivo como string se o arquivo foi lido com sucesso, ou um conteúdo vazio se houve falha na leitura do arquivo.

No exemplo acima, verificamos se ocorreu um erro ao ler o arquivo. Se sim, exibimos uma mensagem de erro. Se não, exibimos o conteúdo do arquivo na tela.
