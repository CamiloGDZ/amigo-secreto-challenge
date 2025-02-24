// Array para almacenar los nombres de los amigos
let listaAmigos = [];
// Array auxiliar para almacenar los nombres ya sorteados
let nombresSorteados = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor ingrese un nombre válido');
        return; // Detener la función si el campo está vacío
    }

    // Agregar el nombre al array
    listaAmigos.push(nombreAmigo);
    // Limpiar el campo de texto
    inputAmigo.value = '';
    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();

    // Mostrar un mensaje en la consola para verificar
    console.log('Amigo agregado:', nombreAmigo);
    // Mostrar la lista actual en la consola
    console.log('Lista actual:', listaAmigos);
}

// Función actualizarListaAmigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el HTML
    const listaAmigosElement = document.getElementById('listaAmigos');

    // Limpiar la lista antes de actualizarla
    listaAmigosElement.innerHTML = '';
    // Recorrer el array y agregar cada nombre a la lista
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    // Verificamos si hay nombres en la lista
    if (listaAmigos.length === 0) {
        alert('No hay nombres en la lista, Agrega algunos nombres primero');
        return;
    }

    // Verificamos si todos los nombres ya han sido sorteados
    if (nombresSorteados.length === listaAmigos.length) {
        alert('El sorteo ha terminado. Todos los nombres han sido sorteados.');
        return;
    }

    let amigoSecreto;
    let indiceAleatorio;

    // Seleccionar un nombre aleatorio que no haya sido sorteado
    do {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indiceAleatorio];
    } while (nombresSorteados.includes(amigoSecreto)); // Repetir si el nombre ya fue sorteado

    // Agregar el nombre sorteado al array de nombres sorteados
    nombresSorteados.push(amigoSecreto);

    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    console.log('Amigo secreto sorteado:', amigoSecreto);
    console.log('Nombres sorteados:', nombresSorteados);

    // Verificar si todos los nombres han sido sorteados
    if (nombresSorteados.length === listaAmigos.length) {
        alert('El sorteo ha terminado. Todos los nombres han sido sorteados.');
    }
}