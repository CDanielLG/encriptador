var textoNoEncontrado = document





function encriptar(){
  let texto = document.getElementById("texto").value;

  var sustituciones = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  
  var textoEncriptado = '';
  
  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    
    // Verifica si la letra tiene una sustitución
    if (sustituciones.hasOwnProperty(letra)) {
      textoEncriptado += sustituciones[letra];
    } else {
      textoEncriptado += letra;
    }
  }

  if(!texto == ''){
    let texto_encriptado = document.getElementById("encriptado");
  
    texto_encriptado.innerHTML = textoEncriptado;
  }
  else{
    
  }

 
}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  const sustituciones = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  let textoEncriptado = texto.replace(
    new RegExp(Object.keys(sustituciones).join('|'), 'g'),
    match => sustituciones[match]
  );

  let textoEncriptadoElemento = document.getElementById("encriptado");
  textoEncriptadoElemento.innerHTML = textoEncriptado;
}

const valoresIniciales = {
  imagen: '/assets/img/Muñeco.png',
  texto: 'Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.'
};
// Guardar los valores iniciales en una variable global


// Obtener el elemento de texto y agregar un escuchador de eventos
const elementoTexto = document.getElementById('texto');
elementoTexto.addEventListener('input', function() {
  const textoEncriptado = document.getElementById('encriptado');

  // Verificar si el texto está vacío
  if (elementoTexto.value.trim() === '') {
    // Reemplazar el contenido del <p> con los valores iniciales
    textoEncriptado.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = valoresIniciales.imagen;
    imagen.alt = 'muñeco';
    imagen.classList.add('muñeco');

    const span = document.createElement('span');
    span.textContent = valoresIniciales.texto;

    textoEncriptado.appendChild(imagen);
    textoEncriptado.appendChild(span);
  }
});


function copiarTexto() {
  // Obtener el texto a copiar
  const textoACopiar = document.getElementById("encriptado").textContent;

  // Crear un elemento temporal para copiar el texto
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = textoACopiar;

  // Añadir el elemento temporal al DOM
  document.body.appendChild(elementoTemporal);

  // Seleccionar el texto del elemento temporal
  elementoTemporal.select();

  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // Eliminar el elemento temporal del DOM
  document.body.removeChild(elementoTemporal);
  
  // Mostrar el modal
  const copiarModal = document.getElementById("copiarModal");
  copiarModal.classList.add('active');

  // Verificar si el texto encriptado está vacío
  const textoEncriptado = document.getElementById("encriptado");
  if (textoEncriptado.textContent.trim() === '') {
    // Reemplazar el contenido del <p> con los valores iniciales
    const imagen = document.createElement('img');
    imagen.src = valoresIniciales.imagen;
    imagen.alt = 'muñeco';
    imagen.classList.add('muñeco');

    const span = document.createElement('span');
    span.textContent = valoresIniciales.texto;

    textoEncriptado.appendChild(imagen);
    textoEncriptado.appendChild(span);
  }

  // Ocultar el modal después de 2 segundos
  setTimeout(function() {
    copiarModal.classList.remove('active');
  }, 2000);
}


let textarea = document.getElementById("texto");

textarea.addEventListener('keydown', function(event) {
  const forbiddenKeys = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ', ',', ';', ':', '/', '\\', '\'', '\"', '[', ']', '{', '}', '(', ')', '<', '>', '|', '¡', '¿', '+', '*', '=', '%', '$', '#', '&', '@', '€', '£', '¥', '¢', '¤', '^', '`'];
  if (forbiddenKeys.includes(event.key)) {
    event.preventDefault();
  }
});