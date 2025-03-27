// Cargar agenda del localStorage (o iniciar nueva)
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

// Agregar nuevo contacto
function agregarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto:");
    if (!nombre || nombre.trim() === "") {
        alert("Nombre inválido.");
        return;
    }

    agenda.push(nombre.trim());
    localStorage.setItem("agenda", JSON.stringify(agenda));
    alert("Contacto guardado.");
}

// Ver contactos almacenados
function mostrarAgenda() {
    let guardados = JSON.parse(localStorage.getItem("agenda")) || [];
    if (guardados.length === 0) {
        alert("No hay contactos guardados.");
    } else {
        alert("Contactos:\n" + guardados.join("\n"));
    }
}

// Borrar toda la agenda
function borrarAgenda() {
    localStorage.removeItem("agenda");
    agenda = [];
    alert("Agenda eliminada.");
}

let opc;
do{
    opc = parseInt(prompt("AGENDA DE CONTACTOS\n1. Agregar contacto\n2. Mostrar agenda\n3. Borrar agenda\n4. Salir"));
    switch(opc){
        case 1:
            agregarContacto();
            break;
        case 2:
            mostrarAgenda();
            break;
        case 3:
            borrarAgenda();
            break;
        case 4:
            break;
        default:
            alert("Opción inválida.");
            break;
    }
}while(opc != 4);