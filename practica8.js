// CONDICIONALES
// pedir nombre de persona
let nombre=prompt("Ingresa tu nombre");
let edad=prompt("Ingresa tu edad");
// Condicional para saber la edad y mostrar un mensaje
// que pasa si no ponen la edad (programación defensiva - VALIDACIONES)
if (edad >= 18) {
    alert("Bienvenidos a la página de películas violentas");
} else {
    alert("Debes ser mayor de edad para ver nuestras películas");
}
