function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;

  this.name = function () {
    return this.firstName + " " + this.lastName;
  };

  Person.hey = function () {
    return "hello world";
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);

let stat = Person.hey();
console.log(stat);

let persen1 = myFather.name();

console.log(persen1);

class Simple {
  constructor(name, age) {
    this.fullName = name;
    this.userAge = age;
  }
}

Simple.prototype.calAge = function () {
  //let date = new Date();
  return 2023 - this.userAge;
};

const person1 = new Simple("John Paul", 34);
console.log(person1);

const poo = person1.calAge();
console.log(poo);

class Car {
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  }

  carSpeed() {
    console.log(`${this.carName} is going at ${this.speed}km/h`);
  }

  get speedUs() {
    let usSpeed = this.speed / 1.6;
    console.log(`${usSpeed}mi/h`);
  }
}

class Carwheels extends Car {
  constructor(carName, speed, handDrive) {
    super(carName, speed);
    this.handDrive = handDrive;
  }
}

Carwheels.prototype.sideCheck = function (side) {
  console.log(`${this.carName} is a ${side} hand drive`);
};

const car1 = new Carwheels("ford", 50);

car1.carSpeed();
car1.speedUs;
car1.sideCheck("left");

const Bjss = function (item1, item2) {
  this.item1 = item1;
  this.item2 = item2;
};

let bee = new Bjss("pen", "pencils");
console.log(bee);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function checkArr(num, callback) {
  let arrs = [];

  //   for (const x of num) {
  //     if (callback(x)) {
  //       arrs.push(x);
  //     }
  //   }
  num.forEach((nums) => {
    if (callback(nums)) {
      arrs.push(nums);
    }
  });
  console.log(arrs);
}

const loperss = (sum) => sum >= 0;

checkArr(myNumbers, loperss);
