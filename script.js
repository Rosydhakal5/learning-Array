'use strict';
const weekdays = ["Monday", "tuesday", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]:{
    open: "11am",
    close: "23pm",
  },
  [weekdays[2+3]]:{
    open: 0,
    close: 24,
  }
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }, 
  orderDelivery({starterIndex, mainIndex, time, address}) {
    console.log( `Your order has been Recieved on ${time}, for ${this.mainMenu[mainIndex]} and  ${this.starterMenu[starterIndex]}, soon will be delivered to ${address}
      Thank You for choosing us 🥳`  
    );
  },
  //using ES^ object literal 
  openingHours,

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your pasta ${ing1},${ing2}, ${ing3} `)
  },
  orderPizza(mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
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

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// // const {name: restaurantName, openingHour: hours, categories: tags} = restaurant;
// // console.log(restaurantName, hours, tags );

// // const {menu = [], starterMenu: starters = []} = restaurant;
// // console.log(menu, starters);

// //Mutating Variable 
// let a = 111;
// let b = 999;
// const obj = {a: 23, b:7, c:14};
// ({a, b} = obj);
// console.log(a, b);

// //nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);


// //Spread Operator 

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr);
// const newArr = [1, 2, ...arr] //using spread operator 
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array 
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 array 
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: array, strings, maps, sets. NOT objects
// const str = 'hello';
// const letters = [...str, ' ', 'R.'];
// console.log(letters);
// console.log(...str);


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
// const [d, e, ...others] = [1,2,3,4,5];
// console.log(d,e,others);
// //REST Should always be use in last 
// const [Pizza, Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(Pizza, Risotto, otherFood);

// //objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(sat, weekdays);

// //functions 
// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0; i<numbers.length; i++ )
//   sum += numbers[i];
//   console.log(sum);
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(5, 3, 7, 2, 1, 4);


// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");


// //Short-circuit evaluation 
// console.log(3 || "Rosy");
// console.log("" || "Dhakal");
// console.log(undefined || null);
// console.log(undefined || 0 || "Hello" || 23 ||null);

// restaurant.numGuests = 23;
// /// when numGuest === 0

// restaurant.numGuests2 = 0; 
// const guest = restaurant.numGuests2 || 10;
// console.log(guest)

// //correcy way for nullish null and undefined (NOT 0 or ' ')
// const guestCorrect = restaurant.numGuests2 ?? 10;
// console.log(guestCorrect);

// const guest1 = restaurant.numGuests? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //////////////////////USING AND OPERATOR ////////////////////////
// console.log(7 && 'Rosy');
// console.log("hello" && 23 && null && 'rosy');
// //using if statement
// if (restaurant.orderPizza){
//   restaurant.orderPizza("mushroom", "spinach");
// }
// //AND operator 
// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");


//Creating game info and accessing value
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// //Assiging the first player as goal keeper and keeping others as fieldplayer
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //assigning vairable and using spread to keep total players together
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// //new array 
// const players1Final = [...players1, "Thiago", "Play", "Messi"]
// console.log(players1Final);

// //Nested destructuring 
// const {odds: {team1, x:draw, team2}} = game;
// console.log(team1, draw, team2);

// //get the goal scored
// const printGoal = function(...players){
//   console.log(players);
// console.log(`${players.length} goals were scored`);
// }
// printGoal(...game.scored);

// //check the odd 
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

//Looping over array \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//forof
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item)
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
}
// console.log([...menu.entries()])

if(restaurant.openingHours && restaurant.openingHours.Monday)
console.log(restaurant.openingHours.Monday.open);

if(restaurant.openingHours.fri)
console.log(restaurant.openingHours.fri.open);

//with optional chaining 
console.log(restaurant.openingHours.Monday?.open)

for (const item of weekdays) {
  const open = restaurant.openingHours[item]?.open ?? "closed";
  console.log(`On ${item} we open at ${open}`)
}

console.log(restaurant.orderPizza(2, 1) ?? "it doesn't exits");

//arrys 
const users = [
  {
    name: "rose",
    email: "rosydhakal019@gmail.com"
}
];
console.log(users[0].name?? "user array is empty");