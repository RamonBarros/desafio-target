<template>
    <div class="main">
        <h1>Inversor de Strings</h1>
        <div id="inversor-string-container">
            <input type="text" placeholder="Insira a String para inverte-la" v-model="string_input_value">
            <button id="inversor-string-button" @click="inversorDeString(string_input_value)">Inverter</button>
            <span v-html="`<strong>String Original:</strong> ${string_input_value}`"></span>
            <span v-html="`<strong>String Inversa:</strong> ${string_result}`"></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            string_input_value: "",
            string_result:""
        }
    },
    methods:{
        inversorDeString(string){
            let temp = "";
            for (let i = string.length - 1; i >= 0; i--) {
                temp += string[i];
            }

            this.string_result =temp;

            return ;
        }
    }
}
</script>

<style>
#inversor-string-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
}

#inversor-string-button{
    margin: 1rem;
    background-color: #42b983;
    color: #2c3e50;
    font-weight: bolder;
}
</style>