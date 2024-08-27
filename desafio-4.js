function atualizarEstoque(itensVendidos, estoque) {
    itensVendidos.forEach(itemVendido => {
        const produtoEstoque = estoque.find(produto => produto.sku === itemVendido.sku);
        
        if (produtoEstoque) {
            produtoEstoque.quantidade -= itemVendido.quantidade;
            
            // Certifique-se de que a quantidade não seja negativa
            if (produtoEstoque.quantidade < 0) {
                produtoEstoque.quantidade = 0;
            }
        }
    });
    
    return estoque;
}

// Lista de itens vendidos
const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

// Estoque inicial
const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

// Atualiza o estoque
const estoqueAtualizado = atualizarEstoque(itensVendidos, estoque);

console.log(estoqueAtualizado);
