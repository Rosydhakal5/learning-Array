'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri:{
      open: 11,
      close: 23,
    },
    sat:{
      open: 0,
      close: 24,
    }
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }, 
  orderDelivery: function ({starterIndex, mainIndex, time, address}) {
    console.log( `Your order has been Recieved on ${time}, for ${this.mainMenu[mainIndex]} and  ${this.starterMenu[starterIndex]}, soon will be delivered to ${address}
      Thank You for choosing us 🥳`  
    );
  },
  orderPasta:function(ing1, ing2, ing3){
    console.log(`Here is your pasta ${ing1},${ing2}, ${ing3} `)
  }
}
restaurant.orderDelivery({
  time: "22:30",
  address: " 11/11 some streets down 2024",
  mainIndex : 2,
  starterIndex: 2,
})


// let [main, secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// //nested destructing 
// const nested = [2, 4, [5,6]];
// const [i, ,j] = nested;
// console.log(i, j);
// const [a, , [o, k]] = nested;
// console.log(a, o, k);


// //default values
// const [p =1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

// //destructuring objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// const {name: restaurantName, openingHour: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags );

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

//Mutating Variable 
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};
({a, b} = obj);
console.log(a, b);

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


//Spread Operator 

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);
const newArr = [1, 2, ...arr] //using spread operator 
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array 
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: array, strings, maps, sets. NOT objects
const str = 'hello';
const letters = [...str, ' ', 'R.'];
console.log(letters);
console.log(...str);


// const ingredients = [
//   prompt("let's make pasts! Ingredient 1?"),
//   prompt("let's make pasts! Ingredient 2?"),
//   prompt("let's make pasts! Ingredient 3?")
// ]
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//objects

// const newResturant = {
//   founder: "gaetana",
//   year: 1998,
//   ...restaurant, 
//   }
// console.log(newResturant);

// const resturantCopy = {...restaurant};
// resturantCopy.name = "Maria Tusa";
// console.log(resturantCopy);
// console.log(newResturant);


//Rest operator using ... on left side
const [d, e, ...others] = [1,2,3,4,5];
console.log(d,e,others);
//REST Should always be use in last 
const [Pizza, Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(Pizza, Risotto, otherFood);

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);