// EJERCICIO DIA DE LA SEMANA
// Creamos variable para alamcenar el dia a la semana
let dia = prompt("Ingrese un dia a la semana");
// convertir lo que escriba el usuario en minusculas
dia = dia.toLowerCase();
// validamos el dia si es entre semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia =="miércoles" || dia =="jueves" || dia == "viernes") {
    alert("Es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo" ) {
        alert("Es un fin de semana");
    } else {
        alert("Por favor ingresar un dia de la semana");
    }
    
}

/**
 * 1 - Que pasa si no escriben nada
 * 2 - que pasa si usan mayusculas
 * 3 - Si escriben otra cosa que no sea lo solicitado
 * 4 - las Tildes
 */