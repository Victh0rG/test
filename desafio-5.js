function gerarRelatorioVendas(vendas, dataInicio, dataFim) {
    const relatorio = {};

    vendas.forEach(venda => {
        const dataVenda = new Date(venda.data);
        const inicio = new Date(dataInicio);
        const fim = new Date(dataFim);

        if (dataVenda >= inicio && dataVenda <= fim) {
            if (!relatorio[venda.sku]) {
                relatorio[venda.sku] = {
                    quantidadeVendida: 0,
                    valorTotalVendido: 0
                };
            }

            relatorio[venda.sku].quantidadeVendida += venda.quantidade;
            relatorio[venda.sku].valorTotalVendido += venda.valorTotal;
        }
    });

    let valorTotalPeriodo = 0;

    for (const sku in relatorio) {
        valorTotalPeriodo += relatorio[sku].valorTotalVendido;
    }

    return {
        relatorioPorSKU: relatorio,
        valorTotalPeriodo: valorTotalPeriodo
    };
}

// Exemplo de uso
const vendas = [
    { sku: 1001, quantidade: 2, valorTotal: 50.00, data: '2021-01-01' },
    { sku: 1002, quantidade: 1, valorTotal: 20.00, data: '2021-01-01' },
    { sku: 1003, quantidade: 5, valorTotal: 100.00, data: '2021-01-02' },
    { sku: 1001, quantidade: 1, valorTotal: 25.00, data: '2021-01-02' }
];

const dataInicio = '2021-01-01';
const dataFim = '2021-01-02';

const relatorio = gerarRelatorioVendas(vendas, dataInicio, dataFim);

console.log(relatorio);

