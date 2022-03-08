// Mini calculadora
const miniCalculadora = () => {
// creamos la variable "op" que almacena la operacion a realizar 
let op = prompt("Seleccione el número indicado para realizar la operación a realizar: \n 1. para sumar \n 2. para restar \n 3. para multiplicar \n 4. para dividir ");

// validamos la opcion seleccionada
// (op == "1" || op == "2" || op == "3" || op == "4")
// (parseInt(op) > 0 && parseInt(op) <= 4)
if (op === "1" || op === "2" || op === "3" || op === "4") {
    alert ("Debe ser una opcion entre 1 y 4");
} else {
    alert ("entro al else")
}

};