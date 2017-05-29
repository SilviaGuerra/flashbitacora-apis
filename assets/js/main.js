var publicarMensaje = document.getElementById("publicarMensaje");
publicarMensaje.addEventListener("click", mensajeNuevo);

function mensajeNuevo(){
  var contenedor = document.getElementById("publicaciones");

  var mensajeTitulo = document.getElementById("titulo").value;
  var nuevoTitulo = document.createElement("h4");
  // nuevoTitulo.innerHTML = mensajeTitulo;
  contenedor.nuevoTitulo.appendChild(document.createTextNode(mensajeTitulo));

  // var mensajeTexto = document.getElementById("mensaje").value;
  //
  // contenedor = document.createElement("div");
  // var nuevoMensaje = document.createTextNode("p");
  // mensajeNuevo.innerHTML = mensajeTitulo;
}
