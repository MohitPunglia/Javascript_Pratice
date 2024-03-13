//Grand parent

class Automobile {
    constructor(chasisNumber) {
        this.chasisNumber = chasisNumber
    }

    userAeroDynamic() {
        console.log('Automobile  --- areodyamic' + " " + this.chasisNumber)
    }
}

//Parent Class

class Vehical extends Automobile {

    constructor(make, model, year) {
        super(7000)
        this.make = make
        this.model = model
        this.year = year
    }

    getInfo() {
        return `${this.make},${this.model},${this.year}`
    }
    startEngine() {
        console.log('Engine started ---Parent class')
    }

    stopEngine() {
        console.log('Engine Stop ----Parent class')
    }

}

//Child class

class Car extends Vehical {

    constructor(make, model, year, fueltype) {
        super(make, model, year) //parent class constructor is called
        this.fueltype = fueltype
    }

    driveCar() {
        console.log('Driving car ' + this.model + " " + this.fueltype)
    }
}

//Child class

class Truck extends Vehical {

    constructor(make, model, year, loadingCapacity) {
        super(make, model, year) //parent class constructor is called
        this.loadingCapacity = loadingCapacity
    }

    driveTruck() {
        console.log('Driving Truck' + this.model + "" + "with capacity" + this.loadingCapacity)
    }
}

//creating objects
const car = new Car('Maruti', 'Baleno', 2020, 'Petrol')
const truck = new Truck('Eicher', 'Airbus', 2022, 1010)

car.startEngine()
console.log(car.getInfo())
car.driveCar()
car.userAeroDynamic()

truck.startEngine()
console.log(truck.getInfo())
truck.driveTruck()
truck.userAeroDynamic()
