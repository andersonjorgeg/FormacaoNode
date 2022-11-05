// Carrinho de compra para loja

class Carrinho{
  constructor() {
    this.id = 0;
    this.quantidadeDeProdutos = 0;
    this.produtos = [];
    this.precoTotal = 0;
  }

  ColocarProdNoCarrinho() {
    console.log('colocar os produtos no carrinho');
  }
  Pagar() {
    console.log('Pagar o valor total do carrinho')
  }
}