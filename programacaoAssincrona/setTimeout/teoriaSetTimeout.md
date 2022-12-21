<h1>Utilizando o setTimeout para adicionar atrasos e temporização em seu código JavaScript</h1>

`setTimeout` é uma função em JavaScript que executa uma função ou avalia uma expressão após um número especificado de milissegundos.

Aqui está um exemplo de como usar o setTimeout:

<pre>
<code>
<span style="color: green;">// Declara uma função chamada enviarEmail que recebe dois parâmetros: corpo e para</span>
function enviarEmail(corpo, para) {
  <span style="color: green;">// Define um timeout usando o setTimeout. A função passada para o setTimeout será executada após 8 segundos (8000 milissegundos)</span>
  setTimeout(() => {
    <span style="color: green;">// Imprime uma string no console, com os valores dos parâmetros corpo e para inseridos no texto</span>
    console.log(`

      Para: ${para}
      -----------------------------------------------
      ${corpo}
      -----------------------------------------------
      De: Anderson Jorge
    `)
  }, 8000)
}

<span style="color: green;">// Imprime uma mensagem no console indicando o início do envio de um email</span>
console.log("Início do envio de email");

<span style="color: green;">// Chama a função enviarEmail e passa os argumentos "Oi seja bem vindo" e "João Batista"</span>
enviarEmail("Oi seja bem vindo", "João Batista");

<span style="color: green;">// Imprime uma mensagem no console indicando que o email foi enviado e deve chegar em alguns minutos</span>
console.log("Seu email foi enviado, deve chegar em minutos");

<span style="color: green;">// Imprime uma mensagem de sucesso no console</span>
console.log("Tudo OK !!!");
</code>
</pre>

<h2>Analogia sobre setTimeout</h2>

Uma analogia para o `setTimeout` em JavaScript é o `temporizador de um forno`. Quando você coloca algo no forno para assar, você configura o temporizador para um determinado tempo (por exemplo, 30 minutos) e, quando o tempo se esgotar, o forno avisa que o alimento está pronto.

Da mesma forma, o setTimeout em JavaScript permite que você configure um temporizador para uma determinada quantidade de tempo (em milissegundos) e, quando o tempo se esgotar, uma função ou expressão é executada. Você pode pensar no `setTimeout` como um `"alarme"` que é acionado após um determinado tempo ter transcorrido.
