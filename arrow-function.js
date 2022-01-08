// // Arrow Func vs normal function with function keyword

// // Normal function with Function keyword Constructable and callable
// // function Sum(a, b) {
// //   this.a = b;
// //   this.b = b;
// //   return a + b;
// // }

// // const SumObj = new Sum(5, 6); // constructing using new - function keyword
// // console.log(Sum(5, 7)); // Calling
// // console.log(SumObj); // Instantiated Object

// // Es6 Arrow func  // Only callable
// const SumArrow = (a, b) => {
//   return a + b;
// };
// // console.log(SumArrow(5, 7)); // Callable
// // const SumArrowObj = new SumArrow(5, 7);
// // console.log(SumArrowObj);

// // OOP ---> Object Oriented Programming
// // Real World Entity eg:
// // Car( Attributes: touch & feelColor, Model, torque, horse power,...etc . Methos:  Driving, Honking, Racing ),
// // Post

// // const

// // Blue Print Of a Car

// // const Arr = new Array(1, 2, 3, 45, 5);
// // console.log(Arr.length);

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   gender: "male",
//   interests: ["music", "skiing"],
//   bio: function () {
//     alert(
//       this.name[0] +
//         " " +
//         this.name[1] +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         interests[0] +
//         " and " +
//         this.interests[1] +
//         "."
//     );
//   },
//   greeting: function () {
//     alert("Hi! I'm " + this.name[0] + ".");
//   },
// };

// // console.log(person.bio());

// const personTwo = {
//   name: ["Sanjay", "Saravanan"],
//   age: 32,
//   gender: "male",
//   interests: ["music", "skiing"],
//   bio: function () {
//     alert(
//       this.name[0] +
//         " " +
//         this.name[1] +
//         " is " +
//         this.age +
//         " years old. He likes " +
//         this.interests[0] +
//         " and " +
//         this.interests[1] +
//         "."
//     );
//   },
//   greeting: function () {
//     alert("Hi! I'm " + this.name[0] + ".");
//   },
// };

// // console.log("Person One");

function Car(color, model, yearOfManu) {
  this.color = color;
  this.model = model;
  this.yearOfManu = yearOfManu;

  this.driving = (person) => {
    console.log(`${person} is driving ${this.color} ${this.model}`);
  };
}

// const BMW = new Car("Blue", "BMW", 2022); // instantiation
// //BMW.honking();

// Car.prototype.honking = (person) => {
//   console.log(`${person} in ${this.model} is  honking`);
// }
// const Audi = new Car("Yello", "Audi", 2021);
// Audi.honking();

function XUV(color, model, yearOfManu, noOfSeater) {
  Car.call(this, color, model, yearOfManu);
  this.noOfSeater = noOfSeater;
}

const MahindraXUV = new XUV("Grey", "Mahindra", 2017, 8);
MahindraXUV.driving("Sanjay");
