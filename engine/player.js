import keys from "./input.js";
import { canvas, ctx } from "./game.js";

class Player {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.width = 40;
    this.height = 40;

    this.speed = 100;
  }

  checkOverFlow(x,y)
  {
    if(y < 0 || y+this.height > canvas.height){
        return true;
    }

    if(x <0 || x+this.width > canvas.width){
        return true;
    }

    return false;
  }


  update(deltaTime) {
    let speedDelta = this.speed * deltaTime;
    if (keys["w"] && !this.checkOverFlow(this.x,this.y-speedDelta)) this.y -= speedDelta;
    if (keys["s"] && !this.checkOverFlow(this.x,this.y+speedDelta)) this.y += speedDelta;
    if (keys["a"] && !this.checkOverFlow(this.x-speedDelta,this.y)) this.x -= speedDelta;
    if (keys["d"] && !this.checkOverFlow(this.x+speedDelta,this.y)) this.x += speedDelta;

  }

  draw(ctx) {
    ctx.fillStyle = "white";

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Player;