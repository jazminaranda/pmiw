// TP1- PMIW
// Kani Aranda
// video: https://youtu.be/akhtgs5rwK4

let referencia;
let columnas = 3;
let filas = 3;
let cuadrado = 402 / 3;
let azul; 
let negro; 
let blanco; 
let valor = 0;
let valorAnt;
let coloresinvertidos = false;
let puedeinvertir = true;
let cruzar = false;

function preload() {
  referencia = loadImage("referencia.jpeg");
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  azul = color(14, 19, 232);
  negro = color(0);
  blanco = color(255);
}

function draw() {
  background(blanco);
  image(referencia, 0, 0, 400, 400);
  valor = map(mouseX, width / 2, width, 0, 1);

  if (valorAnt < 0.5 && valor >= 0.5 && !cruzar) {
    let invertir = azul;
    azul = negro;
    negro = invertir;
    cruzar = true;
  }
  if (valorAnt > 0.5 && valor <= 0.5) {
    cruzar = false;
  }
  valorAnt = valor;
  cuadrados(0, 0, 0);
}

function mouseMoved() {
  if (mouseX < pmouseX && mouseX < 600 && puedeinvertir) {
    let invertir = azul;
    azul = negro;
    negro = invertir;
    coloresinvertidos = !coloresinvertidos;
    puedeinvertir = false;
  }
  if (mouseX > 600) {
    puedeinvertir = true;
  }
}

function keyPressed() {
  if (key == 'C' || key == 'c') {
    azul = color(random(255), random(255), random(255));
  }
  if (key == 'A' || key == 'a') {
    negro = color(random(255), random(255), random(255));
  }
  if (key == 'R' || key == 'r') {
    reiniciar();
  }
}
