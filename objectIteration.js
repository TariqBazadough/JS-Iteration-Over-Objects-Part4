const cars = [
  {
    id: 401,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  },
  {
    id: 402,
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Silver",
  },
  {
    id: 403,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red",
  },
  {
    id: 404,
    make: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    color: "Black",
  },
  {
    id: 405,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    color: "White",
  },
];

// 1) Using `getCarMake` function that accepts a `car` object, return the make (brand) of the car
function getCarMake(car) {
  // write your code here...
}
// console.log(getCarMake(cars[0])); // Outputs: Toyota

// 2) Using `isCarColorMatching` function that accepts `car` object and `color` string arguments, return true if the car's color matches the provided color, otherwise returns false
function isCarColorMatching(car, color) {
  // write your code here...
}
// console.log(isCarColorMatching(cars[1], "Blue")); // Outputs: false

// 3) Using `addCar` function that accepts an array of car objects `cars` and `car` object, add the new car to the array of cars, and return the updated array
function addCar(cars, car) {
  // write your code here...
}
// console.log(addCar(cars, { id: 406, make: "Kia", model: "Sorento", year: 2021, color: "Green" }));

// 4) Using `countCarsMadeInYear` function that accepts an array cars objects `cars` and a manufacturing year `year` in numbers, return the number of cars made in the specified year
function countCarsMadeInYear(cars, year) {
  // write your code here...
}
// console.log(countCarsMadeInYear(cars, 2020)); // Outputs: 2

// 5) Using `removeCarById` function that accepts an array of cars objects `cars` and an `id` of number, remove the car with matching id from the array, and return the updated array.
function removeCarById(cars, id) {
  // write your code here...
}
// console.log(removeCarById(cars, 404));

// 6) Using `updateCarColor` function that accepts the following arguments: an array of car objects `cars`, an `id` (number) and a `newColor` (string), updates the color of the car with the given id to the new color. and return the updated car object. If no car is found with the given id, return "No Car Found".
function updateCarColor(cars, id, newColor) {
  // write your code here...
}
// console.log(updateCarColor(cars, 401, "Yellow"));

module.exports = {
  getCarMake,
  isCarColorMatching,
  addCar,
  countCarsMadeInYear,
  removeCarById,
  updateCarColor,
};