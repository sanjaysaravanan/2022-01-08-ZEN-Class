class Animal {
  // Blueprint of an Animal
  constructor(name, color, species) {
    this.name = name;
    this.color = color;
    this.species = species;
  }

  logAnimal() {
    console.log(`I am a ${this.name}`);
  }
  myColor() {
    return `My Color is ${this.color}`;
  }
  mySpecies() {
    return this.species;
  }
}

// var newAnimal = new Animal("Elephant", "Black", "Mammal");
// newAnimal.logAnimal();
// console.log(newAnimal.myColor());

class ChildAnimal extends Animal {
  constructor(childname, name, color, species) {
    super(name, color, species);
    this.childname = childname;
  }

  logChildAnimal = () => {
    console.log(`Little ${this.name} is called as ${this.childname}`);
  };
}

var newChild = new ChildAnimal("Cub", "Loin", "Red", "Mammal");
newChild.logChildAnimal();
