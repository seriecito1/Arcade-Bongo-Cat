
  // var gamepadInfo = document.getElementById("gamepad-info");
  // var ball = document.getElementById("ball");
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
  var sparking = document.getElementById("sparking")
  var fiesta = document.getElementById("fiesta")
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
    if (vuelta && buttonPressed(gp.buttons[0]) && !(buttonPressed(gp.buttons[1]) && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton1.classList.remove("invisible")
      brazod = 1;
      console.log("boton 0");
      vuelta=false;
    }
    else{
      boton1.classList.add("invisible")

    }
      
    if ( vuelta && buttonPressed(gp.buttons[1]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton2.classList.remove("invisible")
      brazod=2;
      console.log("boton 1");
      vuelta=false;
    } else{
      boton2.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[2]) && !(buttonPressed(gp.buttons[1]) && buttonPressed(gp.buttons[0])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton5.classList.remove("invisible")
      brazod=5
      console.log("boton 2");
      vuelta=false;
    } else{
      boton5.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[3]) && !(buttonPressed(gp.buttons[1]) && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[0])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton6.classList.remove("invisible")
      brazod=6
      console.log("boton 3");
      vuelta=false;
    }
    else{
      boton6.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[4]) && !(buttonPressed(gp.buttons[1]) && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[0])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton8.classList.remove("invisible")
      brazod=8
      console.log("boton 4");
      vuelta=false;
    } else{
      boton8.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[5]) && !(buttonPressed(gp.buttons[1]) && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[0])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton7.classList.remove("invisible")
      brazod=7
      console.log("boton 5");
      vuelta=false;
    } else{
      boton7.classList.add("invisible")

    }
    if (vuelta && buttonPressed(gp.buttons[6]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton4.classList.remove("invisible")
      brazod=4
      console.log( "boton 6"); 
      vuelta=false;
    } else{
      boton4.classList.add("invisible")


    }
    if (vuelta && buttonPressed(gp.buttons[7]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[8])  && buttonPressed(gp.buttons[9]))) {
      boton3.classList.remove("invisible")
      brazod=3
      console.log("boton 7");

    }
    else{
      boton3.classList.add("invisible")


    }
    if (vuelta && buttonPressed(gp.buttons[12]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[9]))) {
      y=-1
      console.log("boton 8 akka parriba");
    }
    if (vuelta && buttonPressed(gp.buttons[13]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8]))) {
      y=1
      console.log("boton 9 akka pabajo");
    }
    if (vuelta && buttonPressed(gp.buttons[15]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[9]))) {
           x=1
      console.log("boton 8 akka el pp");
    }
    if (vuelta && buttonPressed(gp.buttons[14]) && !(buttonPressed(gp.buttons[0]) && buttonPressed(gp.buttons[1])  && buttonPressed(gp.buttons[2])  && buttonPressed(gp.buttons[3])  && buttonPressed(gp.buttons[4])  && buttonPressed(gp.buttons[5])  && buttonPressed(gp.buttons[6])  && buttonPressed(gp.buttons[7])  && buttonPressed(gp.buttons[8]))) {
      x=-1
      console.log("boton 9 akka el psoe");
    }
    

    //axis
    // console.log(gp.axes[0]);

    switch (x) {
      case -1:
        palado.classList.remove("invisible")
        palotrolao.classList.add("invisible")
        // console.log("der");
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
    switch (y) {
      case 1:
        parriba.classList.remove("invisible")
        pabajo.classList.add("invisible")
        
        // console.log("arriba");
        brazoi=2
        break;
      case -1:
        parriba.classList.add("invisible")
        pabajo.classList.remove("invisible")
        
        // console.log("abajo");
        brazoi=3
        break;
      default:
        parriba.classList.add("invisible")
        pabajo.classList.add("invisible")
        
        
        break;
    }
    x=0
    y=0

    // console.log(brazoi);
    
    
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
      // console.log("mostrando izq neutro");
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
        // console.log(brazo);
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
        // console.log(brazo);
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

    // ball.style.left = a * 2 + "px";
    // ball.style.top = b * 2 + "px";
    brazod=0;
    brazoi=0;
    var start = rAF(gameLoop);
  };

