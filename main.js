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

function animate() {
  canvas.height = window.innerHeight;
  car.update();
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}

animate();
