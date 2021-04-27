class VehicleTwo {
  constructor(
      //readonly does not allow assigning a new value
    private readonly brandName: string,
    private model: string,
    private color: string
  ) {}

  drive() {
    console.log(
      `Driving a ${this.brandName} model ${this.model} color ${this.color}`
    );
  }
}

const vehicleTwo = new Vehicle("Honda", "2015", "red");
vehicle.drive();
console.log(vehicleTwo);
