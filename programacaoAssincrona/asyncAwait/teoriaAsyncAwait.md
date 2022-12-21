<h1>Entendendo o conceito de Async/Await em JavaScript</h1>

`Async/Await` é uma forma de escrever código assíncrono de maneira mais clara e legível em JavaScript. Async/Await é baseado em Promises, que são um recurso do JavaScript que permite que você escreva código assíncrono de maneira mais simples.

O termo `"assíncrono"` se refere a qualquer coisa que não é síncrona, ou seja, que não acontece imediatamente. No JavaScript, isso pode ser qualquer coisa que precisa de tempo para ser executada, como fazer uma chamada de API ou ler um arquivo do disco.

Com Promises, você pode escrever código assíncrono usando a palavra-chave `"then"`, que permite que você especifique o que deve acontecer quando a Promise é cumprida ou quando ocorre um erro. Isso pode fazer com que o código fique um pouco confuso e difícil de ler, especialmente se você tiver muitas Promises encadeadas.

Async/Await foi criado para tornar o código assíncrono mais legível. Com Async/Await, você pode usar a palavra-chave `"async"` antes de uma função e a palavra-chave `"await"` antes de uma Promise dentro dessa função. Isso permite que você escreva o código de maneira mais clara, como se fosse código síncrono, mas ainda mantendo a mesma funcionalidade assíncrona.

Por exemplo, imagine que você quer fazer uma chamada de API e, em seguida, imprimir o resultado na tela. Com Promises, você poderia escrever isso da seguinte maneira:

<pre>
<code>
<span style="color:green;">// Faz uma chamada à API em https://api.example.com</span>
fetch('https://api.example.com')
  <span style="color:green;">// Converte a resposta da chamada em um objeto JSON</span>
  .then(response => response.json())
  <span style="color:green;">// Imprime o objeto JSON no console</span>
  .then(data => console.log(data))
  <span style="color:green;">// Captura qualquer erro ocorrido durante a chamada à API e o imprime no console</span>
  .catch(error => console.error(error))
</code>
</pre>

Com Async/Await, você poderia escrever isso da seguinte maneira:

<pre>
<code>
<span style="color:green;">// Declara uma função assíncrona chamada getData</span>
async function getData() {
  <span style="color:green;">// Tenta executar o código dentro do bloco try</span>
  try {
    <span style="color:green;">// Faz uma chamada à API em https://api.example.com e armazena a resposta na variável response</span>
    const response = await fetch('https://api.example.com');
    <span style="color:green;">// Converte a resposta em um objeto JSON e armazena o resultado na variável data</span>
    const data = await response.json();
    <span style="color:green;">// Imprime o objeto JSON no console</span>
    console.log(data);
  <span style="color:green;">// Caso ocorra um erro durante a execução do código no bloco try, o bloco catch será executado</span>
  } catch (error) {
    <span style="color:green;">// Imprime o erro no console</span>
    console.error(error);
  }
}

</code>
</pre>

Como você pode ver, o código com Async/Await é mais legível e mais fácil de entender do que o código com Promises. Além disso, Async/Await permite que você use o fluxo de controle de erros comum do JavaScript, como `try/catch`, em vez de ter que lidar com o gerenciamento de erros com a função "

<h2>Uma analogia sobre AsyncAwait:</h2>

Async/Await é como uma pessoa que está esperando por um ônibus. Quando a pessoa chega à parada de ônibus, ela espera pelo ônibus chegar e a levar para o seu destino. Enquanto isso, a pessoa pode fazer outras coisas, como verificar o celular ou conversar com outras pessoas na parada.
