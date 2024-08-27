function calcularFrete(peso, distancia, tabelaPrecos) {
    let chave = '';

    if (peso <= 1) {
        chave += '0-1,';
    } else if (peso <= 5) {
        chave += '1-5,';
    } else if (peso <= 10) {
        chave += '5-10,';
    } else {
        return 'Peso acima do limite disponível';
    }

    if (distancia <= 5) {
        chave += '0-5';
    } else if (distancia <= 10) {
        chave += '6-10';
    } else {
        return 'Distância acima do limite disponível';
    }

    return tabelaPrecos[chave] || 'Frete não disponível para essas condições';
}

// Tabela de preços
const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};

// Exemplo de uso
console.log(calcularFrete(0.5, 3, tabelaPrecos));  // R$ 10.00
console.log(calcularFrete(3, 7, tabelaPrecos));    // R$ 25.00
console.log(calcularFrete(8, 10, tabelaPrecos));   // R$ 35.00
console.log(calcularFrete(12, 4, tabelaPrecos));   // Peso acima do limite disponível
console.log(calcularFrete(4, 15, tabelaPrecos));   // Distância acima do limite disponível

