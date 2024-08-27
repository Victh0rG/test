function calcularValorTotal(valorProduto, numParcelas, taxaJurosMensal) {
    let valorTotal = 0;
    let valorParcela = valorProduto / numParcelas;

    for (let i = 1; i <= numParcelas; i++) {
        valorTotal += valorParcela * Math.pow(1 + taxaJurosMensal, i);
    }

    return valorTotal;
}

// Exemplo de uso
const valorProduto = 1000.0;      // valor do produto
const numParcelas = 12;           // número de parcelas
const taxaJurosMensal = 0.02;     // taxa de juros mensal (2%)

const valorTotal = calcularValorTotal(valorProduto, numParcelas, taxaJurosMensal);
console.log("Valor total a ser pago: R$ " + valorTotal.toFixed(2));
