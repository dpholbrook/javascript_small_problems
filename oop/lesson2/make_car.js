function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate, 
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },
    brakeRate() {
      if (this.speed <= 0) {
        return;
      }
      this.speed -= brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brakeRate();
console.log(sedan.speed);
sedan.brakeRate();
console.log(sedan.speed);

let coupe = makeCar(12, 10);
coupe.accelerate();
console.log(coupe.speed);
coupe.brakeRate();
console.log(coupe.speed);
coupe.brakeRate();
console.log(coupe.speed);

let hatchback = makeCar(9, 7);
hatchback.accelerate();
console.log(hatchback.speed);
hatchback.brakeRate();
console.log(hatchback.speed);
hatchback.brakeRate();
console.log(hatchback.speed);


