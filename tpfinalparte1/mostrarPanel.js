function mostrarPanel(texto) {

  push();
  fill('#EBD9B4'); 
  noStroke();
  rect(0, 300, width, 180); 
  pop();


  push();
  fill('#2E1F09'); 
  textFont(letra15);
  textSize(25);
  text(texto, 10, 350);
  pop();
}
