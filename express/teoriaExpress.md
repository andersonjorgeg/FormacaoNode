<h1>Como criar rotas no Express usando arquivos separados</h1>

<h2><span style="color:blue">Passo 1:</span> Configure o Express</h2>

<p>Primeiro, você precisará instalar o módulo express e requisitá-lo em sua aplicação:</p>

<pre>
<code>
const express = require('express');
const app = express();
</code>
</pre>

<p>Esse código está fazendo duas coisas:</p>


1. Incluindo o módulo `express` usando a função `require()`. O módulo `express` é um framework para aplicativos da web para o Node.js, que fornece uma série de recursos para criar aplicativos da web de maneira rápida e fácil.

2. Criando uma instância da aplicação `express` usando o construtor `express()`. A instância da aplicação é um objeto que representa a aplicação e fornece uma série de métodos para configurar e manipular rotas, tratar solicitações e enviar respostas aos clientes.

Em resumo, esse código está incluindo o módulo `express` e criando uma aplicação express que pode ser usada para criar rotas e manipular solicitações da web.

<h2><span style="color:blue">Passo 2:</span> Crie um arquivo de rotas</h2>

Em seguida, crie um arquivo separado para suas rotas. Você pode dar qualquer nome a esse arquivo, mas é comum chamá-lo de `routes.js` ou `index.js`.

Neste arquivo, você definirá suas rotas usando o objeto `app` do `Express`. Por exemplo:

<pre>
<code>
// routes.js

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Bem-vindo ao site');
  });

  app.get('/users', (req, res) => {
    res.send('Lista de usuários');
  });
};
</code>
</pre>

A primeira linha do código exporta uma função que recebe um parâmetro `app` e retorna `undefined`:

<pre>
<code>
module.exports = app => {
  // código da função
};
</code>
</pre>

Essa função é usada para definir duas rotas na aplicação. A primeira rota é a raiz da aplicação, que é acessada através da URL `'/'` e envia uma mensagem de boas-vindas para o cliente quando é acessada:

<pre>
<code>
app.get('/', (req, res) => {
  res.send('Bem-vindo ao site');
});
</code>
</pre>

O método `app.get` é um método do objeto da aplicação que define uma rota para uma requisição `HTTP GET`. Ele recebe dois parâmetros: a rota e uma função de callback que é executada quando a rota é acessada. A função de callback recebe dois parâmetros, um objeto de requisição `(req)` e um objeto de resposta `(res)`. O objeto de resposta possui o método `send`, que envia uma resposta para o cliente com o conteúdo especificado como parâmetro.

A segunda rota é a rota `'/users'`, que envia uma mensagem com a lista de usuários para o cliente quando é acessada:

<pre>
<code>
app.get('/users', (req, res) => {
  res.send('Lista de usuários');
});
</code>
</pre>

Essa rota é definida da mesma forma que a primeira, usando o método `app.get` e uma função de callback que envia uma resposta para o cliente quando a rota é acessada.

O código finalmente usa o `module.exports` para exportar a função que define as rotas como um módulo, de forma que ela possa ser utilizada em outros arquivos do projeto:

<pre>
<code>
module.exports = app => {
  // código da função que define as rotas
};
</code>
</pre>

Dessa forma, é possível importar essa função em outros arquivos do projeto e usá-la para definir as rotas na aplicação.

<h2><span style="color:blue">Passo 3:</span> Inclua o arquivo de rotas em seu arquivo principal de aplicativo</h2>

Por fim, inclua o arquivo de rotas em seu arquivo principal de aplicativo. Por exemplo:

<pre>
<code>
// app.js

const express = require('express');
const app = express();

require('./routes')(app);

app.listen(3000, () => {
  console.log('A aplicação está escutando na porta 3000');
});
</code>
</pre>

Esse código cria uma aplicação usando o módulo express e inicializa uma instância do servidor para escutar as requisições na `porta 3000`. Ele também carrega o módulo de rotas da aplicação e o passa como parâmetro para a aplicação, de forma que as rotas sejam definidas na aplicação.

A primeira linha do código importa o módulo `express`:

<pre>
<code>
const express = require('express');
</code>
</pre>

O módulo `express` é um framework para aplicações web em Node.js que facilita a criação de rotas, middlewares e outros recursos para aplicações web.

A segunda linha cria uma instância da aplicação usando o método `express()`:

<pre>
<code>
const app = express();
</code>
</pre>

Essa instância da aplicação é um objeto que possui métodos para definir rotas, middlewares e outros recursos para a aplicação.

A terceira linha carrega o módulo de rotas da aplicação e o passa como parâmetro para a aplicação:

<pre>
<code>
require('./routes')(app);
</code>
</pre>

Essa sintaxe consiste em duas partes:

A função `"require"` é uma função padrão do JavaScript que é usada para importar módulos de outros arquivos. Ela recebe como parâmetro uma string que indica o caminho para o arquivo que deseja-se importar. No caso acima, o caminho é `"./routes"`, o que significa que o módulo a ser importado é um arquivo local chamado "routes" que está no mesmo diretório que o arquivo atual.

Depois da função `"require"`, há um parêntesis com um parâmetro de `"app"`. Isso significa que estamos chamando a função que é exportada pelo módulo `"routes"` e passando o parâmetro "app" para ela. Portanto, a linha de código inteira está fazendo a seguinte coisa: importa o módulo "routes" e, em seguida, chama a função que ele exporta, passando o parâmetro "app" para ela.

Em resumo, essa sintaxe é usada para importar um módulo de um arquivo local e, em seguida, chamar a função que esse módulo exporta com um parâmetro específico. Isso é comum em aplicações JavaScript que usam o módulo "require" do Node.js para importar módulos de outros arquivos.


O módulo de rotas é um arquivo que exporta uma função que define as rotas da aplicação. Esse módulo é carregado usando o método `require`, que é uma função do Node.js para carregar módulos. A função exportada pelo módulo é chamada com o objeto da aplicação como parâmetro, de forma que as rotas sejam definidas na aplicação.

A quarta linha inicializa o servidor para escutar as requisições na `porta 3000`:

<pre>
<code>
app.listen(3000, () => {
  console.log('A aplicação está escutando na porta 3000');
});
</code>
</pre>

O método `app.listen` é um método do objeto da aplicação que inicializa o servidor para escutar as requisições na porta especificada como parâmetro. Ele também recebe uma função de callback que é chamada quando o servidor é inicializado com sucesso. Nesse caso, a função de callback apenas exibe uma mensagem no console indicando que a aplicação está escutando na porta 3000.

Para rodar o código Execute o arquivo "app.js" com o seguinte comando no terminal:

<pre>
<code>
node app.js
</code>
</pre>

Isso iniciará o servidor web e começará a "escutar" as solicitações na porta 3000. Você pode acessar a aplicação digitando o endereço "http://localhost:3000" no seu navegador.
