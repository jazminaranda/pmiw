class Juego {
  constructor(fuente) {
    this.fuente = fuente;


    this.fondoNuevo = imgFondoJuego;

    this.enemigos = [];
    for (let i = 0; i < 10; i++) {
      this.enemigos.push(new Particula(random(2, 5)));
    }

    this.estrellas = [];
    for (let i = 0; i < 10; i++) {
      this.estrellas.push(new Estrella(random(2, 4)));
    }

    this.usuario = new Usuario(this.enemigos, this.estrellas);

    this.ganaste = false;
    this.perdiste = false;


    this.botonReiniciar = new Boton(179, 408, "PULSA ENTER", 210, 420);
  }

  dibujar() {
    image(this.fondoNuevo, 0, 0, width, height);

    if (!this.ganaste && !this.perdiste) {

      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].dibujar();
        this.enemigos[i].actualizar();
        this.enemigos[i].reciclar();
      }

      for (let i = 0; i < this.estrellas.length; i++) {
        this.estrellas[i].dibujar();
        this.estrellas[i].actualizar();
        this.estrellas[i].reciclar();
      }

      this.usuario.dibujar();
      this.usuario.colisionarEnemigos();
      this.usuario.colisionarEstrellas();

      fill(255); //texto del costado
      textSize(20);
      textAlign(LEFT, TOP); 
      text("Vidas: " + this.usuario.vidas, 20, 30);
      text("Estrellas: " + this.usuario.puntos, 20, 60);

      if (this.usuario.vidas <= 0 && !this.perdiste) {
        sonidoPerder.play();
        this.perdiste = true;
      }

      if (this.usuario.puntos >= 10 && !this.ganaste) {
        sonidoGanar.play();
        this.ganaste = true;
      }

    } else if (this.ganaste) {
      this.mostrarVictoria();

    } else if (this.perdiste) {
      this.mostrarDerrota();
    }
  }

  mostrarVictoria() {
    background(0, 180, 0);
    fill(255);

    textSize(25);
    textAlign(CENTER, CENTER);
    text("GANASTE", width/2, height/2 - 60);
    textSize(15);
    text("Coleccionaste todas las estrellas de mabel", width/2, 40);

    this.botonReiniciar.dibujar(this.fuente);
    if (keyCode === ENTER) this.reiniciar();
  }

  mostrarDerrota() {
    background(180, 0, 0);
    fill(255);

    textSize(25);
    textAlign(CENTER, CENTER);
    text("PERDISTE", width/2, height/2 - 60);
    textSize(15);
    text("Presiona ENTER para reiniciar", width/2, 40);

    this.botonReiniciar.dibujar(this.fuente);
    if (keyCode === ENTER) this.reiniciar();
  }

  reiniciar() {

    sonidoGanar.stop();
    sonidoPerder.stop();
    musJuego.stop();

    pantallaInicio = new PantallaInicio();
  }
}
