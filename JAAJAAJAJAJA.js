
/**       español:                                                                English:
 *          Mapeo de hitbox                                                          hitbox mapping:
 * 
 *          botones mano derecha                                                     Right hand buttons: 
 * 
 *          5 6 7 8                                                                  5 6 7 8
 *          1 2 3 4                                                                  1 2 3 4 
 *    
 *          botones mano izquierda (en caso de que tu hitbox no use ajes)            Left hand buttons:
 *          
 *          L U R                                                                    L U R
 *                D                                                                        D
 * 
 * 
 *                                               Full hitbox quick reference:
 * 
 *                                         vbLeft vbUp vbRight   vb5 vb6 vb7 vb8
 *                                                        vbDown  vb1 vb2 vb3 vb4
 */
  //valores de hardware:
    //mano derecha: //right hand:
    // posicion del boton en la hitbox = codigo del boton en esa posicion dado por https://html5gamepad.com/codes
    // buton position on the hitbox = button code of that position from https://html5gamepad.com/code
  var vb1 = 0;
  var vb2 = 1;
  var vb3 = 7;
  var vb4 = 6;
  var vb5 = 2;
  var vb6 = 3;
  var vb7 = 5;
  var vb8 = 4;
  
    //mano izquierda: //left hand:
  
  var vbUp = 12;
  var vbDown = 13;
  var vbRight = 15;
  var vbLeft = 14;

  // Si tu hitbox funciona a base de ejes cambia el false por true
  // If your hitbox uses axis for X and Y position change this variable to true
  var ejes = false;
  
