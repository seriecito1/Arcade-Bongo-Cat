# Fighter hitbox version of Osu Bongo cat!



[Video in action!](https://www.youtube.com/watch?v=QBGh3QNaqsM&feature=youtu.be)

[review!](https://romthesheep.github.io/Arcade-Bongo-Cat/)  must use a controller [If your controller is axis based use this link instead!](https://romthesheep.github.io/Arcade-Bongo-Cat/index.html?ejes=true)

Html version of ![bongocat-osu](https://github.com/kuroni/bongocat-osu) with based incorporated Greenscreen

To match your controller button configuration use the usefull website https://html5gamepad.com/codes. 
The default index contains the config for the ![brook fighting](https://www.brookaccessory.com/detail/09922855/) pcb, tho changing this is pretty simple.

Atm the only available version is an hitbox controller, maybe in the future I will implement a fight stick version if I see demand for it.

# my controller doesnt match that configuration, what do I do?

Head to https://html5gamepad.com/codes and write down your Bvalues and the position on the board. 
I've assigned this keyvalues to the values of the board:

![](https://i.gyazo.com/22b7d8d1d8ae089f4074d55824894649.png)

You will have to match your Bvalues to vbX variables at the start of the js file. This is the default configuration:

![](https://i.gyazo.com/05fc40989e4240c68f08f8973d5c6c1f.png)


# I want to use this on my OBS, how can I do it?

Create a browser source and paste your local directory on the url field like this:

![](https://i.gyazo.com/176f7bfb7af033a2e672b3b4a67cf0b6.png)

then use a color key filter to clear the green background and you are good to go!

# IMPORTANT NOTE
IF YOU ARE USING A CHEAP PCB (no shame) YOU MAY NEED TO UNPLUG AND PLUG AGAIN THE CONTROLLER
