function botonSimple(texto) {
  push();
  stroke(208, 158, 96);
  strokeWeight(3);
  fill(47, 25, 6);
  rect(220, 410, 200, 40); 

  textFont(letra1);
  textSize(20);
  fill(208, 158, 96);
  stroke(47, 25, 6);
  text(texto, 272, 436);
  pop();
}
