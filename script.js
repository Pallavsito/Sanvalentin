const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const respuesta = document.getElementById("respuesta");
const hint = document.getElementById("hint");

let abierto = false;

// abrir/cerrar carta (clic al sobre)
sobre.addEventListener("click", (e) => {
  // si hicieron clic en un botón, no cierres/abras por ese click
  if (e.target === btnSi || e.target === btnNo) return;

  abierto = !abierto;
  sobre.classList.toggle("abierto", abierto);
  hint.textContent = abierto ? "Toca/clic al sobre para cerrar 💌" : "Toca/clic al sobre para abrir 💖";
});

// SI: mensaje + lluvia de corazones
btnSi.addEventListener("click", (e) => {
  e.stopPropagation();
  respuesta.textContent = "Se que no he sido la mejor persona del mundo, pero espero poderte dar todo el amor que tengo en el corazón, se que puedo amarte y mucho; perdón por todo lo malo y muchas gracias por todo lo que me has enseñado hasta hoy, no sabia que ser amado era tan bonito, te prometo que te daré lo mejor y te amaré como nunca nadie lo ha hecho ";
  lanzarCorazones(30);
});

// NO: se mueve para que “no lo puedan presionar” 😂
btnNo.addEventListener("mouseover", moverNo);
btnNo.addEventListener("click", (e) => {
  e.stopPropagation();
  moverNo();
});

function moverNo(){
  // mueve el botón dentro de la carta sin salirse
  const cont = carta.getBoundingClientRect();
  const b = btnNo.getBoundingClientRect();

  const maxX = cont.width - b.width - 20;
  const maxY = cont.height - b.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnNo.style.position = "absolute";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

// corazones
function lanzarCorazones(cant){
  for(let i=0;i<cant;i++){
    const c = document.createElement("div");
    c.className = "corazon";
    c.textContent = "❤️";
    c.style.left = `${(window.innerWidth/2) + (Math.random()*220 - 110)}px`;
    c.style.top = `${(window.innerHeight/2) + (Math.random()*120 - 60)}px`;
    c.style.fontSize = `${Math.random()*14 + 16}px`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(), 1400);
  }
}
