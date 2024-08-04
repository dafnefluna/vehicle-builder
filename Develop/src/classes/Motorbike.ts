// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      this.wheels = [];
      for (let i = 0; i < 2; i++) {
        this.wheels.push(new Wheel());
      }
    }
  }
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }

  override printDetails(): void {
    super.printDetails();
    console.log(this.vin);
    console.log(this.color);
    console.log(this.make);
    console.log(this.model);
    console.log(this.year);
    console.log(this.weight);
    console.log(this.topSpeed);
    console.log(this.wheels);

  }
}

// Export the Motorbike class as the default export
export default Motorbike;
