class PantallaInicio {
  constructor() {
    this.inicio = [home1, home2];
    this.presets = presets;
    this.titulos = fuente;

    this.mostrandoComoJugar = false;
    this.mostrandoCreditos = false;

    if (!musInicio.isPlaying()) musInicio.loop();

    this.juego = new Juego(this.titulos);
    this.mostrandoNueva = false;

    this.botones = [
      new Boton(179, 268, "PULSA ENTER", 219, 280),
      new Boton(179, 336, "COMO JUGAR", 225, 350),
      new Boton(179, 408, "CRÉDITOS", 245, 420)
    ];
  }

  dibujar() {

    if (this.mostrandoNueva) {
      this.juego.dibujar();
      return;
    }

    image(this.inicio[0], 0, 0, width, height);
    image(this.inicio[1], 122, 10);

    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].dibujar(this.titulos);
    }

    // PANEL COMO JUGAR
    if (this.mostrandoComoJugar) {
      fill(0, 200);
      rect(0, 0, width, height);

      textAlign(CENTER, CENTER);
      fill(255);
      textSize(10);

      text(
        "CÓMO JUGAR\n\n" +
        "• Movete con las flechas izquierda y derecha\n" +
        "• Juntá 10 estrellas de Mabel para ganar\n" +
        "• Evitá que te atrapen los duendes o perdés\n\n" +
        "Hace CLICK en cualquier lado para cerrar",
        width / 2, height / 2
      );
    }

    // PANEL CRÉDITOS
    if (this.mostrandoCreditos) {
      fill(0, 200);
      rect(0, 0, width, height);

      textAlign(CENTER, CENTER);
      fill(255);
      textSize(10);

      text(
        "CRÉDITOS\n\n" +
        "Franco Orlandi 92996/2\n" +
        "Kani Aranda 122590/3 & Franco Orlandi 92996/2\n\n" +
        "Hace CLICK en cualquier lado para cerrar",
        width / 2, height / 2
      );
    }

  }

  cambiar() {
    if (keyCode === ENTER) {

      musInicio.stop();

      if (!musJuego.isPlaying()) musJuego.loop();

      if (!sonidoEnemigo.isPlaying()) sonidoEnemigo.play();

      this.mostrandoNueva = true;
    }
  }

  mousePressed() {


    if (this.mostrandoComoJugar || this.mostrandoCreditos) {
      this.mostrandoComoJugar = false;
      this.mostrandoCreditos = false;
      return;
    }


    if (this.mostrandoNueva) return;


    if (mouseX > 179 && mouseX < 479 &&
        mouseY > 336 && mouseY < 386) {
      this.mostrandoComoJugar = true;
      this.mostrandoCreditos = false;
    }


    if (mouseX > 179 && mouseX < 479 &&
        mouseY > 408 && mouseY < 458) {
      this.mostrandoCreditos = true;
      this.mostrandoComoJugar = false;
    }
  }
}
