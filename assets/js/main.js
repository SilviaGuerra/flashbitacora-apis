var publicarMensaje = document.getElementById("publicarMensaje");
publicarMensaje.addEventListener("click", mensajeNuevo);

function mensajeNuevo(){
  var contenedor = document.getElementById("publicaciones");
  var mensajeTitulo = document.getElementById("titulo").value;
  var nuevoTitulo = document.createElement("h4");
  nuevoTitulo.innerText = mensajeTitulo;
  contenedor.appendChild(nuevoTitulo);
  document.getElementsByClassName("input").value = "";

  var mensajeTexto = document.getElementById("mensaje").value;
  var nuevoTexto = document.createElement("p");
  nuevoTexto.innerText = mensajeTexto;
  contenedor.appendChild(nuevoTexto);
};

mensajeNuevo();
