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
