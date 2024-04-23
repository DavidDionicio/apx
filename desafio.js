//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//------------------------------------------------ -----------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto
// de la lógica funciona bien)

const  jugadorUno  =  {
    nombre : "Marce" ,
    habilidades : {
      ataque : 70 ,
      velocidad : 30 ,
      vida : 60 ,
      magia : 120 ,
    } ,
    artículos : [ "espada" ,  "escudo" ,  "varita" ] ,
  } ;
  
  const  jugadorDos  =  {
    nombre : "Flor" ,
    habilidades : {
      ataque : 73 ,
      velocidad : 30 ,
      vida : 80 ,
      magia : 100 ,
    } ,
    articulos : [ "escudo" ,  "varita" ,  "capa" ,  "pocion" ] ,
  } ;
  
  //------------------------------------------------ -----------------------//
  const ataque1 = jugadorUno.habilidades.ataque;
  const ataque2 = jugadorDos.habilidades.ataque;
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  var  contadorPuntosJug1  =  0 ;
  var  contadorPuntosJug2  =  0 ;
  
  //Ganador:
  var  ganador ;
  
  //------------------------------------------------ -----------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.
  
  if  ( ataque1  >  ataque2 )  {
    contadorPuntosJug1  =  contadorPuntosJug1  +  1 ;
  }  else  if  ( ataque1 < ataque2 )  {
    contadorPuntosJug2 ++ ;
  }  else {
    contadorPuntosJug1 ++ ;
    contadorPuntosJug2 ++ ;
  };
  
  //COMPARACIÓN POR VELOCIDAD:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  const velocidad1 = jugadorUno.habilidades.velocidad;
  const velocidad2 = jugadorDos.habilidades.velocidad;
  if (velocidad1 > velocidad2){
    contadorPuntosJug1++;
  } else if (velocidad1 < velocidad2){
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };
  
  //COMPARACIÓN POR NIVEL DE VIDA:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  
 const vida1 = jugadorUno.habilidades.vida;
 const vida2 = jugadorDos.habilidades.vida;
 if (vida1 > vida2){
    contadorPuntosJug1++;
 } else if (vida1 < vida2){
    contadorPuntosJug2++;
 } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
 };

  //COMPARACIÓN POR MAGIA:
  //(Escribir debajo del código que te permitirá generar esta comparación)
  
  const magia1 = jugadorUno.habilidades.magia;
  const magia2 = jugadorDos.habilidades.magia;
  if (magia1 > magia2){
    contadorPuntosJug1++;
  } else if (magia1 < magia2){
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo del código que te permitirá generar esta comparación)
  
  const articulos1 = jugadorUno.artículos.length;
  const articulos2 = jugadorDos.articulos.length;
  if (articulos1 > articulos2){
    contadorPuntosJug1++;
  } else if (articulos1 < articulos2){
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };
  
  let ganadorDelJuego = "";
  if (contadorPuntosJug1 > contadorPuntosJug2){
    ganadorDelJuego = jugadorUno.nombre;
  } else if (contadorPuntosJug1 < contadorPuntosJug2){
    ganadorDelJuego = jugadorDos.nombre;
  } else {
    ganadorDelJuego = `Empate entre: ${jugadorUno.nombre} y ${jugadorDos.nombre}`;
  };

  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determina al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  
   let resultado = {
   [`Jugador 1: ${jugadorUno.nombre}`]: `Contador de puntos: ${contadorPuntosJug1}`,
   [`Jugador 2: ${jugadorDos.nombre}`]: `Contador de puntos: ${contadorPuntosJug2}`,
    ganador: ganadorDelJuego,
    }
    console.log(resultado)
  //------------------------------------------------ -----------------------//
