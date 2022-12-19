class Leitor {
  Ler(caminho) {
    return "Conteúdo do arquivo!";
  }
}

class Escritor {
  Escrever(arquivo, conteudo) {
    console.log("Conteúdo escrito");
  }
}

class Criador {
  Criar(nome) {
    console.log("Arquivo criado");
  }
}

class CriadorDePDF {
  Criar(nome) {
    console.log("Criando PDF");
  }
}

class Destruidor {
  Deletar(nome) {
    console.log("Deletando arquivo!");
  }
}

class ManipuladorDeArquivos {
  constructor(nome) {
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.destruidor = new Destruidor();
  }
}

class GerenciadorDeUsuario {
  constructor() {
    this.criador = new CriadorDePDF();
    this.escritor = new Escritor();
  }

  SalvarListaDeUsuarios(lista) {
    this.criador.Criar("usuarios.txt");
    this.escritor.Escrever("usuarios.txt", lista);
  }
}

let usuarios = new GerenciadorDeUsuario();

usuarios.SalvarListaDeUsuarios(["Anderson", "Alan", "João"])
