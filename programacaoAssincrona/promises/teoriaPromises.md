<h1>Entendendo as Promises em JavaScript</h1>

Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela fornece uma maneira de controlar o fluxo de execução de código assíncrono de maneira mais simples e legível do que o uso de callbacks aninhados.

Uma Promise pode ter um dos seguintes estados:

- Pending (pendente): a Promise ainda não foi resolvida ou rejeitada.
- Fulfilled (cumprida): a Promise foi bem-sucedida e seu valor de sucesso foi entregue.
- Rejected (rejeitada): a Promise falhou e um valor de falha foi entregue.

Você pode usar a função `Promise` para criar uma nova Promise. Você passa para a função uma função de resolução que é chamada quando a Promise é cumprida ou rejeitada. Essa função de resolução aceita duas funções de callback como argumentos: `resolve` e `reject`. Você chama a função `resolve` quando a Promise é cumprida e passa o valor de sucesso como argumento. Você chama a função `reject` quando a Promise é rejeitada e passa o valor de falha como argumento.

Aqui está um exemplo de como criar uma Promise que adia a resolução por 2 segundos e, em seguida, cumpre com o valor "Olá, mundo!":

<pre>
<code>
<span style="color:green;">// Cria uma nova Promise chamada delayOla</span>
const delayOla = new Promise((resolver, rejeitar) => {
  <span style="color:green;">// Define um temporizador que irá chamar a função resolver após 2 segundos</span>
  setTimeout(() => {
    resolver("Olá, mundo!");
  }, 2000);
});
</code>
</pre>

Você pode usar o método `then` da Promise para especificar o que acontece quando a Promise é cumprida ou rejeitada. O método `then` aceita duas funções de callback como argumentos: uma para a `resolução` e outra para a `rejeição`. Aqui está um exemplo de como usar o método then para imprimir o valor de sucesso da Promise:

<pre>
<code>
<span style="color:green;">// Quando a Promise for cumprida, imprime o valor de sucesso na tela</span>
delayOla.then(valor => {
  console.log(valor);
});
</code>
</pre>

Você também pode usar o método `catch` da Promise para tratar a falha da Promise. O método catch aceita uma função de callback como argumento que é chamada quando a Promise é rejeitada. Aqui está um exemplo de como usar o método `catch` para imprimir o valor de falha da Promise:

<pre>
<code>
<span style="color:green;">// Quando a Promise for rejeitada, imprime o valor de falha na tela</span>
delayOla.catch(erro => {
  console.error(erro);
});
</code>
</pre>

<h2>Analogia sobre promises</h2>

Uma analogia que pode ajudar a entender o que são Promises é pensar nelas como um pedido de entrega de uma encomenda. Quando você faz um pedido de entrega de uma encomenda, você pode imaginar que está fazendo uma promessa para receber a encomenda no futuro. A encomenda pode ser entregue com sucesso `(cumprida)` ou pode não ser entregue por algum motivo `(rejeitada)`.

Assim como você pode especificar o que quer que aconteça quando a encomenda é entregue (por exemplo, enviar um e-mail de confirmação ou fazer uma chamada telefônica), você também pode especificar o que quer que aconteça quando uma Promise é `cumprida` ou `rejeitada` usando os métodos `then` e `catch`, respectivamente.

Da mesma forma, assim como você pode cancelar um pedido de entrega de encomenda antes que ele seja entregue, você também pode cancelar uma Promise usando o método `abort` (disponível em algumas implementações de Promises).
