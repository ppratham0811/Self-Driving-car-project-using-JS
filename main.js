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
  50,
  "KEYS"
);
const traffic = [new Car(road.getLaneCenter(1), 200, 30, 50, "DUMMY", 2)];

function animate() {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }
  car.update(road.borders, traffic);
  canvas.height = window.innerHeight;
  ctx.save();
  ctx.translate(0, -car.y + canvas.height * 0.8);
  road.draw(ctx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(ctx);
  }
  car.draw(ctx);
  ctx.restore();
  requestAnimationFrame(animate);
}

animate();
