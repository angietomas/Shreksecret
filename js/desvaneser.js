document.getElementById("animar-btn").addEventListener("click", function() {
  var elemento = document.getElementById("elemento");

  // Agregar la clase 'oculto' para animar la opacidad
  elemento.classList.add("oculto");

  // Esperar a que la transición de opacidad termine
  setTimeout(function() {
    // Redirigir a la nueva página
    window.location.href = "pag/desi.html";
  }, 900); // 900 ms es la duración de la transición
});