// ((1))

let num1 = 27;

if (num1 * num1 > 100) {
  console.log("რიცხვის კვადრატი მეტია 100-ზე");
} else {
  console.log("რიცხვის კვადრატი არ 100-ზე მეტი");
}

// ((2))

let num2 = 87;

if (num2 > 50 || num2 < 100) {
  console.log("ეს რიცხვი მეტია 50-ზე და ნაკლებია 100-ზე");
} else if (num2 < 50) {
  console.log("ეს რიცხვი ნაკლებია 50-ზე");
} else if (num2 > 100) {
  console.log("ეს რიცხვი 100-ზე მეტია");
} else {
  console.log("კარგად");
}

// ((3))

let num3 = -1337;

if (num3 == 0) {
  console.log("რიცხვი უდრის 0-ს");
} else if (num3 < 0) {
  console.log("რიცხვი არის უარყოფითი");
} else {
  console.log("კარგად");
}

// ((4))

let side1width = 5;
let side2width = 10;
let side3width = 15;
let side4width = 20;

switch (true) {
  case side1width + side2width + side3width + side4width > 50:
    console.log("კვადრატის პერიმეტრი მეტია 50-ზე");
    break;
  default:
    console.log("კვადრატის პერიმეტრი 50-ზე ნაკლებია");
    break;
}

//  ((end))
