const readline = require('readline')


var Entrada;

console.log('Ingrese un número')

function Read1() {
    let interfazCaptura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    
    });
    interfazCaptura.question('Presione cualquier tecla',function(entrada2){
    Entrada = entrada2;
    if (Entrada !=0 && Entrada%2 == 0){
        console.log("Número par")
    }
    if (Entrada==0){
        console.log("el Número es cero")
    }
    if (Entrada%2 != 0){
        console.log("Número impar")
    }
    
    interfazCaptura.close();
    console.log("Fin")
    
})
}

Read1();

console.log("Fin2")






