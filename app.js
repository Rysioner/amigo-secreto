// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre ==''){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
    }
    recorrer();
}

function limpiarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

function recorrer(){
    limpiarLista();
    for (let i=0; i<amigos.length; i++){
        //Creamos el elemento li y le añadimos el nombre de cada amigo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        //Añadimos cada elemento creado a la lista de amigos
        document.querySelector('#listaAmigos').appendChild(li);
    }
    return;
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert('Lista vacía, por favor añada nombres.');
    } else {
        let indiceAleatorio =  Math.floor(Math.random()*amigos.length-1)+1;
        limpiarLista();
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
    }
}