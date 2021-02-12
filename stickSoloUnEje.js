/**       español:                                                                English:
 *          Mapeo de hitbox                                                          hitbox mapping:
 *
 *          botones mano derecha                                                     Right hand buttons:
 *
 *          5 6 7 8                                                                  5 6 7 8
 *          1 2 3 4                                                                  1 2 3 4
 */


//valores de hardware:

//mano derecha: //right hand:

// posicion del boton en el stick = codigo del boton en esa posicion dado por https://gamepad-tester.com/
// buton position on the stick = button code of that position from https://gamepad-tester.com/

var vb1 = 1;
var vb2 = 2;
var vb3 = 7;
var vb4 = 6;
var vb5 = 0;
var vb6 = 3;
var vb7 = 5;
var vb8 = 4;


// mano izquierda: //left hand:

/**
 *  Poner aqui el numero del eje que use tu stick, visita la pagina ttps://html5gamepad.com/codes para verlo, en caso de que tu stick use dos ejes, 
 *  uno para la X y otro para la Y, usar el index.html y modificar el archivo "hitbox y stick de dos ejes.js"
 */

var nEje = 9;


// En caso de que el stick no este funcionando, ir a la pagina https://gamepad-tester.com/ y al mover el stick en una direccion cualquiera
// veras algo parecido a esto: https://i.gyazo.com/10bc2749cf89fa2417ed9568b1185ba0.png. Pon el numero correspondiente en cada uno de los valores de abajo
// En el caso de la imagen, el stick estaba siendo empujado a la izquierda, asi que copiaremos ese nuemero en nLeft

var nUp = -1;
var nDown = 0.14285;
var nRight = -0.42857;
var nLeft = 0.71429;










//Logica y animaciones 
/**
 * 
 *                                          NO TOCAR MAS ALLA DE AQUI SI NO SABES LO QUE ESTAS TOCANDO
 * 
 */

var start;
var x = 0;
var y = 0;
var gp;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var ejes=0
var stick = 1;
var invertX = 1;
var invertY = 1;

nUp = parseInt(nUp * 1000);
nDown = parseInt(nDown * 1000);
nRight = parseInt(nRight * 1000);
nLeft = parseInt(nLeft * 1000);

if (urlParams.has("ejes")) {
  if (urlParams.get("ejes") == "1") {
    ejes = 1;
    console.log("modo ejes activado");
  }
}
if (urlParams.has("stick")) {
  if (urlParams.get("stick") == "1") {
    ejes = 1;
    stick = 1;
    console.log("Modo stick activado");
  }
}

if (stick == 0) {
  var leftUp = document.getElementById("leftup");
  var left0 = document.getElementById("left0");
  var left1 = document.getElementById("left1");
  var left2 = document.getElementById("left2");
  var left3 = document.getElementById("left3");
} else {
  var leftUp = document.getElementById("left0Stick");
  var left0 = document.getElementById("leftIzqStick");
  var left1 = document.getElementById("leftUpStick");
  var left2 = document.getElementById("leftDerStick");
  var left3 = document.getElementById("rightDownStick");
}

var rightUp = document.getElementById("rightUp");
var right0 = document.getElementById("right0");
var right1 = document.getElementById("right1");
var right2 = document.getElementById("right2");

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");

var parriba = document.getElementById("parriba");
var pabajo = document.getElementById("pabajo");
var palado = document.getElementById("palado");
var palotrolao = document.getElementById("palotrolao");

if (stick == "1") {
  var fondo = document.getElementById("fondoStick");
  fondo.classList.remove("invisible");
  parriba = document.getElementById("conjuntoVacio");
  pabajo = document.getElementById("conjuntoVacio");
  palado = document.getElementById("conjuntoVacio");
  palotrolao = document.getElementById("conjuntoVacio");
} else {
  var fondo = document.getElementById("fondo");
}

var br1 = document.getElementById("bracito1");
var br2 = document.getElementById("bracito2");
var br3 = document.getElementById("bracito3");
var br4 = document.getElementById("bracito4");
var br5 = document.getElementById("bracito5");
var br6 = document.getElementById("bracito6");
var br7 = document.getElementById("bracito7");
var br8 = document.getElementById("bracito8");

var brazod = 0;
var brazoi = 0;

var rAF =
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;

var rAFStop =
  window.mozCancelRequestAnimationFrame ||
  window.webkitCancelRequestAnimationFrame ||
  window.cancelRequestAnimationFrame;

window.addEventListener("gamepadconnected", function () {
  var gp = navigator.getGamepads()[0];
  console.log(
    "Gamepad connected at index " +
      gp.index +
      ": " +
      gp.id +
      ". It has " +
      gp.buttons.length +
      " buttons and " +
      gp.axes.length +
      " axes."
  );

  gameLoop();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("gamepaddisconnected", function () {
  console.log("Waiting for gamepad.");

  rAFStop(start);
});

if (!("GamepadEvent" in window)) {
  // No gamepad events available, poll instead.
  var interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  var gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads
    : [];
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp) {
      console.log(
        "Gamepad connected at index " +
          gp.index +
          ": " +
          gp.id +
          ". It has " +
          gp.buttons.length +
          " buttons and " +
          gp.axes.length +
          " axes."
      );
      gameLoop();
      clearInterval(interval);
    }
  }
}

function buttonPressed(b) {
  if (typeof b == "object") {
    return b.pressed;
  }
  return b == 1.0;
}

