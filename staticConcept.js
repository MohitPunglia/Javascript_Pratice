class Car {

    static wheels = 4
    constructor(name, model, price) {
        this.name = name
        this.model = model
        this.price = price
    }

    static stop() {
        console.log("Car stoping")
    }
    drive() {
        console.log(this.name + " is driving ")
    }



}

const c1 = new Car('Suzuki', 2020, 200)
console.log(`${c1.name}, ${c1.model}, ${c1.price},${Car.wheels} `)
console.log(Car.wheels) //calling staic variable

Car.stop()
//c1.stop() //error as calling static method by object reference
c1.drive()
//Car.drive() //error

//static var/function need to be called using class name only
//non static var/function need to be called using object reference name
