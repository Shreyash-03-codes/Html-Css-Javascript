class Car{
    name;
    color;
    price;

    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
    }

    get getName(){
        return this.name;
    }

    get getColor(){
        return this.color;
    }

    get getPrice(){
        return this.price;
    }
    
    run(){
        console.log("Car is Running!!!!")
    }

    break(){
        console.log("Car is Breaking!!!!")
    }
    

}

let bmw=new Car("X5","Black",15000000);
console.log(bmw.getColor);
console.log(bmw.getName);
console.log(bmw.getPrice);

bmw.run();
bmw.break();
