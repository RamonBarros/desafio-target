<template>
    <div class="main">
        <h1>FIBONACCI</h1>
        <div id="fibonacci-container">
            <input type="number" name="fibonacci-number" id="fibonacci-input" placeholder="Insira o número" min="0"
                v-model="fibonacci_input_value">
            <button id="fibonacci-button" @click="fibonacci(fibonacci_input_value)">VERIFICAR</button>
            <span v-html="mensagem"></span>
            <br/>
            <span v-html="`<strong>Sequência:</strong> ${sequencia}`"></span>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            fibonacci_input_value: 0,
            mensagem: "",
            sequencia: "",
        }
    },
    methods: {
        fibonacci(numero) {
            let fibonacciResult = [0, 1]; //Vetor de inicialização com 0 e 1
            let result = 0; // Variavel que guardará a sequencia

            // Calcula a sequência até que o último resultado seja menor ou igual ao número informado
            while (result <= numero) {
                result = fibonacciResult[fibonacciResult.length - 2] + fibonacciResult[fibonacciResult.length - 1];
                fibonacciResult.push(result); // Adiciona o próximo número à sequência
                if (result === numero) {
                    this.mensagem = `<strong>O número ${numero} pertence à sequência de Fibonacci\n</strong>`;
                    this.sequencia = `${fibonacciResult.join(', ')}`;
                    return;
                }
            }
            this.mensagem = `<strong>O número ${numero} não pertence à sequência de Fibonacci\n</strong>`
            this.sequencia = `<strong>Sequência:</strong> ${fibonacciResult.join(', ')}`
            return;
        }
    }
}
</script>

<style>
#fibonacci-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
}

#fibonacci-button{
    margin: 1rem;
    background-color: #42b983;
    color: #2c3e50;
    font-weight: bolder;
}
</style>