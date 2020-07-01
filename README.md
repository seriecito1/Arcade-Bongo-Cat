# Fighter hitbox version of Osu Bongo cat!

![](https://im5.ezgif.com/tmp/ezgif-5-db7217d8d6c3.gif)


![Video in action!](https://www.youtube.com/watch?v=QBGh3QNaqsM&feature=youtu.be)

Preview! must use a controller:
https://romthesheep.github.io/Arcade-Bongo-Cat/

Html version of ![bongocat-osu](https://github.com/kuroni/bongocat-osu) with based incorporated Greenscreen

To match your controller button configuration use the usefull website https://html5gamepad.com/codes. 
The default index contains the config for the ![brook fighting](https://www.brookaccessory.com/detail/09922855/) pcb, tho changing this is pretty simple.

Atm the only available version is an hitbox controller, maybe in the future I will implement a fight stick version if I see demand for it.

# my controller doesnt match that configuration, what do I do?

Head to https://html5gamepad.com/codes and write down your Bvalues and the position on the board. 
I've assigned this keyvalues to the values of the board:

![](https://i.gyazo.com/22b7d8d1d8ae089f4074d55824894649.png)

You will have to match your Bvalues to the gp.buttons array index.
In the following example, Bvalue 0 is linked to button 1 so we will need to activate the element boton1 and set brazod to 1.
![](https://i.gyazo.com/55ee877594eb8c48ef8f771bd49f71b6.png)

If your config is axis based forthermore editing is requiered.
Changing the variables on the y and x switches to gp.axes, instructions to achieve this can be found on the js comments (line 201 and 224)

# I want to use this on my OBS, how can I do it?

Create a browser source and paste your local directory on the url field like this:

![](https://i.gyazo.com/176f7bfb7af033a2e672b3b4a67cf0b6.png)

then use a color key filter to clear the green background and you are good to go!

# IMPORTANT NOTE
IF YOU ARE USING A CHEAP PCB (no shame) YOU MAY NEED TO UNPLUG AND PLUG AGAIN THE CONTROLLES
