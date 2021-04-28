class VehicleThree {
  constructor(
    //readonly does not allow assigning a new value
    protected readonly brandName: string,
    private readonly model: string,
    private readonly color: string,
    private price: number
  ) {}

  get getPrice(){
    return this.price
  }

  set setPrice(value: number){
    this.price = value
  }

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

const vehicleThree = new Car("Honda", "2015", "red", 200 );

//set and get
console.log(vehicleThree.getPrice)
vehicleThree.setPrice = 400

vehicleThree.drive();
console.log(vehicleThree);
