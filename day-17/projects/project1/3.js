function CreateAnimal(name, age) {
  this.name = name;
  this.age = age;
}
CreateAnimal.prototype.eat = function() {
  return `${this.name} eats`;
}
CreateAnimal.prototype.move = function() {
  return `${this.name} moves`;
}

function CreateHerbivorous(name, age) {
  this.name = name;
  this.age = age;
}

CreateHerbivorous.prototype.eatGrass = function() {
  return `${this.name} eats grass`;
}

CreateHerbivorous.prototype.__proto__ = CreateAnimal.prototype;

function CreateCarnivorous(name, age) {
  this.name = name;
  this.age = age;
}

CreateCarnivorous.prototype.eatMeat = function() {
  return `${this.name} eats meats`;
}

CreateCarnivorous.prototype.__proto__ = CreateAnimal.prototype;

var donkey = new CreateHerbivorous('Donkey', 30);
console.log(donkey.eatGrass());
console.log(donkey);

var dog = new CreateAnimal('Dog', 20);
dog.speak = `${dog.name} barks`;
console.log(dog);