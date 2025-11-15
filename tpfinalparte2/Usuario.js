class Usuario {
  constructor(enemigos, estrellas) {
    this.x = 0;
    this.y = 388;
    this.t = 50;
    this.v = 30;

    this.enemigos = enemigos;
    this.estrellas = estrellas;

    this.vidas = 3;
    this.puntos = 0;

    this.img = imgPersonaje;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.t, this.t);

  }

  mover() {
    if (keyCode === LEFT_ARROW) this.x -= this.v;
    if (keyCode === RIGHT_ARROW) this.x += this.v;

    if (this.x < 0) this.x = 0;
    if (this.x > width - this.t) this.x = width - this.t;
  }

  colisionarEnemigos() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let e = this.enemigos[i];
      if (dist(this.x, this.y, e.x, e.y) < this.t) {
        this.x = 0;
        this.vidas--;
        sonidoEnemigo.play();
        e.desaparecer();
      }
    }
  }

  colisionarEstrellas() {
    for (let i = 0; i < this.estrellas.length; i++) {
      let s = this.estrellas[i];
      if (dist(this.x, this.y, s.x, s.y) < this.t) {
        this.puntos++;
        sonidoEstrella.play();
        s.desaparecer();

      }
    }
  }
}
