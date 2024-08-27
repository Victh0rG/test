function verificarDisponibilidade(sku, produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].sku === sku) {
            return produtos[i].quantidade > 0;
        }
    }
    return false;
}

// Exemplo de uso
const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

console.log(verificarDisponibilidade(1001, produtos)); // true
console.log(verificarDisponibilidade(1004, produtos)); // false

