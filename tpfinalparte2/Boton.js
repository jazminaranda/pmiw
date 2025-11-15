class Boton {

  constructor(x, y, texto, textoX, textoY) {
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.textoX = textoX;
    this.textoY = textoY;
  }

  dibujar(fuente) {
    this.dibujarBoton();
    fill(232, 240, 10);
    stroke(0);
    textFont(fuente);
    textSize(20);
    

    textAlign(LEFT, TOP); 

   
    text(this.texto, this.textoX, this.textoY);
  }

  dibujarBoton() {
    fill(240, 170, 20);
    stroke(200, 120, 15);
    strokeWeight(6);
    rect(this.x, this.y, 300, 50);

    noStroke();
    fill(255, 195, 40);
    rect(this.x, this.y, 300, 10);

    fill(190, 110, 10);
    rect(this.x, this.y + 40, 300, 10);

    fill(180, 100, 5);
    rect(this.x, this.y, 10, 10);
    rect(this.x + 290, this.y, 10, 10);
    rect(this.x, this.y + 40, 10, 10);
    rect(this.x + 290, this.y + 40, 10, 10);
  }
}
