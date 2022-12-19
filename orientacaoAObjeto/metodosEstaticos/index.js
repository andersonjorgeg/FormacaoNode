// Aprendendo a utilizar métodos estáticos em JavaScript

/* 
Métodos estáticos são métodos que pertencem a uma classe, mas não a uma instância dessa classe. Isso significa que eles podem ser chamados diretamente na classe, sem precisar criar uma instância da classe. Métodos estáticos são úteis quando você quer fornecer uma funcionalidade que não é relacionada a uma instância específica da classe, mas sim à classe em si. 
*/

class Calculadora{

  static Soma(a,b){
    console.log(a+b)
  }

  static Sub(a,b){
    console.log(a-b)
  }

}

Calculadora.Soma(2, 8);
Calculadora.Soma(2, 8);
