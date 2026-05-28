import { canvas, ctx } from "./engine/game.js";
import Player from "./engine/player.js";

const player = new Player();

function update(deltaTime) {
  player.update(deltaTime);
}

function render() {

  // background
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.draw(ctx);
}
let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = (timestamp - lastTime)/ 1000;
      // prevent huge jumps during tab switches
    if (deltaTime > 0.1) {
        deltaTime = 0.1;
    }


    update(deltaTime);
    render();

    requestAnimationFrame(gameLoop);
}

gameLoop();