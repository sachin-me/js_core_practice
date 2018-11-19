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

CreateHerbivorous.prototype.__proto__ = CreateAnimal.prototype;

CreateHerbivorous.prototype.eatGrass = function() {
  return `${this.name} eats grass`;
}



function CreateCarnivorous(name, age) {
  this.name = name;
  this.age = age;
}

CreateCarnivorous.prototype.__proto__ = CreateAnimal.prototype;

CreateCarnivorous.prototype.eatMeat = function() {
  return `${this.name} eats meats`;
}



var donkey = new CreateHerbivorous('Donkey', 30);
console.log(donkey.eatGrass());
console.log(donkey);

var dog = new CreateAnimal('Dog', 20);
dog.speak = `${dog.name} barks`;
console.log(dog);
