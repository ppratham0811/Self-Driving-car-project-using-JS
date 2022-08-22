const canvas = document.getElementById("canvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(
  road.getLaneCenter(
    road.laneCount % 2 === 1 ? road.laneCount / 2 - 1 / 2 : road.laneCount / 2
  ),
  500,
  30,
  50
);
animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;

  ctx.save();
  ctx.translate(0, -car.y + canvas.height * 0.6);
  car.draw(ctx);
  road.draw(ctx);
  ctx.restore();
  requestAnimationFrame(animate);
}
