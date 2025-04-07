// Manipular Contenido y Atributos
// Modificar texto:
function modificarTexto() {
    let nuevoTexto = "El Increible Mundo de la Natación";
    document.getElementById("titulo").textContent = nuevoTexto;
    document.getElementById("subtitulo").innerHTML = "Definición:";
    alert("Texto modificado correctamente");
}


// Cambiar atributos:
function cambiarAtributos() {
    document.querySelector("img").src = "multimedia/nataciontres.jpg";
    document.getElementById("imagendos").setAttribute("src", "multimedia/nataciontres.jpg");
    alert("Atributos cambiados correctamente");
}


// Cambiar estilos:
function cambiarEstilos() {
    // Opc A
    document.getElementById("titulo").style.color = "#b61a2b";
    document.getElementById("subtitulo").style.backgroundColor = "#f1c40f";
    // Opc B
    let subtitulo = document.getElementById("subtitulo");
    subtitulo.style.fontSize = "30px";
    // Opc C
    document.querySelectorAll("p").forEach(function(parrafo) {
        parrafo.style.color = "#1b4f72";
        parrafo.style.fontSize = "20px";
        parrafo.style.fontFamily = "Arial, sans-serif";
    });
    alert("Estilos cambiados correctamente");
}

// ::::::::::::::::::::::::::::::::::

// Crear, insertar y eliminar elementos
// Crear un nuevo elemento y agregarlo al DOM
function crearElemento() {
    // Crear un nuevo elemento
    let nuevoElemento = document.createElement("p");
    // Asignar texto al nuevo elemento
    nuevoElemento.textContent = "Este es un nuevo párrafo creado dinámicamente.";
    // Insertar el nuevo elemento en el DOM
    document.getElementById("contenido").appendChild(nuevoElemento);
    alert("Elemento creado e insertado correctamente");
    // Inserte directamnete en el body
    document.body.appendChild(nuevoElemento.cloneNode(true));
}

// Eliminar un elemento del DOM
function eliminarElemento() {
    // Seleccionar el elemento a eliminar
    let elementoAEliminar = document.getElementById("contenido");
    // Verificar si el elemento existe antes de intentar eliminarlo
    if (elementoAEliminar) {
        elementoAEliminar.parentNode.removeChild(elementoAEliminar);
        alert("Elemento eliminado correctamente");
    } else {
        alert("El elemento no existe en el DOM.");
    }
}

// ::::::::::::::::::::::::::::::::::

// Eventos en el DOM
// Agregar un evento al hacer clic en un botón
document.getElementById("validar").addEventListener("click",(event) => {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    // Obtener el valor del campo de entrada
    let inputnumid = Number(document.getElementById("numid").value);
    let texterror;
    document.getElementById("mensaje").innerHTML = "";
    // Validar el número ingresado
    if (isNaN(inputnumid) || inputnumid < 1 || inputnumid > 10) {
        texterror = "Error: El número debe ser un valor entre 1 y 10.";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").innerHTML = texterror;
    } else {
        texterror = "El número es correcto.";
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("mensaje").innerHTML = texterror;
    }
});


// Agregar un evento a los cambios de los inputs del formulario
document.getElementById("numid").addEventListener("input", function() {
    // Obtener el valor del campo de entrada
    let inputnumid = Number(document.getElementById("numid").value);
    let texterror;
    document.getElementById("mensaje").innerHTML = "";
    // Validar el número ingresado
    if (isNaN(inputnumid) || inputnumid < 1 || inputnumid > 10) {
        texterror = "Error: El número debe ser un valor entre 1 y 10.";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").innerHTML = texterror;
    } else {
        texterror = "El número es correcto.";
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("mensaje").innerHTML = texterror;
    }
});

// Agregar un evento al cargar la página
window.addEventListener("load", function() {
    // Cambiar el estilo del botón
    document.getElementById("validar").style.backgroundColor = "#3498db";
    document.getElementById("validar").style.color = "#fff";
    document.getElementById("validar").style.border = "none";
    document.getElementById("validar").style.padding = "10px 20px";
    document.getElementById("validar").style.borderRadius = "5px";
    document.getElementById("validar").style.cursor = "pointer";
    this.alert("La página ha cargado correctamente.");
});