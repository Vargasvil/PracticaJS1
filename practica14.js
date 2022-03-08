// suma de dos numeros
const sumaDosnumeros = () => {
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) + parseInt(num2);
    alert("La Suma es " + resultado);
}
// RESTAR DOS NUMEROS
const restaDosnumeros = () => {
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) - parseInt(num2);
    alert("La Resta es " + resultado);
}
// MULTIPLICAR DOS NUMEROS
const multiplicarDosnumeros = () => {
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) * parseInt(num2);
    alert("La Multiplicación es " + resultado);
}

// DIVIDIR DOS NUMEROS
/**
 * 
 */
const dividirDosnumeros = () => {
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");
    console.log(num1,num2);
    // Validacion por 0
    if (num2 != 0) {
        let resultado = parseFloat(num1) / parseFloat(num2);
        alert("La División es " + resultado);
    } else {
        alert("No se puede divir por cero");
    }    
}