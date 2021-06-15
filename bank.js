//'Use strict'
/*const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  weekday: 'long',
};
console.log(now);
console.log('hello world');
const num = 38383740383.83;
console.log(new Intl.NumberFormat('de-DE').format(num));

// SET TIMEOUT
const ingredients = ['', 'olives'];
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here are ingredients for Pizza:${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

console.log('waiting.......');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// SET INTERVAL
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);
if (now === now) {
  clearInterval(now);
}*/
//document.documentElement.textContent = '';
// const Person = function (name, birthyear) {
//   this.name = name;
//   this.birthyear = birthyear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthyear);
// };
// const jonas = new Person('jonas', 1973);
// const milda = new Person('milda', 2001);
// jonas.calcAge();
// milda.calcAge();
// console.log(Person.prototype);
// console.log(jonas);
// console.log(milda);
// console.log(typeof Person);
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.acceleration = function () {
//   this.speed += 10;
//   console.log(`${this.make}🚔is accelerating at ${this.speed}km/hr.`);
// };
// Car.prototype.decceleration = function () {
//   this.speed -= 5;
//   console.log(`${this.make}🚖 is deccelerating at ${this.speed}km/hr.`);
// };
// const toyota = new Car('toyota', 120);
// console.log(toyota);
// toyota.decceleration();
// toyota.acceleration();
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - `${this.birthYear}`);
  }
  set;
}
const mark = new PersonCl('mark', 1992);
console.log(mark);
mark.calcAge();
const account = {
  owner: 'jonas',
  movement: [200, 530, 120, 300],
  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

account.latest = 50;
console.log(account.latest);
console.log(account.movement);
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const ali = Object.create(PersonProto);
ali.birthYear = 1953;
ali.calcAge();
console.log(ali);
const mendy = Object.create(PersonProto);
mendy.init('mendy', 1930);
console.log(mendy);
mendy.calcAge();
