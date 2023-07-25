//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
if (tipoDePagamento == "credito") {
    totalDoProduto = (valorDoProduto - (valorDoProduto * 0.05)) / 100
}
else if (tipoDePagamento == "cheque") {
    totalDoProduto = (valorDoProduto - (valorDoProduto * 0.03)) / 100
}
else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    totalDoProduto = (valorDoProduto - (valorDoProduto * 0.10)) / 100
}
console.log(`Valor a ser pago: R$${totalDoProduto.toFixed(2)}`)