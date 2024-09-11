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
