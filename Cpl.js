import kaboom from "kaboom"

class Cpl {
  this.pause = false
  constructor(width,height) {}
  function pause() {
    pause = true
  }
  function startAni(width,height,fps,paths) {
    while () {
      for (var i = 0;i == this.paths.length;i++) {
        loadSprite(this.paths[i],this.paths[i]) 
        setTimeout(() => {
          kaboom({
            width: this.width, 
            height: this.height, 
            background: [sprite(this.paths[i]),scale(this.width,this.height)]
          }) 
        }, 1000/this.fps) 
      }
    }
  }
}
