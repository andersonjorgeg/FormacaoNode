// Produto para loja

class Produto {
  constructor() {
    this.nome = '';
    this.quantidade = 0;
    this.dimensao = 0;
    this.preco = 0;
    this.marca = '';
  }

  Vender() {
    console.log('vender');
  }
  comprar() {
    console.log('comprar')
  }
  FormaDePagamento() {
    console.log('dinheiro, pix, ou cartão de crédito')
  }
}
