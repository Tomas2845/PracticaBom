/**  alert('hola mundo')
 window.alert('hola mundo') */

function saludar() {
  document.write("<p> hola mundo </p>");
}

// setTimeout
// metodo para mostrar una funcion luego de segundos ( 3 seg), dos tipos de sintaxis
/*
window.setTimeout(saludar, 5000);
setTimeout(saludar, 2000);
*/
// setInterval = imprime cada 3 seg la funcion varias veces, diferencia del settimeout es que esta se repite varias veces la otrano

const idInterval = setInterval(saludar, 2000);
console.log(idInterval);

setTimeout(() => {
  clearInterval(idInterval);   //* para detener el setTimeout 
}, 6000);
