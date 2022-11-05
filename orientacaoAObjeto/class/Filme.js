class Filme {
  // atributos da class
  constructor() { 
    this.titulo = '';
    this.ano = 0;
    this.genero = '';
    this.diretor = '';
    this.atores = [];
    this.duracao = 0;
  }

  // métodos da class
  Reproduzir() {
    console.log('Reproduzindo...')
  }
  Pausar() {
    console.log('Pausado.')
  }
  Avancar() {
    console.log('Avançar >>')
  }
  Fechar() {
    console.log('Fechar X')
  }
}


