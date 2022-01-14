// CLASE 3 DESAFIO COMPLEMENTARIO

// ej: turnos


// con for

/*for(let t= 1; t<=15; t++){
    let nombre= prompt ("Ingresar nombre y apellido");
    alert ("Turno N° " + t + "Nombre: " + nombre)
}*/



// con switch

let turnos = prompt ("Turnos disponibles en el mes de febrero, elija una fecha.")

while(turnos != "ESC"){
   
    switch (turnos){
        case "1":
            alert("Tienes el turno 1");
            break;
        case "2":
            alert ("Tienes el turno 2");
            break;
        case "3":
            alert ("Tienes el turno 3");
            break;
        case "4":
            alert ("Tienes el turno 4");
            break;
        case "5":
            alert("Tienes el turno 5");
            break;
        default:
            alert("No hay más turnos, vuelva el mes siguiente");
            break;
    }
    turnos = prompt ("Turnos disponibles del 1 al 5 de febrero, elija una fecha.")
}