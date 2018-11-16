function CreateAnimal(name, age) {
  let Animal = Object.create(animalShare);
  Animal.name = name;
  Animal.age = age;
  return Animal;
}

// Shared property
let animalShare = {
  eat: function() {
    return `${this.name} eats and he is ${this.age} years old`;
  },
  move: function() {
    return `${this.name} moves and he is ${this.age} years old`;
  }
}

// Only Veg Animals
function createHerbivorous(name, age) {
  let Herbivorous = CreateAnimal(name, age);
  Object.setPrototypeOf(Herbivorous, eatHerbivorous);
  return Herbivorous;
}

let eatHerbivorous = {
  eatGrass: function(){
    return `${this.name} eats Grass!!`;
  }
}

Object.setPrototypeOf(eatHerbivorous, animalShare);

// Only Non-veg Animals
function createCarnivorous(name, age) {
  let Carnivorous = CreateAnimal(name, age);
  Object.setPrototypeOf(Carnivorous, eatCarnivorous);
  return Carnivorous;
}

let eatCarnivorous = {
  eatMeat: function() {
    return `${this.name} eats meats!!`;
  }
}

Object.setPrototypeOf(eatCarnivorous, animalShare);

// Veg Example 1

function Rabbit(name, age) {
  let rabbit = CreateAnimal(name, age);
  Object.setPrototypeOf(rabbit, rabbbitJump);
  return rabbit;
}

let rabbbitJump = function() {
  return `${this.name} jumps`;
}

Object.setPrototypeOf(rabbbitJump, eatHerbivorous);

let rabbit = new Rabbit('Rabbit', 10);
console.log(rabbit.eat());
console.log(rabbit.move());
console.log(rabbit.eatGrass());
console.log(rabbit);

// Veg Example 2
let cow = new createHerbivorous('Cow', 30);
cow.milk = true;
console.log(cow.eatGrass());
console.log(cow);

// Veg Example 3
let donkey = new createHerbivorous('Donkey', 20);
donkey.work = `${donkey.name} carry weights`
console.log(donkey);

// Non-Veg Example 1

function Dog(name, age) {
  let dog = CreateAnimal(name, age);
  Object.setPrototypeOf(dog, dogSpeak);
  return dog;
}

let dogSpeak = function() {
  return `${this.name} barks`;
}

Object.setPrototypeOf(dogSpeak, createCarnivorous);


let dog = new createCarnivorous('Dog', 20);
console.log(dog.eatMeat());
console.log(dog.move());
console.log(dog);