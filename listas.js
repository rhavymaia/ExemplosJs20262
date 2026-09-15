let numeros = [1, 4, 8];
for (let numero of numeros) {
}

numeros.forEach(() => {}); // sem retorno.
let novaListaMap = numeros.map(() => {}); // Retorna uma nova lista com a mesma quantidade de itens do original.
let dobrarValor = (numero, i) => {
  return numero * 2 + i;
};
const numerosNovos = numeros.map(dobrarValor);
console.log(numerosNovos);

let novaListaFilter = numeros.filter(() => {}); // Retorna uma nova lista com a quantidade igual ou menor que a lista original.
// let numeros = [1, 4, 8];

let numerosFiltrados = numeros.filter((num) => num >= 1);
const NOTA_ALTA = 7;
let notas = [5, 7, 8.5];
let notasAltas = notas.filter((nota, i) => {
  console.log(i);
  return nota >= NOTA_ALTA;
});
console.log(notasAltas);

numeros.reduce(() => {}, 0); // Somente um elemento.

// let numeros = [1, 4, 8];
const totalSoma = numeros.reduce((acumulador, numero) => {
  console.log(acumulador);
  console.log(numero);
  return acumulador + numero;
}, 0);
console.log(totalSoma);
