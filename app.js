/array para almacenar los nombres de los amigos/ 
let listaAmigos = [];

/ funcion para agregar amigo a la lista /
function agregarAmigo(){
    const inputAmigo = document.getElementById ('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    /validar que el campo no este vacio /
    if (nombreAmigo === ''){
        alert ('por favor ingrese un nombre valido');
        return; /detener la funcion si el campo esta vacio /
    }

    /agregar el nombre al array/
    listaAmigos.push(nombreAmigo);
    /limpiar el campo de texto/
    inputAmigo.value = '';
    /actualizar la lista de amigos en la pagina/
    actualizarListaAmigos();
    
    /mostrar un mensaje en la consola para verificar/
    console.log('amigo agregado', nombreAmigo);
    /mostrar la lista actual en la consola/
    console.log('lista actual', listaAmigos);
    /cierre de la funcion agregarAmigo/

}
/funcion actualizarListaAmigos/
function actualizarListaAmigos(){
    /obtener el elemento de la lista en el HTML/
    const listaAmigosElement = document.getElementById('listaAmigos');


    /limpiar la lista antes de actualizarla/
    listaAmigosElement.innerHTML = '';
    /recorrer el array y agregar cada nombre a la lista/
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent=`${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

/funcion para sortear el amigo secreto/
function sortearAmigo(){
    /verificamos si hay nombres en la lista/
    if (listaAmigos.length === 0 ) {
        alert('No hay nombre en la lista, Agrega algunos nombres primero');
        return;
 }
    /saleccionar un nombre aleatorio/
    const indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);
    /obtener el nombre correspondienre al indice aleatorio/
    const amigoSecreto = listaAmigos[indiceAleatorio];

    /mostrar el resultado en la pagina/
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML =  `<li>El amigo secreto es:<strong>${amigoSecreto}</strong></li>`;

    console.log ('amigo secreto sorteado:', amigoSecreto);

    /final del challenge/




}