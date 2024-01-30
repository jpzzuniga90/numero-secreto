let numeroSecreto = generarNumeroSecreto();
let numeroUsuario;
let intentos = 1;


function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 

function validarIntento(){
    
    numeroUsuario = parseInt(document.getElementById('inputValorUsuario').value);
   
    if(numeroSecreto == numeroUsuario){

        asignarTextoElemento('p', `Acertaste el número al ${intentos}° intento`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento('p', 'El número es mayor');
        }else{
            asignarTextoElemento('p', 'El número es menor');
        }

        intentos++;
        limpiarInput();
    }

    return;
}

function generarNumeroSecreto() {

    return Math.floor(Math.random()*10)+1;
}

function limpiarInput() {

    document.getElementById('inputValorUsuario').value = "";
    
}

function reiniciarJuego() {

    window.location.reload();
    
} 

asignarTextoElemento('h1', 'Juego Número Secreto!');
asignarTextoElemento('p', 'Digite un número del 1 al 10');