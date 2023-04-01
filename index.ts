abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
    protected returned: boolean;
  
    constructor(make: string, model: string, year: number, _rented : boolean,returned:boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = true;
      this.returned = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
    isReturned(): boolean {
      return this.returned;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
    setReturned(returned: boolean): void {
      this.returned = returned;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log(`${this.make} ${this.model} ${this.year} is already rented`);
      } else {
        this.rented = true;
        console.log(`${this.make} ${this.model} ${this.year} has been rented`);
      }
    }
  
    return(): void {
      if (this.returned) {
        this.returned = true;
        console.log(`${this.make} ${this.model} ${this.year} has been returned`);
      } else {
        console.log(`${this.make} ${this.model} ${this.year} has not been rented`);
      }
    }
  }
  
  class Car extends Vehicle {
    private numDoors: number;
    private numPassengers: number;
    private color: string;
    private chassisNumber: number;

    constructor(make: string, model: string, year: number,rented : boolean, numDoors: number, numPassengers: number,colors:string,chassisNumber: number,returned:boolean) {
      super(make, model, year,rented,returned);
      this.numDoors = numDoors;
      this.numPassengers = numPassengers;
      this.color = colors;
      this.chassisNumber = chassisNumber;
    
    }
  
    rentalRate(): number {
      // Provide rental rate for cars
      return 50;
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
    getColor(): string {
      return this.color;
    }
  
    getNumPassengers(): number {
      return this.numPassengers;
    }
    getchassisNumber(): number {
        return this.chassisNumber;
      }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
    private color: string;
    private chassisNumber: number;
  
    constructor(make: string, model: string, year: number,rented : boolean, payloadCapacity: number,returned:boolean,colors:string,chassisNumber: number) {
      super(make, model, year,rented,returned);
      this.payloadCapacity = payloadCapacity;
      this.color = colors;
      this.chassisNumber = chassisNumber;
    
    }
    isPayload(): number {
      return this.payloadCapacity;
    }
    rentalRate(): number {
      // Provide rental rate for cars
      return 100;
    }
    getchassisNumber(): number {
      return this.chassisNumber;
    }
    getColor(): string {
      return this.color;
    }

  }

  class Motorcycle extends Vehicle {
    private engineSize: number;
    private chassisNumber: number;
  
    constructor(make: string, model: string, year: number,rented : boolean, engineSize: number,chassisNumber: number,returned:boolean) {
      super(make, model, year,rented,returned);
      this.engineSize = engineSize;
      this.chassisNumber = chassisNumber;
    }
  
    rentalRate(): number {
      // Provide rental rate for motorcycles
      return 30;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
    getchassisNumber(): number {
        return this.chassisNumber;
      }
    
  }
  
  // Example usage of Vehicle Car
  const car = new Car('Toyota', 'Corolla', 2023,true,4, 5,"AliceBlue",122-23,false);

 document.write("<h1>Category : Car </h1>")
  document.write(`<table border="2px solid balck">
<tr>
<th>Company</th>
<th>Model</th>
<th>Color</th>
<th>Year</th>
<th>Rent of Vehicle</th>
<th>Door</th>
<th>Pasenger Capacity</th>
<th>Chassis Number</th>
<th>Rented</th>
<th>Returned</th>
</tr>

<tr>
<th>${car.getMake()}</th>
<th>${car.getModel()}</th>
<th>${car.getColor()}</th>
<th>${car. getYear()}</th>
<th>${car.rentalRate()}</th>
<th>${car.getNumDoors()}</th>
<th>${car.getNumDoors()}</th>
<th>${car.getNumPassengers()}</th>
<th>${car.isRented()}</th>
<th>${car.isReturned()}</th>
</tr>
  </table>`) 


  // Example usage of Vehicle Truck
  const truck = new Truck('Mahindra', 'Hyber', 2023,true,5000, false,'Black',232323);

 document.write("<h1>Category : Truck </h1>")
  document.write(`<table border="2px solid balck">
<tr>
<th>Company</th>
<th>Model</th>
<th>Year</th>
<th>Color</th>
<th>Rent of Vehicle</th>
<th>Payload Capicity</th>
<th>Chassis Number</th>
<th>Rented</th>
<th>Returned</th>
</tr>

<tr>
<th>${truck.getMake()}</th>
<th>${truck.getModel()}</th>
<th>${truck.getColor()}</th>
<th>${truck. getYear()}</th>
<th>${truck.rentalRate()}</th>
<th>${truck.isPayload()}</th>
<th>${truck.getchassisNumber()}</th>
<th>${truck.isRented()}</th>
<th>${truck.isReturned()}</th>
</tr>
  </table>`) 