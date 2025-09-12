function cuadrados(y, j, i) {
  for (i = 0; i < columnas; i++) {
    for (j = 0; j < filas; j++) {
      let derecha = 400 + i * cuadrado;
      y = j * cuadrado;

      fill((i + j) % 2 == 0 ? azul : negro);
      rect(derecha, y, cuadrado, cuadrado);

      let cx = derecha + cuadrado / 2;
      let cy = y + cuadrado / 2;

      if ((i + j) % 2 == 0) {
        if (mouseSobreCirculo(cx, cy, cuadrado)) {
          fill(color(255, 0, 0));
        } else {
          fill(negro);
        }
      } else {
        fill(azul);
      }

      ellipse(cx, cy, cuadrado, cuadrado);
    }
  }
}

function mouseSobreCirculo(cx, cy, r) {
  let d = dist(mouseX, mouseY, cx, cy);
  return d < r / 2;
}

function reiniciar() {
  azul = color(14, 19, 232);
  negro = color(0);
}
