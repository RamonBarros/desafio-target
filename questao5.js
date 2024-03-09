stringInverter = (string) => {
    let temp = "";
    for (let i = string.length - 1; i >= 0; i--) {
        temp += string[i];
        //O for percorre a string caractere por caractere de trás para frente e guarda o caractere na variavel temp
    }
    return temp;
}
stringteste = "pneumoultramicroscopicossilicovulcanoconiótico"
console.log(stringteste);
console.log(stringInverter(stringteste));