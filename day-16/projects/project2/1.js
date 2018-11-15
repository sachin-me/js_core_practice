// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function(driver, type, speed, drive) {

  // Only Shared Property
  let sharedProp = {
    driver: driver,
    speed: speed,
    drive: function(mph) {
      speed = mph;
      return `${driver} driving at ${mph} miles per hour`;
    }
  }
  if (type == 'Car') {

    // new Car Object
    var Car = Object.create(null);
    Car.share = sharedProp;
    Car.name = 'Car';
    console.log(sharedProp.drive(speed));
    return Car;
  } else if (type == 'Truck') {

    // new Truck Object
    var Truck = Object.create(null);
    Truck.share = sharedProp;
    Truck.name = 'Truck';
    console.log(sharedProp.drive(speed));
    Truck.cargo = [];

    // Loading Cargo
    Truck.loadCargo = function(cargo) {
      Truck.cargo.push(cargo);
      return Truck;
    }

    // Unloading Cargo
    Truck.unloadCargo = function() {
      return Truck.cargo.pop();
    }
    console.log(Truck.loadCargo('chicken'));
    console.log(`============================`);
    console.log(Truck.unloadCargo());
    return Truck;
  }
};

var Car = new Vehicle('Mickey', 'Car', 80);
console.log(Car);

var Truck = new Vehicle('Mickey', 'Truck', 80);
console.log(Truck);



// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.

function Person(name) {
  this.name = name;
}
Person.prototype.teach = function(subject) {
  return `${this.name} teaches ${subject}`;
}

let Teacher = new Person('Mickey');
console.log(Teacher.teach('Programming'));
console.log(Teacher);
