function pantallaDyM() {
      if (pantallasDyM == 1) { // Pantalla Dipper 1
  
    image(dipperImgs[0], 0, -150, width, height);
    mostrarPanel("Dipper oyó que la estatua de Bill sigue intacta en lo mas profundo del \nbosque, la curiosidad le ganó y quiere ir a investigar.");
    botonSimple("Siguiente");


  } else if (pantallasDyM == 2) { // Pantalla Dipper 2
    image(dipperImgs[1], 0, 0, width, height);
    mostrarPanel("Se suben al auto rumbo a la ciudad para investigar, impulsados por la \ncuriosidad de Dipper sobre la estatua de Bill.");
    botonSimple("Siguiente");
    
  } else if (pantallasDyM == 3) { // Pantalla Dipper 3
    image(dipperImgs[2], 0, -70, width, height);
    mostrarPanel("Pero justo cuando todo parecía bajo control, algo les tapó la vista\ny antes de darse cuenta, ¡bam! fueron a dar de lleno contra un árbol.");
    botonesDobles("Caminar", "Ir a la ciudad");
    
  } else if (pantallasDyM == 4) { // Pantalla Dipper 4
    image(dipperImgs[3], 0, -110, width, height);
    mostrarPanel("En la ciudad, Dipper percibe una voz extraña, pero no logra identificar \nde quién se trata. ¿Quién será?");
    botonSimple("Siguiente");

  } else if (pantallasDyM == 5) { // Pantalla Dipper 5
    image(dipperImgs[4], 0, -60, width, height);
    mostrarPanel("¡Es Pacifica! Se ofrece a llevarlos a su casa a pedir ayuda para el auto \nchocado. ¿Qué deberían hacer?");
    botonesDobles("Caminar", "Ir a su casa");

  } else if (pantallasDyM == 6) { // Pantalla Dipper 6
    image(dipperImgs[5], 0, 0, width, height);
    mostrarPanel("Al llegar a la mansión, un estruendo inesperado los sobresalta; algo \nextraño está ocurriendo.");
    botonSimple("Siguiente");

  } else if (pantallasDyM == 7) { // Pantalla Dipper 7
    image(dipperImgs[6], 0, 0, width, height);
    mostrarPanel("Encuentran al leñador fantasma, quien los mira fijamente y los reta \na un duelo.");
    botonSimple("Siguiente");
    
  } else if (pantallasDyM == 8) { // Pantalla Dipper 8
    image(dipperImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(90);
    text("¡PIERDEN!", 100, 106);
    

    mostrarPanel("De repente, el leñador corta un árbol, y en un instante el tronco viene \ndirecto hacia ustedes.");
    botonSimple("Reiniciar");
    return;
  } 
   
  else if (pantallasDyM == 9) { // Pantalla Pacífica 1
    image(dipperPacificaImgs[0], 0, 0, width, height);
    mostrarPanel("Caminaron al bosque y pronto encontraron una cueva oscura. Sin \npensarlo, entraron.")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 10) { // Pantalla Pacífica 2
  image(dipperPacificaImgs[1], 0, -120, width, height);
    mostrarPanel("Se encontraron con el cambiaformas, y su mirada extraña empezó a \nhelarles la sangre.")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 11) { // Pantalla Pacífica 3
    image(dipperPacificaImgs[2], 0, -90, width, height);
    mostrarPanel("Ford logró herir al cambiaformas, pero la zona era peligrosa; debían \nbuscar un lugar más abierto...")
    botonSimple("Ir al bosque");

  } else if (pantallasDyM == 12) { // Pantalla Pacífica 4
    image(dipperPacificaImgs[0], 0, -90, width, height);
    mostrarPanel("Siguieron caminando, pero el bosque estaba demasiado silencioso. \n“¿Qué podría pasar…?”")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 13) { // Pantalla Pacífica 5
  image(dipperPacificaImgs[3], 0, 0, width, height);
    mostrarPanel("Se toparon con el multioso. Un escalofrío les recorrió la espalda \nmientras se preguntaban: ¿qué hacer ahora?")
    botonesDobles("Pelear", "Cantar");

  } else if (pantallasDyM == 14) { // Pantalla Pacífica 6
    image(dipperPacificaImgs[4], 0, -90, width, height);
    mostrarPanel("¡El oso parecía fascinado por las canciones para chicas! Se quedó \ntarareando y bailando, y finalmente los dejó continuar su camino.")
    botonSimple("Salir");
  } else if (pantallasDyM == 15) { // Pantalla Pacífica 7
    image(dipperPacificaImgs[6], 0, -90, width, height);
    mostrarPanel("Por fin, un momento de paz y tranquilidad. Mientras caminaban entre \nel bosque, distinguieron una enorme figura de piedra… ¡era él!")
    botonSimple("Siguiente");

  } else if (pantallasDyM == 16) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡FELICIDADES!", 50, 106);
    fill(255, 165, 0); 
  textFont(letra1);
  textSize(20);
    text("¡Finalmente encontraron la estatua de Bill Cipher! Sin dudas, sería la \natracción principal de la cabaña del misterio.", 10, 350)
    botonSimple("Reiniciar");
  } else if (pantallasDyM == 17) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[5], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡PERDISTE!", 120, 106);
    fill(255); 
  textFont(letra1);
  textSize(20);
    text("El Multioso los triplicó en fuerza… y en cabezas. No había \nforma de detener a una bestia así. Ni con suerte.", 20, 350)
    botonSimple("Reiniciar");

    //MABEL
  } else if (pantallasDyM == 18) { // Mabel 1
  
    image(dipperImgs[8], 0, -150, width, height);
    mostrarPanel("Mabel oyó que la estatua de Bill sigue intacta en lo mas profundo del \nbosque, la curiosidad le ganó y quiere ir a investigar.");
    botonesDobles("Ir al bosque", "Ir a la ciudad");
  }

  else if (pantallasDyM == 19) { // Pantalla Mabel 2 (ciudad)
  
    image(dipperImgs[3], 0, -150, width, height);
    mostrarPanel("La ciudad está tranquila, cosa normal en una tarde de sábado de \nGravity Falls. Por ahora nada útil que ver aquí");
    botonSimple("Ir al bosque");
  }
  else if (pantallasDyM == 20) { // Pantalla Mabel 3 (bosque)
  
    image(dipperPacificaImgs[0], 0, -150, width, height);
    mostrarPanel("Ella y Stan se adentran en los árboles. Todo parece tranquilo hasta \nque escuchan algo entre los arbustos");
    botonSimple("Siguiente");
}
 else if (pantallasDyM == 21) { // Pantalla Mabel 4 (bosque)
  
    image(dipperImgs[9], 0, -80, width, height);
    mostrarPanel("¡Oh no! Los duendes volvieron para vengarse, y se los ve muy enojados. \n¿Que desean hacer?");
    botonesDobles("Huir", "Pelear")
} else if (pantallasDyM == 22) { // Pantalla Mabel 4 (bosque)
  
    image(dipperImgs[10], 0, -80, width, height);
    mostrarPanel("Por suerte el tío stan llevaba un bate con el, haciendo vomitar arco \niris a mas de uno");
   botonSimple("Siguiente");
}
else if (pantallasDyM == 23) { // Pantalla Mabel 4 (bosque)
  
    image(dipperImgs[17], 0, -80, width, height);
    mostrarPanel("Estas grandes maderas impiden su paso, pero talvez un hacha los\n ayude, recuerdan haber visto una en la ciudad");
   botonesDobles("Volver", "Ir a la ciudad");
}

