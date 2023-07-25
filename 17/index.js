//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
let vlProduto = valorDoProduto / 100
let valorParcela = vlProduto / quantidadeDoParcelamento
let vlRestante = vlProduto - valorPago
let parcelaRestante = (vlRestante / valorParcela)
console.log(`Restam ${parcelaRestante} parcelas de R$${valorParcela}`)