//Logica y animaciones

  var start;
  var x = 0;
  var y = 0;
  var gp;

  var leftUp = document.getElementById("leftup")
  var rightUp = document.getElementById("rightUp")
  var left0 = document.getElementById("left0")
  var left1 = document.getElementById("left1")
  var left2 = document.getElementById("left2")
  var right0 = document.getElementById("right0")
  var right1 = document.getElementById("right1")
  var right2 = document.getElementById("right2")
  
  var boton1 = document.getElementById("boton1")
  var boton2 = document.getElementById("boton2")
  var boton3 = document.getElementById("boton3")
  var boton4 = document.getElementById("boton4")
  var boton5 = document.getElementById("boton5")
  var boton6 = document.getElementById("boton6")
  var boton7 = document.getElementById("boton7")
  var boton8 = document.getElementById("boton8")
  var parriba = document.getElementById("parriba")
  var pabajo = document.getElementById("pabajo")
  var palado = document.getElementById("palado")
  var palotrolao = document.getElementById("palotrolao")

  var fondo = document.getElementById("fondo")

  var br1 = document.getElementById("bracito1")
  var br2 = document.getElementById("bracito2")
  var br3 = document.getElementById("bracito3")
  var br4 = document.getElementById("bracito4")
  var br5 = document.getElementById("bracito5")
  var br6 = document.getElementById("bracito6")
  var br7 = document.getElementById("bracito7")
  var br8 = document.getElementById("bracito8")
  

  var brazod=0;
  var brazoi=0;
  

  var rAF = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.requestAnimationFrame;

  var rAFStop = window.mozCancelRequestAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.cancelRequestAnimationFrame;

  window.addEventListener("gamepadconnected", function () {
    var gp = navigator.getGamepads()[0];
    console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");

    gameLoop();
  });


  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  window.addEventListener("gamepaddisconnected", function () {
    console.log("Waiting for gamepad.");

    rAFStop(start);
  });

  if (!('GamepadEvent' in window)) {
    // No gamepad events available, poll instead.
    var interval = setInterval(pollGamepads, 500);
  }

  function pollGamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    for (var i = 0; i < gamepads.length; i++) {
      var gp = gamepads[i];
      if (gp) {
        console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
        gameLoop();
        clearInterval(interval);
      }
    }
  }

  function buttonPressed(b) {
    if (typeof (b) == "object") {
      return b.pressed;
    }
    return b == 1.0;
  }

  function gameLoop() {
    var vuelta= true
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gamepads)
      return;

    var gp = gamepads[0];
    
    if (vuelta && buttonPressed(gp.buttons[vb1]) && !(buttonPressed(gp.buttons[vb2]) && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton1.classList.remove("invisible")
      brazod = 1;
      console.log("boton 0");
      vuelta=false;
    }
    else{
      boton1.classList.add("invisible")

    }
      
    if ( vuelta && buttonPressed(gp.buttons[vb2]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton2.classList.remove("invisible")
      brazod=2;
      console.log("boton 1");
      vuelta=false;
    } else{
      boton2.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[vb3]) && !(buttonPressed(gp.buttons[vb2]) && buttonPressed(gp.buttons[vb1])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton3.classList.remove("invisible")
      brazod=3
      console.log("boton 2");
      vuelta=false;
    } else{
      boton3.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[vb4]) && !(buttonPressed(gp.buttons[vb2]) && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb1])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton4.classList.remove("invisible")
      brazod=4
      console.log("boton 3");
      vuelta=false;
    }
    else{
      boton4.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[vb5]) && !(buttonPressed(gp.buttons[vb2]) && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb1])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton5.classList.remove("invisible")
      brazod=5
      console.log("boton 4");
      vuelta=false;
    } else{
      boton5.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[vb6]) && !(buttonPressed(gp.buttons[vb2]) && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb1])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton6.classList.remove("invisible")
      brazod=6
      console.log("boton 5");
      vuelta=false;
    } else{
      boton6.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[vb7]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton7.classList.remove("invisible")
      brazod=7
      console.log( "boton 6"); 
      vuelta=false;
    } else{
      boton7.classList.add("invisible")


    }
    if (vuelta && buttonPressed(gp.buttons[vb8]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton8.classList.remove("invisible")
      brazod=8
      console.log("boton 7");

    }
    else{
      boton8.classList.add("invisible")


    }
    if (vuelta && buttonPressed(gp.buttons[vbUp]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[9]))) {
      y=-1
      console.log("boton 8 akka parriba");
    }
    if (vuelta && buttonPressed(gp.buttons[vbDown]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8]))) {
      y=1
      console.log("boton 9 akka pabajo");
    }
    if (vuelta && buttonPressed(gp.buttons[vbRight]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[9]))) {
           x=1
      console.log("boton 8 akka el pp");
    }
    if (vuelta && buttonPressed(gp.buttons[vbLeft]) && !(buttonPressed(gp.buttons[vb1]) && buttonPressed(gp.buttons[vb2])  && buttonPressed(gp.buttons[vb3])  && buttonPressed(gp.buttons[vb4])  && buttonPressed(gp.buttons[vb5])  && buttonPressed(gp.buttons[vb6])  && buttonPressed(gp.buttons[vb7])  && buttonPressed(gp.buttons[vb8])  && buttonPressed(gp.buttons[8]))) {
      x=-1
      console.log("boton 9 akka el psoe");
    }
    

    //axis


    if (ejes) {
      switch (gp.axes[0]) {  // change x to gp.axes[0] if ur system is axe based
        case -1:
          palado.classList.remove("invisible")
          palotrolao.classList.add("invisible")

          brazoi=1
          break;
        case 1:
          palado.classList.add("invisible")
          palotrolao.classList.remove("invisible")
          brazoi=2
          left0.classList.remove("invisible")
          left1.classList.add("invisible")
          left2.classList.add("invisible")
          // console.log("izq");
          break;
        default:
        palado.classList.add("invisible")
        palotrolao.classList.add("invisible")
          // console.log("neutro");
          break;
      }

      switch (gp.axes[1]) { // change y to gp.axes[1] if ur system is axe based
        case 1:
          parriba.classList.remove("invisible")
          pabajo.classList.add("invisible")

          brazoi=2
          break;
        case -1:
          parriba.classList.add("invisible")
          pabajo.classList.remove("invisible")

          brazoi=3
          break;
        default:
          parriba.classList.add("invisible")
          pabajo.classList.add("invisible")
          
          
          break;
      }
      
    }
    else{
      switch (x) {  // change x to gp.axes[0] if ur system is axe based
        case -1:
          palado.classList.remove("invisible")
          palotrolao.classList.add("invisible")

          brazoi=1
          break;
        case 1:
          palado.classList.add("invisible")
          palotrolao.classList.remove("invisible")
          brazoi=2
          left0.classList.remove("invisible")
          left1.classList.add("invisible")
          left2.classList.add("invisible")
          // console.log("izq");
          break;
        default:
        palado.classList.add("invisible")
        palotrolao.classList.add("invisible")
          // console.log("neutro");
          break;
      }

      switch (y) { // change y to gp.axes[1] if ur system is axe based
        case 1:
          parriba.classList.remove("invisible")
          pabajo.classList.add("invisible")

          brazoi=2
          break;
        case -1:
          parriba.classList.add("invisible")
          pabajo.classList.remove("invisible")

          brazoi=3
          break;
        default:
          parriba.classList.add("invisible")
          pabajo.classList.add("invisible")
          
          
          break;
      }
    }
    x=0
    y=0
    
    
    switch (brazoi) {
      case 1:
        left0.classList.remove("invisible")
        left1.classList.add("invisible")
        left2.classList.add("invisible")
        // console.log("mostrando izq 0");
        leftUp.classList.add("invisible")
        break;
      case 2:
      left1.classList.remove("invisible")
      left2.classList.add("invisible")
      left0.classList.add("invisible")
      // console.log("mostrando izq 1");
      leftUp.classList.add("invisible")
        break;
      case 3:
      left2.classList.remove("invisible")
      left0.classList.add("invisible")
      left1.classList.add("invisible")
      // console.log("mostrando izq 2");
      leftUp.classList.add("invisible")
        break;
        case 4:
        
        break;
      case 0:

      leftUp.classList.remove("invisible")
      left0.classList.add("invisible")
      left1.classList.add("invisible")
      left2.classList.add("invisible")
        break;
    }
   
    

    switch (brazod) {
      case 1:
        br1.classList.remove("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")

        break;
      case 2:
        br1.classList.add("invisible")
        br2.classList.remove("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;
        
      case 3:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.remove("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;

      case 4:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.remove("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;

      case 5:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.remove("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;

      case 6:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.remove("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;

      case 7:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.remove("invisible")
        br8.classList.add("invisible")
        rightUp.classList.add("invisible")
        break;

      case 8:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.remove("invisible")
        rightUp.classList.add("invisible")
        break;

    
      default:
        br1.classList.add("invisible")
        br2.classList.add("invisible")
        br3.classList.add("invisible")
        br4.classList.add("invisible")
        br5.classList.add("invisible")
        br6.classList.add("invisible")
        br7.classList.add("invisible")
        br8.classList.add("invisible")
        rightUp.classList.remove("invisible")
        break;
    }
    brazod=0;
    brazoi=0;
    var start = rAF(gameLoop);
  };

