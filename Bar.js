import kaboom from "kaboom"

class setWindow {
  constructor(width,height,background="white") {
    kaboom({
      width: width, 
      height: height, 
      background: background
    }) 
  function addSprite(name,src,x,y,size=[30,30]) {
    loadSprite(name,src)
    add([
      sprite(name),pos(x,y),scale(size)
    ])
  }
  }
}
