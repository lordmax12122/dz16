class Car {
    constructor({price, maxSpeed}) {
        this.speed = 0;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    static getSpecs(car) {
        return console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price} `);
    };

    get price() {
        return this._price
    }

    set price(newPrice) {
        return this._price = this.price + newPrice
    }

    turnOn() {
        return this.isOn = true;
    }

    turnOff() {
        return this.isOn = false, this.speed = 0;
    }

    accelerate(value) {
        if (value + this.speed < this.maxSpeed) {
           return this.speed += value;
        }
    }

    decelerate(value) {
        if (this.speed > 0) {
           return this.speed -= value
        } else {
            return this.speed = 0;
        }
    }

    drive(hours) {
        if (this.isOn === true) {
           return this.distance += hours * this.speed
        } else {
            return this.distance = 0;
        }
    }
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);

   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);

   
   console.log(mustang.price); 
   mustang._price = 4000;
   console.log(mustang._price); 