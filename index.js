function laCajaDePandora(numero){
    if (numero % 2 === 0) {
        numero = parseInt(numero);
    
        let digitosBinarios = [];
    
        while (numero > 1) {
          const residuo = numero % 2;
          digitosBinarios.unshift(residuo);
          numero = numero >> 1;
        }
    
        // Trim leading zeros
        let binario = digitosBinarios.join("");
        
          binario = binario.slice(1);
    
        return binario;
        
    } else {
        return numero.toString(16);
    }
    // proximamente escribiremos codigo aqui
    } 
 

const personalInfoDeMatias = {
    'nombre': 'Matías',
    'edad' : 37,
    'nacionalidad' : 'Argentino'

}

const obtenerInfo = () => {
    return personalInfoDeMatias;
}