class VehicleThree {
  constructor(
    //readonly does not allow assigning a new value
    protected readonly brandName: string,
    private readonly model: string,
    private readonly color: string
  ) {}

  drive() {
    console.log(
      `Driving a ${this.brandName} model ${this.model} color ${this.color}`
    );
  }
}

class Car extends VehicleThree {
    drive():void{
        console.log(`im driving a car ${this.brandName}`)
    }
}

const vehicleThree = new Car("Honda", "2015", "red");
vehicleThree.drive();
console.log(vehicleThree);
