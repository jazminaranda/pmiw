//PMIW TP2, comision 2
//Kani Aranda
//Franco Orlandi
//Video: https://www.youtube.com/watch?v=0B4tyeN9nXc

let pantallaInicio;


let musInicio, sonidoEnemigo, sonidoEstrella, sonidoGanar, sonidoPerder;


let imgPersonaje;
let home1, home2;
let presets = [];
let fuente;
let musJuego;


let imgMabel, imgEnemigo, imgFondoJuego;


let audioIniciado = false; 

function preload() {

  musInicio = loadSound("sounds/musica-inicio.mp3");
  sonidoEnemigo = loadSound("sounds/sonido-enemigo.mp3");
  sonidoEstrella = loadSound("sounds/sonido-estrella.mp3");
  sonidoGanar = loadSound("sounds/victoria-musica.mp3");
  sonidoPerder = loadSound("sounds/pierde-musica.mp3");
  musJuego = loadSound("sounds/musica-juego.mp3");



  fuente = loadFont("fonts/PressStart2P-Regular.ttf");
  

  imgPersonaje = loadImage("img/personaje.png");
  home1 = loadImage("img/home1.png");
  home2 = loadImage("img/home2.png");
  imgMabel = loadImage("img/mabel.png");
  imgEnemigo = loadImage("img/enemigo.png");
  imgFondoJuego = loadImage("img/img_1.png");

  for (let i = 0; i < 7; i++) {
    presets[i] = loadImage("img/presset_" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  pantallaInicio = new PantallaInicio(); // <-- Se inicia al cargar
}

function draw() {
  pantallaInicio.dibujar();
}

function keyPressed() {

  if (!audioIniciado) {
    userStartAudio(); 

    if (pantallaInicio && !pantallaInicio.mostrandoNueva) {
      if (!musInicio.isPlaying()) musInicio.loop();
    }
    audioIniciado = true;
  }
  
  
  if (pantallaInicio) { 
    pantallaInicio.cambiar();
    if (pantallaInicio.mostrandoNueva) pantallaInicio.juego.usuario.mover();
    if (pantallaInicio) pantallaInicio.mousePressed();
  }
}

function mousePressed() {
  if (pantallaInicio) pantallaInicio.mousePressed();
}
