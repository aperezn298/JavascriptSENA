let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Programador",
    telefono: 53637838383
};

// Guardar en LocalStorage
let datos = JSON.stringify(persona);
localStorage.setItem("usuario", datos);
alert("Datos guardados en LocalStorage");

// Recuperar de LocalStorage
let personaRecuperada = JSON.parse(localStorage.getItem("usuario"));
console.log(personaRecuperada); 
alert(personaRecuperada.edad)
// {nombre: "Juan", edad: 30, profesion: "Programador"}

// Eliminar de LocalStorage
localStorage.removeItem("usuario");

// Limpiar LocalStorage
localStorage.clear();