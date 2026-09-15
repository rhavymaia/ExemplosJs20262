const precos = [10, 23, 45, 8, 12, 60];

// Cenário: Pegar preços acima de 20, aplicar um imposto de 10% e somar o total
const totalComImposto = precos
  .filter((preco) => preco > 20)
  .map((preco) => preco * 1.1)
  .reduce((acc, preco) => acc + preco, 0); // 140.8

console.log(totalComImposto); // 140.8

// carrinho de compras
const carrinho = [
  { produto: 'Notebook', preco: 4000, emEstoque: true },
  { produto: 'Mouse', preco: 150, emEstoque: false },
  { produto: 'Teclado', preco: 250, emEstoque: true },
  { produto: 'Monitor', preco: 1200, emEstoque: true },
];

const totalAPagar = carrinho
  .filter((item) => item.emEstoque)
  .map((item) => item.preco * 0.9)
  .reduce((total, preco) => total + preco, 0); // Soma tudo: 3600 + 225 + 1080

console.log(totalAPagar); // 4905
