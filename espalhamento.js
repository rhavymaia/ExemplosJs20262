function sum(x, y, z) {
  return x + y + z;
}

const numbers1 = [1, 2, 3];

console.log(sum(numbers1[0], numbers1[1], numbers1[2]));
// Expected output: 6

console.log(sum(...numbers1));

let numbers2 = [...numbers1];

let pessoa1 = { nome: 'José', nascimento: '2026-09-08', cpf: '00011122233' };

let pessoa2 = { ...pessoa1, nome: 'João' };
