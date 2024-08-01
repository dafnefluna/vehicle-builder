// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import { Interface } from 'readline';

// note: do I need to include private in the preoperties because these will be the same in other ts files? will they class? TBD 7/31/24
class Truck extends Vehicle implements AbleToTow {
  protected vin: string;
  protected color: string;
  protected make: string;
  protected model: string;
  protected year: number;
  protected weight: number;
  protected topSpeed: number;
  protected wheels: Wheel[];
  towingCapacity: number;

    
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[], 
    towingCapacity: number,
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
    this.started = false;
    this.currentSpeed = this.currentSpeed;

    if (wheels.length === 4) {
      this.wheels = wheels; 
      } else {
        this.wheels = [];
        for (let i = 0; i < 4; i++) {
          this.wheels.push(new Wheel());
        }
      }
    }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {

    getMake(): string {
      return this.make;
    } 

    
    // throw new Error('Method not implemented.');
    // if (this.towingCapacity >= this.weight) {
    //   console.log()
    // }
     // TODO: Get the make and model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  }
   // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  }
  


// Export the Truck class as the default export
export default Truck;
