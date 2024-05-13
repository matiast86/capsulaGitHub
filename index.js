function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui

    const resultados = [];

    if(numero % 2 === 0) {
        for(let i = 0; i <= numero; i++){
            const resultado = i % 2;
            resultados.push(resultado);
        }
    }else {
        while (numero > 0) {
            let residuo = numero % 16;
            if (residuo < 10) {
                resultados.push(residuo);
            } else {
                // Convertimos los residuos de 10 a 15 a letras A-F.
                switch (residuo) {
                    case 10:
                        resultados.push('A');
                        break;
                    case 11:
                        resultados.push('B');
                        break;
                    case 12:
                        resultados.push('C');
                        break;
                    case 13:
                        resultados.push('D');
                        break;
                    case 14:
                        resultados.push('E');
                        break;
                    case 15:
                        resultados.push('F');
                        break;
                    default:
                        break;
                }
            }
            numero = Math.floor(numero / 16);
        }
    
        // Convertimos la lista de dígitos a una cadena y la invertimos para obtener el orden correcto.
        return resultados.reverse().join('');
    }

    return resultados;
    }
    
    const numero = 17;
    console.log(laCajaDePandora(numero));

    function miNombre(misDatos){
        return misDatos;
    };

    const datos = {
        nombre: "Lautaro",
        edad: 19,
        nacionalidad: "Argentino",
    };

    console.log(miNombre(datos));
