class createAnimal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    return `${this.name} eats and he is ${this.age} years old`;
  }
  move() {
    return `${this.name} moves and he is ${this.age} years old`;
  }
  
}

class createHerbivorous extends createAnimal {
  constructor(name, age) {
    super(name, age);
  }
  eatGrass() {
    return `${this.name} eats grass!!`;
  }
}

class createCarnivorous extends createAnimal {
  constructor(name, age) {
    super(name, age);
  }
  eatMeat() {
    return `${this.name} eats meat!!`
  }
}

let dog = new createCarnivorous('Dog', 30);
dog.speak = `${dog.name} barks`;
console.log(dog.eat());
console.log(dog.eatMeat());
console.log(dog);

let donkey = new createHerbivorous('Donkey', 20);
donkey.work = `${donkey.name} carry weigths`
console.log(donkey.eatGrass());
console.log(donkey);
