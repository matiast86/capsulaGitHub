const numDecimal_a_binary = (decimal) => {
    if (decimal===0) return 0;
    let binary = [];
    do {
        let resultado = decimal/2;
        let residuo = decimal%2;
        decimal = Math.floor(resultado);
        binary.unshift(residuo);
    } while (decimal>0);
    return binary.join("");
};

const decimalAHexadecimal = (decimal) => {
    if (decimal===0) return 0;
    let hexadecimal = [];
    do {
        let resultado = decimal/16;
        let residuo = decimal%16;
        if (residuo ===10 ) residuo = "A";
        if (residuo ===11 ) residuo = "B";
        if (residuo ===12 ) residuo = "C";
        if (residuo ===13 ) residuo = "D";
        if (residuo ===14 ) residuo = "E";
        if (residuo ===15 ) residuo = "F"; 
        decimal = Math.floor(resultado);
        hexadecimal.unshift(residuo);
    } while (decimal>0);
    return hexadecimal.join("");
};

const homeWorkHenry = (num) =>{
    if (num%2===0) return numDecimal_a_binary(num);
    if (num%2!==0) return decimalAHexadecimal(num);
};

const gerson = () => {
    return {
        nombre:"Gerson Meneses",
        edad: 21,
        nacionalidad: "Peruano"
    };
};
console.log(homeWorkHenry("8"));
console.log(homeWorkHenry("28"));
console.log(homeWorkHenry("17"));
console.log(homeWorkHenry("127"));
console.log(gerson());