function gameLoop() {
  var vuelta = true;
  var gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads
    : [];
  if (!gamepads) return;

  var gp = gamepads[0];

  if (
    vuelta &&
    buttonPressed(gp.buttons[vb1]) &&
    !(
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton1.classList.remove("invisible");
    brazod = 1;
    console.log("boton 0");
    vuelta = false;
  } else {
    boton1.classList.add("invisible");
  }

  if (
    vuelta &&
    buttonPressed(gp.buttons[vb2]) &&
    !(
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton2.classList.remove("invisible");
    brazod = 2;
    console.log("boton 1");
    vuelta = false;
  } else {
    boton2.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb3]) &&
    !(
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton3.classList.remove("invisible");
    brazod = 3;
    console.log("boton 2");
    vuelta = false;
  } else {
    boton3.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb4]) &&
    !(
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton4.classList.remove("invisible");
    brazod = 4;
    console.log("boton 3");
    vuelta = false;
  } else {
    boton4.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb5]) &&
    !(
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton5.classList.remove("invisible");
    brazod = 5;
    console.log("boton 4");
    vuelta = false;
  } else {
    boton5.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb6]) &&
    !(
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton6.classList.remove("invisible");
    brazod = 6;
    console.log("boton 5");
    vuelta = false;
  } else {
    boton6.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb7]) &&
    !(
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb7]) &&
      buttonPressed(gp.buttons[vb8])
    )
  ) {
    boton7.classList.remove("invisible");
    brazod = 7;
    console.log("boton 6");
    vuelta = false;
  } else {
    boton7.classList.add("invisible");
  }
  if (
    vuelta &&
    buttonPressed(gp.buttons[vb8]) &&
    !(
      buttonPressed(gp.buttons[vb1]) &&
      buttonPressed(gp.buttons[vb2]) &&
      buttonPressed(gp.buttons[vb3]) &&
      buttonPressed(gp.buttons[vb4]) &&
      buttonPressed(gp.buttons[vb5]) &&
      buttonPressed(gp.buttons[vb6]) &&
      buttonPressed(gp.buttons[vb7])
    )
  ) {
    boton8.classList.remove("invisible");
    brazod = 8;
    console.log("boton 7");
  } else {
    boton8.classList.add("invisible");
  }

  //axis

  switch (parseInt(gp.axes[nEje] * 1000)) {
    case nLeft:
      palado.classList.remove("invisible");
      palotrolao.classList.add("invisible");
      brazoi = 1;
      break;
    case nRight:
      palado.classList.add("invisible");
      palotrolao.classList.remove("invisible");
      brazoi = 3;
      left0.classList.remove("invisible");
      left1.classList.add("invisible");
      left2.classList.add("invisible");
      break;

    case nUp:
      parriba.classList.remove("invisible");
      pabajo.classList.add("invisible");
      brazoi = 2;
      break;
    case nDown:
      parriba.classList.add("invisible");
      pabajo.classList.remove("invisible");
      brazoi = 4;
      break;

    case 128:
      //neutro
      parriba.classList.add("invisible");
      pabajo.classList.add("invisible");
      palado.classList.add("invisible");
      palotrolao.classList.add("invisible");

      break;
  }

  x = 0;
  y = 0;

  console.log(brazoi);

  switch (brazoi) {
    case 1:
      left0.classList.remove("invisible");
      left1.classList.add("invisible");
      left2.classList.add("invisible");
      left3.classList.add("invisible");
      // console.log("mostrando izq 0");
      leftUp.classList.add("invisible");
      break;
    case 2:
      left0.classList.add("invisible");
      left1.classList.remove("invisible");
      left2.classList.add("invisible");
      left3.classList.add("invisible");
      leftUp.classList.add("invisible");
      console.log("caso 2");

      break;
    case 3:
      left0.classList.add("invisible");
      left1.classList.add("invisible");
      left2.classList.remove("invisible");
      left3.classList.add("invisible");

      leftUp.classList.add("invisible");
      console.log("caso 3");

      break;
    case 4:
      left0.classList.add("invisible");
      left1.classList.add("invisible");
      left2.classList.add("invisible");
      left3.classList.remove("invisible");
      // console.log("mostrando izq 2");
      leftUp.classList.add("invisible");
      console.log("caso 4");

      break;
    case 0:
      leftUp.classList.remove("invisible");
      left0.classList.add("invisible");
      left1.classList.add("invisible");
      left2.classList.add("invisible");
      left3.classList.add("invisible");
      break;
  }

  switch (brazod) {
    case 1:
      br1.classList.remove("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");

      break;
    case 2:
      br1.classList.add("invisible");
      br2.classList.remove("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 3:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.remove("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 4:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.remove("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 5:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.remove("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 6:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.remove("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 7:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.remove("invisible");
      br8.classList.add("invisible");
      rightUp.classList.add("invisible");
      break;

    case 8:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.remove("invisible");
      rightUp.classList.add("invisible");
      break;

    default:
      br1.classList.add("invisible");
      br2.classList.add("invisible");
      br3.classList.add("invisible");
      br4.classList.add("invisible");
      br5.classList.add("invisible");
      br6.classList.add("invisible");
      br7.classList.add("invisible");
      br8.classList.add("invisible");
      rightUp.classList.remove("invisible");
      break;
  }
  brazod = 0;
  brazoi = 0;
  var start = rAF(gameLoop);
}