else if (pantallasDyM == 24) { // Pantalla Mabel 4 (bosque)
  
    image(dipperImgs[3], 0, -80, width, height);
    image(hacha,200, 50, 200,200);
    mostrarPanel("¡Efectivamente, había un hacha aquí! Esperemos que el leñador del \npueblo no se enoje si la tomamos prestada...");
   botonSimple("Ir a cortar");
}
else if (pantallasDyM == 25) { // Pantalla Mabel 3 (bosque)
  
    image(dipperPacificaImgs[0], 0, -150, width, height);
    mostrarPanel("Siguen caminando, el bosque está demasiado tranquilo para su gusto, \npero ¿Qué podría pasar?");
    botonSimple("Siguiente");
} else if (pantallasDyM == 26) { // Pantalla Mabel 3 (bosque)
  
   image(dipperImgs[11], 0, -150, width, height);
    mostrarPanel("¡Otra vez el unicornio! Se ve que aún no le queda claro que eres puro \nde corazón... Se le ve molesto ¿Qué puedes hacer?");
    botonesDobles("Huir", "Pelear");
    
} 
 else if (pantallasDyM == 27) { // Pantalla Mabel 3 (bosque)
   image(dipperImgs[12], 0, -150, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡PERDISTE!", 120, 106);
   
    mostrarPanel("¡No estaban dispuestos a dejarlos ir esta vez!")
    botonSimple("Reiniciar");
}  else if (pantallasDyM == 28) { // Pantalla Mabel 3 (bosque)

   image(dipperImgs[13], 0, -70, width, height);
    mostrarPanel("Cortaste unos cuantas mechones de su cabello, eso lo entristeció y se \nfue llorando.")
    botonSimple("Siguiente");
} else if (pantallasDyM == 29) { // Pantalla Mabel 3 (bosque)

   image(dipperImgs[14], 0, -70, width, height);
    mostrarPanel("Por fin paz y tranquilidad. Caminando entre los árboles logran \ndistinguir una gran figura de piedra. ¡Es él!")
    botonSimple("Siguiente");
} else if (pantallasDyM == 30) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡FELICIDADES!", 50, 106);
    fill(255, 165, 0); 
  textFont(letra1);
  textSize(20);
    text("¡Finalmente encontraron la estatua de Bill Cipher! Sin dudas, sería la \natracción principal de la cabaña del misterio.", 10, 350)
    botonSimple("Reiniciar");
  } else if (pantallasDyM == 31) { // Pantalla Pacífica 8
  image(fondo, 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("Créditos", 150, 106);
    fill(0); 
  textFont(letra1);
  textSize(20);
    text("Autor de la serie: Alex Hirsch", 170, height/2);
    fill(255); 
  textFont(letra1);
  textSize(20);
    text("Franco Orlandi, 92996/2", 200, 300);
    text("Kani Aranda, 122590/3", 200, 330);
    botonSimple("Cerrar");
  }
}


