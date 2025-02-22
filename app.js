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

function recorrer(){
    let lista = document.getElementById('listaAmigos');
    //Lo usamos para limpiar lista y así no se repita el nombre
    lista.innerHTML = "";

    for (let i=0; i<amigos.length; i++){
        //Creamos el elemento li y le añadimos el nombre de cada amigo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        //Añadimos cada elemento creado a la lista de amigos
        document.querySelector('#listaAmigos').appendChild(li);
    }
}
