class Estrella {
  constructor(velocidad) {
    this.x = int(random(width));
    this.y = -100;
    this.diam = 40;
    this.vel = velocidad;
    this.mostrar = true;


    this.img = imgMabel; 
  }

  dibujar() {
    if (this.mostrar) {
      image(this.img, this.x, this.y, this.diam, this.diam);
    }
  }

  actualizar() {
    if (this.mostrar) this.y += this.vel;
  }

  reciclar() {
    if (this.y >= height + 100) {
      this.x = int(random(width));
      this.y = -100;
    }
  }

  desaparecer() {
    this.x = int(random(width));
    this.y = -100;
  }
}
