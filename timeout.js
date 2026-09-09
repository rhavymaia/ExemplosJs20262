let exibirMensagem = (a, b) => {
  console.log('Chamou minha função dentro do timeout:' + a + b);
};
let valores = ['IFPB', 'GBA'];
setTimeout(exibirMensagem, 3000, valores);

exibirMensagem(...valores);
