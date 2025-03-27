let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Programador",
    telefono: 53637838383
};

// Guardar en SessionStorage
let datos = JSON.stringify(persona);
sessionStorage.setItem("usuario", datos);
alert("Datos guardados en SessionStorage");

// Recuperar de SessionStorage
let personaRecuperada = JSON.parse(sessionStorage.getItem("usuario"));
console.log(personaRecuperada);
alert(personaRecuperada.edad)
// {nombre: "Juan", edad: 30, profesion: "Programador"}

// Eliminar de SessionStorage
sessionStorage.removeItem("usuario");

// Limpiar SessionStorage
sessionStorage.clear();