const name = "zari";
const age = 22;

// console.log(name + age + "value");
console.log(`Hello ${name} and your age is ${age}`);

const gameName = new String('SamanZari')

console.log(gameName.length);
console.log(gameName.toUpperCase());
//kis possition pa kon sa charachter hai 
console.log(gameName.charAt(5));
console.log(gameName.indexOf('Z'));

const newString = gameName.substring(0 , 4)
console.log(newString);
// reverse karna ka liya use karta is ma nagitive value da sakty hai
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     Sam    " ;
console.log(newStringOne);
// ya space ko khtam kar dyta hai 
console.log(newStringOne.trim());