let ataqueJugador;
let ataquePc;
let validacion;
let vidasJugador = 3;
let vidasPC = 3;
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", selecionarMascotaJugador);
  let botonFuego = document.getElementById("Fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("Agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("Tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let reloadPage = document.getElementById("reload-button");
  reloadPage.addEventListener("click", reloadGame);
  let seccionEmascota = document.getElementById("selec-a");
  seccionEmascota.style.display = "none";

  let seccionBotones = document.getElementById("botones");
  seccionBotones.style.display = "none";

  let seccionReiniciar = document.getElementById("reiniciar-btn");
  seccionReiniciar.style.display = "none";
}
function ataqueAleatorioPc() {
  let ataques = ["Fuego", "Agua", "Tierra"];
  let numeroAleatorio = aleatorio(0, 3);
  ataquePc = ataques[numeroAleatorio];
  validarAtaques();
}
function selecionarMascotaJugador() {
  let seccionEmascota = document.getElementById("selec-a");
  let seccionCheckbox = document.getElementById("selec-m");
  let mascotaJugador = document.getElementById("mascota-jugador");
  let seccionBotones = document.getElementById("botones");
  let mascotaSelecionada;
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  if (inputHipodoge.checked) {
    mascotaSelecionada = "Hipodoge";
    mascotaJugador.innerHTML = mascotaSelecionada;
    seccionEmascota.style.display = "flex";
    seccionCheckbox.style.display = "none";
    seccionBotones.style.display = "flex";
  } else if (inputCapipepo.checked) {
    mascotaSelecionada = "Capipepo";
    mascotaJugador.innerHTML = mascotaSelecionada;
    seccionEmascota.style.display = "flex";
    seccionCheckbox.style.display = "none";
    seccionBotones.style.display = "flex";
  } else if (inputRatigueya.checked) {
    mascotaSelecionada = "Ratigueya";
    mascotaJugador.innerHTML = mascotaSelecionada;
    seccionEmascota.style.display = "flex";
    seccionCheckbox.style.display = "none";
    seccionBotones.style.display = "flex";
  } else {
    alert("Seleccione una mascota");
  }

  mascotaAleatoriaPc();
}
function mascotaAleatoriaPc() {
  let mascotaEnemigo = document.getElementById("mascota-enemiga");
  let mascotas = ["Hipodoge", "Capipepo", "Ratigueya"];
  mascotaPosicion = aleatorio(0, 3);
  mascotaEnemigo.innerHTML = mascotas[mascotaPosicion];
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * max) + min;
}
function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioPc();
}
function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioPc();
}
function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioPc();
}
function crearMensaje(combate) {
  let seccionSelect = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", las mascota del enemigo atacó con " +
    ataquePc +
    " " +
    combate;
  seccionSelect.appendChild(parrafo);
}
function mostrarAtaques() {
  let spanAtqueJugador = document.getElementById("text-a-jugador");
  let spanAtaquePC = document.getElementById("text-a-pc");
  spanAtqueJugador.innerHTML = ataqueJugador;
  spanAtaquePC.innerHTML = ataquePc;
}
function validarAtaques() {
  let seccionReiniciar = document.getElementById("reiniciar-btn");
  let spanVidaJugador = document.getElementById("vidaJ");
  let spanVidaPC = document.getElementById("vidaComputer");
  
    if (ataqueJugador == ataquePc) {
      crearMensaje("EMPATE");
    } else if (
      (ataqueJugador == "Agua" && ataquePc == "Fuego") ||
      (ataqueJugador == "Fuego" && ataquePc == "Tierra") ||
      (ataqueJugador == "Tierra" && ataquePc == "Agua")
    ) {
      vidasPC--;
      spanVidaPC.innerHTML = vidasPC;
      crearMensaje("GANASTE");
    } else {
      vidasJugador--;
      spanVidaJugador.innerHTML = vidasJugador;
      crearMensaje("PERDISTE");
    }
    if (vidasJugador == 0 || vidasPC == 0) {
      seccionReiniciar.style.display = "flex";
      disableButtons();
    }
}
function disableButtons() {
  let botonFuego = document.getElementById("Fuego");
  botonFuego.setAttribute("disabled", "");
  let botonAgua = document.getElementById("Agua");
  botonAgua.setAttribute("disabled", "");
  let botonTierra = document.getElementById("Tierra");
  botonTierra.setAttribute("disabled", "");
}
function reloadGame() {
  location.reload()
}
window.addEventListener("load", iniciarJuego);
