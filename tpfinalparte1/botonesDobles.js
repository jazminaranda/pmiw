function botonesDobles(textoIzq, textoDer) {

  // Botón izquierdo
  push();
  stroke(208, 158, 96);
  strokeWeight(3);
  fill(47, 25, 6);
  rect(79, 410, 200, 40);
  textFont(letra1);
  textSize(20);
  fill(208, 158, 96);
  stroke(47, 25, 6);
  text(textoIzq, 130, 436);
  pop();

  // Botón derecho
  push();
  stroke(208, 158, 96);
  strokeWeight(3);
  fill(47, 25, 6);
  rect(350, 410, 200, 40);
  textFont(letra1);
  textSize(20);
  fill(208, 158, 96);
  stroke(47, 25, 6);
  text(textoDer, 385, 436);
  pop();
}
