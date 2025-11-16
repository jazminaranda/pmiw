//TP Final parte 1 
//Franco Orlandi (92996/2)
//Kani Aranda (122590/3)
//Link del video: https://www.youtube.com/watch?v=JVfj99k1r9g

let letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12, letra13, letra14;
let linterna, star, fondo, logo, hacha, icon;



let pantallasDyM = 1;
let pantallaInicio = 0;

//declarar arreglos
let dipper = [];
let mabel = [];

let dipperImgs = [];
let dipperPacificaImgs = [];
let mabeli = [];
let dipperTotal = 18;
let dipperPacificaTotal = 8;
let mabelImgsTotal = 12;


//declarar variables
let song;
let musica;
let musicaActiva = false;

function preload() {

  for (let i = 0; i < dipperPacificaTotal; i++) {
    dipperPacificaImgs[i] = loadImage("assets/img/Dipper_Ford/DipperPacifica_" + i + ".jpeg");
   
  }

  for (let i = 0; i < dipperTotal; i++) {
    dipperImgs[i] = loadImage("assets/img/Dipper_Ford/Dipper_" + i + ".jpeg");
  } 
  song = loadSound("assets/sounds/click.mp3");
   musica = loadSound("assets/sounds/musica.mp3");
   hacha = loadImage("assets/img/Dipper_Ford/hacha.png")

  //PANTALLA DE INICIO
  fondo = loadImage('assets/img/inicio/home.png');
  logo = loadImage("assets/img/inicio/Gravity_Falls_logo.png");
  icon = loadImage("assets/icon_musica.png");

  // PANTALLA DE INICIO - ICONOS

  linterna = loadImage("assets/img/inicio/icons/linterna.png");
  star = loadImage("assets/img/inicio/icons/star.png");

  //FUENTES

  letra1 = loadFont("assets/fonts/Poppins/Poppins-Black.ttf")
    letra2 = loadFont("assets/fonts/Poppins/Poppins-ExtraBold.ttf")
    letra3 = loadFont("assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf")
    letra4 = loadFont("assets/fonts/Poppins/Poppins-ExtraLight.ttf")
    letra5 = loadFont("assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf")
    letra5 = loadFont("assets/fonts/Poppins/Poppins-Italic.ttf")
    letra6 = loadFont("assets/fonts/Poppins/Poppins-Light.ttf")
    letra7 = loadFont("assets/fonts/Poppins/Poppins-LightItalic.ttf")
    letra8 = loadFont("assets/fonts/Poppins/Poppins-Medium.ttf")
    letra9 = loadFont("assets/fonts/Poppins/Poppins-MediumItalic.ttf")
    letra10 = loadFont("assets/fonts/Poppins/Poppins-Regular.ttf")
    letra11 = loadFont("assets/fonts/Poppins/Poppins-SemiBold.ttf")
    letra12 = loadFont("assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf")
    letra13 = loadFont("assets/fonts/Poppins/Poppins-Thin.ttf")
    letra14 = loadFont("assets/fonts/Poppins/Poppins-ThinItalic.ttf")
    letra15 = loadFont("assets/fonts/Patrick_Hand/PatrickHand-Regular.ttf")



  }

function setup() {
  createCanvas(640, 480);
  
}


function draw() {
  
  
  if ( pantallaInicio == 0 ) {
    image(fondo, 0, 0, width, height);
    image(logo, 122, 30);

    push();
    fill(47, 25, 6);
    strokeWeight(3);
    // Boton 1 - Dipper
    stroke(208, 158, 96);
    rect(220, 270, 200, 40);
    fill(47, 25, 6);
    image(linterna, 230, 273, 30, 30);
    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Dipper / Ford", 270, 296)
      pop();

    push();
    //Boton 2
    fill(47, 25, 6);
    strokeWeight(3);
    stroke(208, 158, 96);

    rect(220, 320, 200, 40);
    fill(47, 25, 6);
    image(star, 227, 324, 30, 30);
    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Mabel / Stan", 272, 348);


    pop();

    //Boton3
    push();
    stroke(208, 158, 96);
    strokeWeight(3);
    fill(47, 25, 6);
    rect(220, 373, 200, 40);


    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Créditos", 272, 400);
    pop();

push();
image(icon, 10, 420, 40, 40); 
textFont(letra1);
textSize(16);
fill(208, 158, 96);
noStroke();
textAlign(LEFT, CENTER);
if (musicaActiva) {
  text("Pausar música", 60, 440); 
} else {
  text("Reproducir música", 60, 440);
}
pop();
  } else if (pantallaInicio == 1) {
    pantallaDyM();
  } 
  
}



function mousePressed() {
 if (mouseX >= 10 && mouseX <= 50 && mouseY >= 420 && mouseY <= 460) {
  if (musicaActiva) {
    musica.pause();
    musicaActiva = false;
  } else {
    if (!musica.isPlaying()) {
      musica.setLoop(true);
      musica.setVolume(0.5);
      musica.play();
    } else {
      musica.play();
    }
    musicaActiva = true;
  }
  return; 
}
  if (pantallaInicio == 0) { // Botón "Comenzar"

    if (mouseX >= 220 && mouseX <= 420 && mouseY >= 270 && mouseY <= 310) {
      pantallaInicio = 1;
      pantallasDyM  = 1;
    
    }
  }
  
  if (mouseX >= 220 && mouseX <= 420 && mouseY >= 320 && mouseY <= 360) {
pantallaInicio = 1;
    pantallasDyM = 18;
  } else if (mouseX >= 220 && mouseX <= 420 && mouseY >= 373 && mouseY <= 413) {
  
    pantallaInicio = 1;
    pantallasDyM = 31;
  } 

  
  mouseDyM();
}
