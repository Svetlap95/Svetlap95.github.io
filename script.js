// Nombres a mostrar
const nombres = ["Guillermo", "Svetla"];

// Mostrarlos en la consola
console.log(nombres[0]);
console.log(nombres[1]);

// Mostrarlos en el documento HTML
const container = document.querySelector('.container');
const paragraph = document.createElement('p');
paragraph.textContent = `Los nombres son: ${nombres[0]} y ${nombres[1]}`;
container.appendChild(paragraph);

// Capturar el texto ingresado por el usuario
document.getElementById('btnBuscar').addEventListener('click', function() {
    // Obtener el valor del cuadro de texto
    const buscar = document.getElementById('inputBuscar').value;

    // Mostrar el valor en la consola (o puedes hacer algo más con él)
    console.log("Texto ingresado:", buscar);

    // Aquí puedes usar la variable "buscar" según lo necesites
});
