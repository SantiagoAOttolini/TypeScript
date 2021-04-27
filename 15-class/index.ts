class Vehicle {
  brandName: string;
  model: string;
  color: string;

  constructor(b: string, model: string, color: string) {
    this.brandName = b;
    this.color = color;
    this.model = model;
  }

  drive() {
    console.log(
      `Driving a ${this.brandName} model ${this.model} color ${this.color}`
    );
  }
}

const vehicle = new Vehicle("Honda", "2015", "red");
vehicle.drive();
console.log(vehicle);
 