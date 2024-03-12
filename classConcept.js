class car{

    constructor(color,model,name,price){
        this.color=color
        this.model=model
        this.price=price
        this.name=name
    }


}

function refuel(){
    console.log("Car is refuled method")
}

const c1=new car('Black',892,'Honda',3949)
console.log(c1.color)
console.log(c1.model)
console.log(c1.name)
console.log(c1.price)

console.log('-----------------')

const c2=new car('While','Mbq1','BMW',200)
console.log(c2.color)
console.log(c2.model)
console.log(c2.name)
console.log(c2.price)
