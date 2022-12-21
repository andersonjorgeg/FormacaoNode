function soma(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

function imprimeSoma(soma) {
  console.log(`A soma é ${soma}`);
} 

soma(2, 3, imprimeSoma);
