class VehicleTwo {
  constructor(
    //readonly does not allow assigning a new value
    private readonly brandName: string,
    private readonly model: string,
    private readonly color: string
  ) {}

  drive() {
    console.log(
      `Driving a ${this.brandName} model ${this.model} color ${this.color}`
    );
  }
}

const vehicleTwo = new VehicleTwo("Honda", "2015", "red");
vehicleTwo.drive();
console.log(vehicleTwo);
