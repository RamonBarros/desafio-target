fibonacci = (numero) => {
    let fibonacciResult = [0, 1]; //Vetor de inicialização com 0 e 1
    let result = 0; // Variavel que guardará a sequencia

    // Calcula a sequência até que o último resultado seja menor ou igual ao número informado
    while (result <= numero) {
        result = fibonacciResult[fibonacciResult.length - 2] + fibonacciResult[fibonacciResult.length - 1];
        fibonacciResult.push(result); // Adiciona o próximo número à sequência
        if (result === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci\n${fibonacciResult.join(', ')}`;
        }//Se pertencer à sequencia é retornado que ele pertence assim como a sequencia até o valor igual o menor do que o numero inserido
    }
    //Se não pertencer à sequencia é retornado que ele não pertenceassim como a sequencia até o valor igual o menor do que o numero inserido
    return `O número ${numero} não pertence à sequência de Fibonacci\n${fibonacciResult.join(', ')}`;
}
console.log(fibonacci(1100087778366101900));