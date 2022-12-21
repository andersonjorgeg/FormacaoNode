<h1>Entendendo callbacks em JavaScript</h1>

Em JavaScript, um `callback` é uma função que é passada como argumento para outra função e é chamada pelo código da função quando um determinado evento ocorre ou quando a função atinge um estado específico. Isso permite que você passe lógica de execução adicional para uma função sem precisar modificar o código da função original.

Aqui está um exemplo de uma função de soma que utiliza um callback:

<pre>
<code>
<span style="color: green;">// Esta é a função soma, que recebe três argumentos: dois números a serem somados (a e b) e uma função de callback chamada callback</span>
function soma(a, b, callback) {
  <span style="color: green;">// Realiza a soma dos dois números e armazena o resultado em uma variável chamada resultado</span>
  const resultado = a + b;
  <span style="color: green;">// Chama a função de callback fornecida passando o resultado da soma como argumento</span>
  callback(resultado);
}

<span style="color: green;">// Esta é a função imprimeSoma, que imprime o resultado da soma</span>
function imprimeSoma(soma) {
  console.log(`A soma é: ${soma}`);
}

<span style="color: green;">// Chama a função soma, passando os números 1 e 2 e a função imprimeSoma como argumentos</span>
soma(1, 2, imprimeSoma); // Imprime "A soma é: 3"
</code>
</pre>
