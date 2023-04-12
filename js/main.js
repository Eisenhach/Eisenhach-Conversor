const boton = document.getElementById("boton");
const contador = document.getElementById("contador");

let clicks = 0;

boton.addEventListener("click", contarClicks);

function contarClicks() {
  clicks++;

  if (clicks <= 100) {
    contador.textContent = `Has hecho ${clicks} clicks`;
  } else {
    contador.textContent = "Has llegado al límite de clicks";
    boton.removeEventListener("click", contarClicks);
  }
}

function reiniciarContador() {
  clicks = 0;
  contador.textContent = "";
  boton.addEventListener("click", contarClicks);
}
