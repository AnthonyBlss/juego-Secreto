let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 8;
// nos muestra por consola el número secreto
console.log(numeroSecreto);
// funcion que se ejecuta al hacer click en el botón
// recoge el valor del input y lo compara con el número secreto 
function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log(typeof numeroUsuario);
   // console.log(typeof numeroSecreto);
    console.log(numeroSecreto);
    
   if (numeroUsuario === numeroSecreto) {
       asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en ${intentos} ${intentos === 1 ? 'vez': 'veces'}`);
       document.querySelector('#reiniciar').removeAttribute('disabled'); // remueve el atributo disabled del botón reiniciar
   } else {
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', "El número secreto es menor");
    } else {
        asignarTextoElemento('p', "El número secreto es mayor");
    }
    limpiarCaja();
    intentos++;
   }
   
   return;
}
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar el mensaje de intervalo de números
    // Generar un nuevo número secreto
    // Desactivar el botón de reinicio
    condicionesIniciales();
    // Reiniciar el contador de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

function asignarTextoElemento(etiqueta,texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros, salimos del juego.
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "No quedan más números por sortear. Reinicia el juego.");
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // Si el número ya ha sido sorteado, vuelve a llamar a la función    
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            // Añade el número a la lista de números sorteados
            return numeroGenerado; // Devuelve el número generado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();