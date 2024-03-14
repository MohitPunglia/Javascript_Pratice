class Car{

    constructor(make,model){
        this.make=make
        this.model=model

    }

    startEngine(){
        console.log("Starting car engine from parent class")
    }

}

class Audi extends Car{
    //overriden method
    startEngine(){
        console.log('Starting car engine from Audi class')
    }

    autoParking(){
        console.log('Auto parking --Audi')
    }
}

const audi=new Audi()
audi.startEngine()
audi.autoParking()

const car=new Car()
car.startEngine()
//car.autoParking() //cannot access parent method 