//BOTÓN DE MÚSICA
function mouseDyM() {
if (!song.isPlaying()) {
      song.play();
    }
    
    
 // DIPPER HISTORIA 
if (pantallasDyM == 1) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 2;

    }
} else if (pantallasDyM == 2) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 3;
    }
} else if (pantallasDyM == 3) { 
    if(mouseX >= 350 && mouseX <= 550 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 4;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 9;
  }
} else if (pantallasDyM == 4) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 5;
    }
} else if (pantallasDyM == 5) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 6;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 9;
  }
} else if (pantallasDyM == 6) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 7;
    }
} else if (pantallasDyM == 7) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 8;
    }
} else if (pantallasDyM == 8) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
}

//PACIFICA
if (pantallasDyM == 9) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 10;
    }
  } else if (pantallasDyM == 10) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 11;
    }
  } else if (pantallasDyM == 11) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 12;
    }
  } else if (pantallasDyM == 12) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 13;
    }
  } else if (pantallasDyM == 13) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 14;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 17;
  }
  } else if (pantallasDyM == 14) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 15;
    }
  } else if (pantallasDyM == 15) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 16;
    }
  } else if (pantallasDyM == 16) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
  } else if (pantallasDyM == 17) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallaInicio = 0;
    }
  }

  //MABEL
  else if (pantallasDyM == 18) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 19;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 20;
  }
  } else if (pantallasDyM == 19) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 20;
    }
  } 
 else if (pantallasDyM == 20) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 21;
    }
  } else if (pantallasDyM == 21) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 22;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 23;
  }
  }
  else if (pantallasDyM == 23) { 
    if(mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 24;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 21;
  }
  }
  else if (pantallasDyM == 22) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 25;
 return;
    }
  }
  else if (pantallasDyM == 24) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 pantallasDyM = 25;
    }
  } else if (pantallasDyM == 25) { 
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
 
pantallasDyM = 26;
    }
  } else if (pantallasDyM == 26) { 
    
    if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 28;
    } else if (mouseX > 79 && mouseX < 279 && mouseY > 410 && mouseY < 450) {
    pantallasDyM = 27;
  }
  } else if (pantallasDyM == 28) { 
    
    if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
 pantallasDyM = 29;
    } 
  } else if (pantallasDyM == 29) { 
    
    if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
  pantallasDyM = 30;
    } 
  } else if (pantallasDyM == 30) { 
    
    if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 450) {
  pantallaInicio = 0;
    } 
  }
  else if (pantallasDyM == 27) { 
    
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
pantallaInicio = 0;
    } 
  } else if (pantallasDyM == 31) { 
    
    if(mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
pantallaInicio = 0;
    } 
  }
}
